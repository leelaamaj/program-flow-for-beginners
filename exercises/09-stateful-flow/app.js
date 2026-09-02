const answer = `
flowchart TD
    A[Start] --> B[Locked]
    B -->|event: coin| C[Unlocked]
    B -->|event: push| B
    C -->|event: push| D[Output: allow pass and rotate]
    C -->|event: coin| C
    D --> B
    B --> E[End]
`;

module.exports = answer.trim();
