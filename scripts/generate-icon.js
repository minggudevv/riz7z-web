const fs = require('fs');
const path = require('path');

async function ensureSharp() {
  try {
    require.resolve('sharp');
    return require('sharp');
  } catch (e) {
    console.error('Dependency "sharp" is not installed. Please run: npm i -D sharp');
    process.exit(1);
  }
}

async function main() {
  const sharp = await ensureSharp();
  const projectRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(projectRoot, 'public');
  const sources = ['RIZ7Z.png', 'logo512.png', 'logo192.png'];

  const existingSource = sources
    .map((name) => path.join(publicDir, name))
    .find((p) => fs.existsSync(p) && path.basename(p) !== 'icon.png');

  if (!existingSource) {
    console.error('No source image found in public/. Expected one of: logo512.png, logo192.png');
    process.exit(1);
  }

  const outputIcon = path.join(publicDir, 'icon.png');
  const output192 = path.join(publicDir, 'logo192.png');
  const output512 = path.join(publicDir, 'logo512.png');

  try {
    // Generate 512x512
    await sharp(existingSource)
      .resize(512, 512, { fit: 'cover' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(output512);

    // Generate 192x192
    await sharp(existingSource)
      .resize(192, 192, { fit: 'cover' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(output192);

    // icon.png mirrors 512x512
    await sharp(existingSource)
      .resize(512, 512, { fit: 'cover' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputIcon);

    console.log(`Generated: ${path.relative(projectRoot, outputIcon)}, ${path.relative(projectRoot, output192)}, ${path.relative(projectRoot, output512)} from ${path.relative(projectRoot, existingSource)}`);
  } catch (err) {
    console.error('Failed to generate icon.png:', err.message);
    process.exit(1);
  }
}

main();


