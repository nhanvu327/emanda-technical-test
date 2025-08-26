# What I implemented?

## Clarification

- Is it multi level nesting? Yes.

## UI

- Update `TaskItem` component to include a create sub task btn & toggle icon to display sublist
  - Param: `task` object.
  - Recursively render if task has any subtask
- Create `CreateTask` component, shared by root task & sub task.
- Keep create/fetch task logic (in `TaskContent`) as is. All root tasks and their nested subtasks are in same nested structure kept in centralised place.

## Backend

- It's currently using `Adjacency List Model` pattern for hierarchical data modeling.

  - Easy to get parent of a task or their direct children.
  - Hard to get full tree without ORM (require recursive CTEs)
  - Hard to know what level it is in a tree
    => implement `Closure table` patterm (supported by TypeORM) (Nested Set Model and Path Enumeration are not appropriate)
  - Requires DB migration
  - Take more space than Adjacency List Model. Could be a concern for in memory database.
  - Solve problems of Adjacency pattern

- current `findAll` returns flat structure -> replaced by `findTrees` to return a tree structure
- New controller handler for GET `api/tasks/:id/subtasks` API
- New method `findSubtasks` in service for the controller (use `find` instead of `findDescendants` method of TreeRepository)

# Roadmap

## UI:

- lazy loading insteading load all tasks & nested tasks in at the same time
- Replace inline styling by styled-components
- Styling and Accessibility
- Error handling for API requests

## Backend:

- Database persistence (PostgreSQL/MySQL) => easier to debug
- OpenAPI documentation
- logging and monitoring
- Unit tests for both UI and backend
