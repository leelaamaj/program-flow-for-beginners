const answer = `
flowchart TD
    A[Start] --> B[Input email]
    B --> C{Valid email?}
    C -->|no| B
    C -->|yes| D[Loop complete and valid]
    D --> E[End]
`;

module.exports = answer.trim();
