/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart LR
    A("Start") --> B["Boil Water"]
    B["Boil Water"] --> C["Brew Coffee"]
    C["Brew Coffee"] --> D["Serve Cofee"]
    D["Serve Cofee"] --> E("End")
`;

module.exports = answer.trim();