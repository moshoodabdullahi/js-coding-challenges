const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

// Get the current directory where the script is run
const inputDir = path.join(process.cwd(), 'fcc-js');

// Get the output directory from the command-line argument or use the default value
const outputDir = process.argv[2] || 'dist';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate the complete HTML content with the template
function generateCompleteHtmlContent(htmlContent, directory) {
  const cssFilePath = path.relative(directory, path.join(process.cwd(), 'css', 'styles.css'));
  const backButton = directory.endsWith('fcc-js') ? '' : `<li><a href="../.">Go Back</a></li>`;
  // Extract the title from the HTML content
  const titleMatch = htmlContent.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  let pageTitle = 'Learning Javascript'; // Fallback default title

  if (titleMatch) {
    // Use the value of the first <h1> heading as the title
    pageTitle = titleMatch[1];
  } else {
    // If no <h1> heading is available, use the first line as the title
    const firstLineMatch = htmlContent.match(/^.*$/m);
    if (firstLineMatch) {
      pageTitle = firstLineMatch[0];
    }
  }

  const template = `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FCC JS | ${pageTitle}</title>
  <link rel="stylesheet" href="${cssFilePath}">
</head>
<body>
  <nav>
    <ul>
    <li><a href="/">Home</a></li>
    ${backButton}
    
    </ul>
  </nav>
  <main>
    ${htmlContent}
  </main>
</body>
</html>
`;

  return template;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });

  // Check if the directory or its subdirectories have Markdown files
  const hasMarkdownFiles = files.some((file) => {
    const filePath = path.join(directory, file.name);

    if (file.isDirectory()) {
      return processDirectory(filePath);
    }
    if (file.isFile() && path.extname(file.name).toLowerCase() === '.md') {
      return true;
    }

    return false;
  });

  if (hasMarkdownFiles) {
    files.forEach((file) => {
      const filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        processDirectory(filePath);
      } else if (file.isFile() && path.extname(file.name).toLowerCase() === '.md') {
        // Convert the markdown content to HTML
        const markdownContent = fs.readFileSync(filePath, 'utf8');
        const htmlContent = md.render(markdownContent);

        // Generate the complete HTML content with the template
        const completeHtmlContent = generateCompleteHtmlContent(htmlContent, directory, files);

        // Write the HTML content to a corresponding file in the output directory
        const outputFileDir = path.join(outputDir, path.relative(inputDir, directory));
        const outputFilePath = path.join(outputFileDir, `${path.parse(file.name).name}.html`);

        // Create the output subdirectory if it doesn't exist
        if (!fs.existsSync(outputFileDir)) {
          fs.mkdirSync(outputFileDir, { recursive: true });
        }

        fs.writeFileSync(outputFilePath, completeHtmlContent);

        // Rename README.md files to index.html
        if (file.name.toLowerCase() === 'readme.md') {
          fs.renameSync(outputFilePath, path.join(outputFileDir, 'index.html'));
        }
      }
    });
  }

  return hasMarkdownFiles;
}

// Start processing from the current directory
processDirectory(inputDir);
