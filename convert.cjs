const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../../portfolio/index.html');
const componentsDir = path.join(__dirname, 'src/components');

let html = fs.readFileSync(htmlPath, 'utf8');

// Quick and dirty HTML to JSX conversion
html = html.replace(/class=/g, 'className=')
           .replace(/<!--([\s\S]*?)-->/g, '') // remove comments
           .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
           .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
           .replace(/<br>/g, '<br />')
           .replace(/style="([^"]*)"/g, (match, p1) => {
             // Convert inline styles like style="color:#F59E0B" to style={{ color: '#F59E0B' }}
             const props = p1.split(';').filter(Boolean).map(s => {
               const [key, val] = s.split(':').map(str => str.trim());
               if (!key || !val) return '';
               const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
               return `${camelKey}: '${val}'`;
             });
             return `style={{ ${props.join(', ')} }}`;
           });

const sections = [
  { id: 'navbar', tag: 'nav', name: 'Navbar' },
  { id: 'home', tag: 'section', name: 'Hero' },
  { id: 'about', tag: 'section', name: 'About' },
  { id: 'skills', tag: 'section', name: 'Skills' },
  { id: 'experience', tag: 'section', name: 'Experience' },
  { id: 'projects', tag: 'section', name: 'Projects' },
  { id: 'certifications', tag: 'section', name: 'Certifications' },
  { id: 'contact', tag: 'section', name: 'Contact' },
  { id: 'ai-assistant', tag: 'div', name: 'AIAssistant' },
  { tag: 'footer', name: 'Footer', noId: true }
];

let appImports = [];
let appComponents = [];

sections.forEach(sec => {
  let regex;
  if (sec.noId) {
    regex = new RegExp(`<${sec.tag}[^>]*>([\\s\\S]*?)<\\/${sec.tag}>`);
  } else {
    regex = new RegExp(`<${sec.tag}[^>]*id="${sec.id}"[^>]*>([\\s\\S]*?)<\\/${sec.tag}>`);
  }
  
  const match = html.match(regex);
  if (match) {
    const fullTag = match[0];
    const componentCode = `import React from 'react';\n\nconst ${sec.name} = () => {\n  return (\n    ${fullTag}\n  );\n};\n\nexport default ${sec.name};`;
    fs.writeFileSync(path.join(componentsDir, `${sec.name}.jsx`), componentCode);
    appImports.push(`import ${sec.name} from './components/${sec.name}';`);
    appComponents.push(`      <${sec.name} />`);
  }
});

// Write App.jsx
const appCode = `import React, { useEffect } from 'react';
${appImports.join('\n')}

function App() {
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      
      <canvas id="particle-canvas"></canvas>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="mesh-bg"></div>
      <div className="toast-notif" id="toast"></div>

${appComponents.join('\n')}
    </>
  );
}

export default App;`;

fs.writeFileSync(path.join(__dirname, 'src/App.jsx'), appCode);

console.log('Successfully generated React components!');
