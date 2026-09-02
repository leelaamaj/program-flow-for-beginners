/*
 Edit only the Mermaid flow inside `answer`.
 Keep this shape: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Start] --> B[Input age and license]
    B --> C{Age 21 or older?}
    C -->|yes| D{Valid license?}
    C -->|no| E[No rental]
    D -->|yes| F[Rental allowed]
    D -->|no| E
    E --> G[End]
    F --> G
    F --> D
    G --> E
`;

module.exports = answer.trim();
