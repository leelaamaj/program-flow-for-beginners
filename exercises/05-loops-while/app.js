const answer = `
flowchart TD
    A[Start] --> B[Input password]
    A --> F[Access granted and End]
    B --> C{Password correct?}
    C -->|yes| F
    C -->|no| D[Loop: incorrect password]
    D --> B
`;

module.exports = answer.trim();
