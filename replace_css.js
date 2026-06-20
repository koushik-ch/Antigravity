const fs = require('fs');

function processCss(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace background: #fff; with background: var(--bg-panel);
    content = content.replace(/background:\s*#fff;/g, 'background: var(--bg-panel);');
    // Replace some other hardcoded #fff backgrounds that might not have a semicolon or spaces
    content = content.replace(/background:\s*#fff\b/g, 'background: var(--bg-panel)');
    
    // In :root, add --bg-panel
    if (content.includes(':root {')) {
        content = content.replace(/:root {/, ":root {\n    --bg-panel: #fff;");
        // Add dark mode
        content += `\n
body.dark-mode {
    --bg-primary: #1a1514;
    --bg-panel: #2d2a29;
    --bg-card: #c49929;
    --bg-card-2: #248c77;
    --bg-card-3: #c96557;
    
    --text-primary: #fdf5ea;
    --text-muted: rgba(253, 245, 234, 0.6);
    
    --border-color: #fdf5ea;
}
`;
    }

    fs.writeFileSync(file, content);
}

processCss('style.css');
processCss('google-l4.css');
processCss('firebase-sync.js');
console.log('Done replacing CSS vars');
