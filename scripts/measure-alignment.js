const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function measure(viewportWidth) {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9333',
    `--window-size=${viewportWidth},1000`,
    'http://localhost:3000'
  ]);

  try {
    // Wait for Chrome to start
    await new Promise(r => setTimeout(r, 2000));

    // Get WebSocket URL
    const list = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9333/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(t => t.type === 'page');
    if (!page) throw new Error('No page target found');

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve) => ws.onopen = resolve);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (msg) => {
          const res = JSON.parse(msg.data);
          if (res.id === curId) {
            ws.removeEventListener('message', handler);
            resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    // Wait for page to render
    await new Promise(r => setTimeout(r, 1000));

    const result = await send('Runtime.evaluate', {
      expression: `(() => {
        const header = document.querySelector('header');
        const headerNav = header ? header.querySelector('nav') : null;
        const headerLogoLink = header ? header.querySelector('a[aria-label=\"Devgion — home\"]') : null;
        const headerLogoSpan = headerLogoLink ? headerLogoLink.querySelector('span') : null;
        const headerLogoImg = headerLogoSpan ? headerLogoSpan.querySelector('img') : null;
        
        const heroSection = document.querySelector('section[aria-labelledby=\"hero-heading\"]');
        const heroContainer = heroSection ? heroSection.querySelector('.relative.my-auto') : null;
        const heroHeading = document.querySelector('#hero-heading');
        
        const footer = document.querySelector('footer');
        const footerContainer = footer ? footer.querySelector('div') : null;
        const footerLogoLink = footer ? footer.querySelector('a[aria-label=\"Devgion — home\"]') : null;
        const footerLogoSpan = footerLogoLink ? footerLogoLink.querySelector('span') : null;
        const footerLogoImg = footerLogoSpan ? footerLogoSpan.querySelector('img') : null;

        function getRect(el) {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { left: r.left, top: r.top, width: r.width, height: r.height, right: r.right };
        }

        return {
          windowWidth: window.innerWidth,
          headerNav: getRect(headerNav),
          headerLogoLink: getRect(headerLogoLink),
          headerLogoSpan: getRect(headerLogoSpan),
          headerLogoImg: getRect(headerLogoImg),
          heroContainer: getRect(heroContainer),
          heroHeading: getRect(heroHeading),
          footerContainer: getRect(footerContainer),
          footerLogoSpan: getRect(footerLogoSpan),
          footerLogoImg: getRect(footerLogoImg),
        };
      })()`,
      returnByValue: true
    });

    const val = result.result ? result.result.value : result.value;
    console.log(`\n=== Viewport width: ${viewportWidth} ===`);
    console.log(JSON.stringify(val, null, 2));

    ws.close();
  } finally {
    chrome.kill();
  }
}

async function run() {
  await measure(1280); // Desktop
  await measure(768);  // Tablet
  await measure(390);  // Mobile
}

run().catch(console.error);
