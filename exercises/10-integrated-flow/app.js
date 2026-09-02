const answer = `
flowchart TD
    A[Start] --> B[Input: select product]
    B --> C{Selection valid?}
    C -->|invalid| B
    C -->|no| H[Home: cancel selection]
    H --> B
    C -->|valid| D[Input: insert payment]
    D --> E{Payment sufficient?}
    E -->|no - loop| D
    E -->|invalid| I[Output: request valid payment]
    I --> D
    E -->|yes| F[Output: dispense product and return change; End]
`;

module.exports = answer.trim();
