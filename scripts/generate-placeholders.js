const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');

const images = [
  {
    filename: 'vmv-desktop.webp',
    width: 1440,
    height: 900,
    label: 'VMV Catering, desktop 1440x900',
    fontSize: 22,
  },
  {
    filename: 'vmv-mobile.webp',
    width: 390,
    height: 844,
    label: 'VMV Catering, mobile 390x844',
    fontSize: 14,
  },
  {
    filename: 'ybbq-desktop.webp',
    width: 1440,
    height: 900,
    label: 'Your Behind BBQ, desktop 1440x900',
    fontSize: 22,
  },
  {
    filename: 'ybbq-mobile.webp',
    width: 390,
    height: 844,
    label: 'Your Behind BBQ, mobile 390x844',
    fontSize: 14,
  },
  {
    filename: 'restaurant-desktop.webp',
    width: 1440,
    height: 900,
    label: 'Restaurant website, desktop 1440x900',
    fontSize: 22,
  },
  {
    filename: 'restaurant-mobile.webp',
    width: 390,
    height: 844,
    label: 'Restaurant website, mobile 390x844',
    fontSize: 14,
  },
];

async function generate() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const item of images) {
    const filePath = path.join(outputDir, item.filename);
    
    // Neutral slate/zinc background with clean centered text
    const svg = `
      <svg width="${item.width}" height="${item.height}" viewBox="0 0 ${item.width} ${item.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1f232b"/>
        <text 
          x="50%" 
          y="50%" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          fill="#94a3b8" 
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
          font-size="${item.fontSize}" 
          font-weight="500"
          letter-spacing="0.3"
        >
          ${item.label}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .webp({ quality: 85, effort: 6 })
      .toFile(filePath);

    const stats = fs.statSync(filePath);
    console.log(`Generated ${item.filename} (${item.width}x${item.height}): ${stats.size} bytes`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
