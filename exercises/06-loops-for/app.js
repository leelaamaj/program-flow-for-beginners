const answer = `
flowchart TD
    A[Start] --> B[Input task list]
    B --> C{Loop: more tasks?}
    C -->|yes| D[Process current task]
    D --> E[Output completed task]
    E --> C
    C -->|no| F[Finish loop]
    F --> G[End]
`;

module.exports = answer.trim();
