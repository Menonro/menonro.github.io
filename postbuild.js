const fs = require('fs').promises;
const path = require('path');

async function updateDocs() {
  const docsPath = path.join(__dirname, 'docs');
  const buildPath = path.join(__dirname, 'build');
  let cssFile;

  // 1. Удаление папки "docs" со всем содержимым
  try {
    await fs.rm(docsPath, { recursive: true, force: true });
    console.log('"docs" folder deleted.');
  } catch (error) {
    console.error(`Error deleting "docs" folder: ${error.message}`);
    return;
  }

  // 2. Получение файла "build/asset-manifest.json" и извлечение 'main.css'
  try {
    const manifestPath = path.join(buildPath, 'asset-manifest.json');
    const manifestContent = await fs.readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestContent);
    cssFile = manifest.files['main.css'];
    console.log(`Main CSS file identified: ${cssFile}`);
  } catch (error) {
    console.error(`Error reading "asset-manifest.json": ${error.message}`);
    return;
  }

  // 3. Вставка содержимого CSS-файла в "build/index.html"
  try {
    const cssFilePath = path.join(buildPath, cssFile);
    const cssContent = await fs.readFile(cssFilePath, 'utf-8');

    const indexPath = path.join(buildPath, 'index.html');
    let indexContent = await fs.readFile(indexPath, 'utf-8');

    const linkTag = `<link href="${cssFile}" rel="stylesheet">`;
    const styleTag = `<style>${cssContent}</style>`;

    indexContent = indexContent.replace(linkTag, styleTag);

    await fs.writeFile(indexPath, indexContent, 'utf-8');
    console.log(`Inserted CSS content into "build/index.html".`);
  } catch (error) {
    console.error(`Error updating "build/index.html": ${error.message}`);
  }

  // 4. Переименование папки "build" в "docs"
  try {
    await fs.rename(buildPath, docsPath);
    console.log('"build" folder renamed to "docs".');
  } catch (error) {
    console.error(`Error renaming "build" to "docs": ${error.message}`);
    return;
  }
}

updateDocs();