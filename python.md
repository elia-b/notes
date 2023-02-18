---
title: Python
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Set up Poetry and VScode project](#set-up-poetry and VScode project)

## Set up Poetry and VScode project

Install [Poetry](https://python-poetry.org/docs/)

give poetry the python interpreter you prefer,
otherwise starts with standart (might not be what you want).

```bash
poetry env use /full/path/to/python
```

or

```bash
poetry env use python3.11
```

go in the cloned repo, and init poetry project

```bash
cd pre-existing-project
poetry init
```

### Add dependencies

To add main dependency:

```bash
poetry add numpy
```

To add development dependency:

```bash
poetry add -G dev numpy
```

To install dependencies:

```bash
poetry install
```
