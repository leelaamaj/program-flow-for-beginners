const answer = `
flowchart TD
    A[Start] --> B[Input number]
    B --> C{Loop: more numbers?}
    C -->|yes| D[Add number to total]
    D --> B
    C -->|no| E[Output total]
    E --> F[End]
`;

module.exports = answer.trim();
