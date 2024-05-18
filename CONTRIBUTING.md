# Contributing to VCW SCSS Layout

First off, thank you for considering contributing to VCW SCSS Layout! Your contributions are valuable and help make this project better for everyone.

## Table of Contents

- [Contributing to VCW SCSS Layout](#contributing-to-vcw-scss-layout)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Features](#suggesting-features)
    - [Submitting Pull Requests](#submitting-pull-requests)
  - [Development Setup](#development-setup)
  - [Style Guide](#style-guide)
    - [JavaScript](#javascript)
    - [SCSS](#scss)
  - [Code Reviews](#code-reviews)
  - [License](#license)

## Code of Conduct

Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community healthy and welcoming.

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by opening an issue on [GitHub Issues](https://github.com/Visionary-Code-Works/vcw-scss-layout/issues). Include as much detail as possible to help us diagnose and fix the issue quickly. Consider including:

- A clear and descriptive title.
- Steps to reproduce the bug.
- Expected and actual behavior.
- Screenshots or code snippets.

### Suggesting Features

We welcome suggestions for new features! To suggest a feature, please open an issue on [GitHub Issues](https://github.com/Visionary-Code-Works/vcw-scss-layout/issues) and include:

- A clear and descriptive title.
- A detailed explanation of the proposed feature.
- Any relevant examples or use cases.

### Submitting Pull Requests

1. **Fork the repository** to your GitHub account.
2. **Clone your fork** to your local machine:

    ```sh
    git clone https://github.com/your-username/vcw-scss-layout.git
    cd vcw-scss-layout
    ```

3. **Create a new branch** for your changes:

    ```sh
    git checkout -b feature-or-bugfix-name
    ```

4. **Make your changes** and ensure they follow the [Style Guide](#style-guide).
5. **Commit your changes** with a clear and descriptive commit message:

    ```sh
    git commit -m "Brief description of your changes"
    ```

6. **Push your changes** to your fork:

    ```sh
    git push origin feature-or-bugfix-name
    ```

7. **Open a pull request** against the `main` branch of this repository. Provide a clear description of your changes and link to any relevant issues.

## Development Setup

To set up your development environment:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Visionary-Code-Works/vcw-scss-layout.git
    cd vcw-scss-layout
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

4. **Run tests**:

    ```sh
    npm test
    ```

5. **Lint SCSS files**:

    ```sh
    npm run lint:scss
    ```

## Style Guide

Please follow these style guidelines when contributing to the project:

### JavaScript

- Use ES6 syntax.
- Use `const` and `let` instead of `var`.
- Use arrow functions where appropriate.
- Write descriptive and meaningful variable and function names.
- Include comments to explain complex logic.

### SCSS

- Follow the BEM (Block, Element, Modifier) methodology for naming classes.
- Use variables for colors, fonts, and other repeated values.
- Group related styles together.
- Include comments to explain complex styles.

## Code Reviews

All pull requests will be reviewed by project maintainers. We appreciate your patience as it may take some time to review your contribution. During the review process, you may be asked to make changes. Please make the requested changes and update your pull request accordingly.

## License

By contributing to VCW SCSS Layout, you agree that your contributions will be licensed under the MIT License.
