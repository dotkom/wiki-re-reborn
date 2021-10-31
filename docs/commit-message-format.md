# Commit message format

This project follows a modified version of the Angular commit message format. 
Each commit message consists of a **header**, an optional **body** and an
optional **footer**.

See [the angular docs][angular-commit-messages] for details. Below follows a
rough outline of the commit message format.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and must conform to the following format:

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─ Commit Scope: article/collab/committee/portals/auth
  │
  └─ Commit Type: build/ci/docs/feat/fix/refactor/revert/test
```

## Type

The type must be one of the following

- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug or adds a feature
- **revert**: Revert to a commit
- **test**: Adding missing tests or correcting existing tests

## Scope

The scope should be one of the project's modules or another relevant category 
specific to the type.

The following are examples of scopes used by the project:

- **article**
- **collab**
- **committee**
- **portals**
- **auth**

[angular-commit-messages]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format
