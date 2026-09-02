/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> C["Input Age"]
    C["Input Age"] --> B{"Age 18 or Older?"}
    B{"Age 18 or Older?"} -->|Yes| D["Valid - Allowed"]
    B{"Age 18 or Older?"} -->|No| E["Invalid - Denied"]
    D["Valid - Allowed"] --> F("End")
    E["Invalid - Denied"] --> F("End")
`;

// Do not modify this
module.exports = answer.trim();