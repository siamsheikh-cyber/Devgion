const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function test(viewportWidth) {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9666',
    `--window-size=${viewportWidth},800`,
    'http://localhost:3000'
  ]);

  try {
    await new Promise(r => setTimeout(r, 2000));
    const list = await new Promise((resolve) => {
      http.get('http://127.0.0.1:9666/json', (res) => {
        let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
      });
    });
    const page = list.find(t => t.type === 'page' && t.url.includes('localhost:3000')) || list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

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

    await new Promise(r => setTimeout(r, 1000));
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const link = document.querySelector('header a[aria-label="Devgion — home"]');
        const span = link ? link.querySelector('span') : null;
        const img = span ? span.querySelector('img') : null;
        const linkCS = link ? getComputedStyle(link) : {};
        const spanCS = span ? getComputedStyle(span) : {};
        const imgCS = img ? getComputedStyle(img) : {};
        
        return {
          viewportWidth: window.innerWidth,
          link: link ? {
            rect: link.getBoundingClientRect(),
            padding: linkCS.padding,
            margin: linkCS.margin,
            display: linkCS.display,
          } : null,
          span: span ? {
            rect: span.getBoundingClientRect(),
            padding: spanCS.padding,
            margin: spanCS.margin,
            aspectRatio: spanCS.aspectRatio,
            display: spanCS.display,
            justifyContent: spanCS.justifyContent,
            alignItems: spanCS.alignItems,
          } : null,
          img: img ? {
            rect: img.getBoundingClientRect(),
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            currentSrc: img.currentSrc,
            widthAttr: img.getAttribute('width'),
            heightAttr: img.getAttribute('height'),
            computedWidth: imgCS.width,
            computedHeight: imgCS.height,
            objectFit: imgCS.objectFit,
            objectPosition: imgCS.objectPosition,
          } : null
        };
      })()`,
      returnByValue: true
    });
    console.log(`\n=== Viewport width: ${viewportWidth} ===`);
    console.log(JSON.stringify(res.result ? res.result.value : res.value, null, 2));
    ws.close();
  } finally {
    chrome.kill();
  }
}

async function run() {
  await test(1280);
  await test(390);
}
run();
