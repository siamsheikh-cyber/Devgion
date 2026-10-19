const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function screenshot(width, name) {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9444',
    `--window-size=${width},800`,
    'http://localhost:3000'
  ]);

  try {
    await new Promise(r => setTimeout(r, 2000));
    const list = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9444/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(t => t.type === 'page');
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

    // Capture screenshot of top 500px
    const shot = await send('Page.captureScreenshot', {
      clip: { x: 0, y: 0, width: width, height: 450, scale: 1 }
    });

    fs.writeFileSync(path.join(__dirname, '..', name), Buffer.from(shot.data, 'base64'));
    console.log('Saved', name);
    ws.close();
  } finally {
    chrome.kill();
  }
}

screenshot(1280, 'header-desktop.png').then(() => screenshot(390, 'header-mobile.png'));
