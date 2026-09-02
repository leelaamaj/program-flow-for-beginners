const answer = `
flowchart TD
    A[Start] --> B[Input color]
    B --> C{Choose color}
    C -->|green| D[Green output: Go]
    C -->|yellow| E[Yellow output: Slow down]
    C -->|red| F[Red output: Stop]
    D --> G[Home and End]
    E --> G
    F --> G
`;

module.exports = answer.trim();
