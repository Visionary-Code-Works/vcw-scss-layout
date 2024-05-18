### Step-by-Step Guide

1. **Update Webpack Configuration**: Use `html-webpack-plugin` to generate the HTML file in the `dist` directory.

2. **Add an HTML Template**: Create an HTML template file that will be used by the `html-webpack-plugin`.

3. **Update Build and Deployment Scripts**: Ensure that the build script generates the HTML file and the deployment script deploys the `dist` directory to GitHub Pages.

### Step 1: Install `html-webpack-plugin`

Install the `html-webpack-plugin` package:

```sh
npm install --save-dev html-webpack-plugin
```

### Step 2: Add an HTML Template

Create an HTML template file in the `src` directory. For example, `src/template.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VCW SCSS Layout</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

### Step 3: Update Webpack Configuration

Update your `webpack.common.js` file to use the `html-webpack-plugin`:

```js
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      bootstrap: path.resolve(
        __dirname,
        "node_modules/bootstrap/scss/bootstrap"
      ),
      normalize: path.resolve(
        __dirname,
        "node_modules/normalize.css/normalize"
      ),
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: 'src/template.html', // Path to your HTML template
      filename: 'index.html' // Output file name in the dist directory
    }),
  ],
};
```

### Step 4: Update Build and Deployment Scripts

Ensure that the `build` script generates the HTML file and the `deploy` script deploys the `dist` directory to GitHub Pages.

```json
"scripts": {
  "build": "webpack --config webpack.config.babel.js --env production",
  "start": "webpack serve --config webpack.config.babel.js --env development",
  "test": "jest",
  "test:e2e": "cypress run",
  "lint:scss": "stylelint \"src/**/*.scss\"",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 5: Re-build and Deploy

After updating the configuration, re-build the project and deploy it to GitHub Pages:

```sh
npm run build
npm run deploy
```

### Summary of Changes

1. **Installed `html-webpack-plugin`** to generate the HTML file.
2. **Created an HTML template** in `src/template.html`.
3. **Updated `webpack.common.js`** to use `html-webpack-plugin`.
4. **Ensured the build and deployment scripts** correctly generate and deploy the `dist` directory.

# Updated Directory Structure

```sh
vcw-scss-layout/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── cypress/
│   ├── integration/
│   │   └── basic.spec.js
│   └── support/
│       ├── commands.js
│       └── index.js
├── dist/
│   ├── bundle.js
│   ├── bundle.js.gz
│   ├── bundle.js.map
│   └── index.html
├── docs/
│   ├── index.html
│   └── [other generated documentation files]
├── src/
│   ├── components/
│   │   └── largeComponent.js
│   ├── scss/
│   │   ├── abstracts/
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _placeholders.scss
│   │   │   └── _variables.scss
│   │   ├── base/
│   │   │   ├── _base.scss
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   └── _modals.scss
│   │   ├── layout/
│   │   │   ├── _footer.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _header.scss
│   │   │   └── _sidebar.scss
│   │   ├── pages/
│   │   │   ├── _about.scss
│   │   │   └── _home.scss
│   │   ├── styles/
│   │   │   ├── _error-handlers.scss
│   │   │   ├── _mermaid.scss
│   │   │   └── _tables.scss
│   │   ├── themes/
│   │   │   ├── _dark.scss
│   │   │   └── _light.scss
│   │   ├── vendors/
│   │   │   ├── _bootstrap.scss
│   │   │   ├── custom-bootstrap.scss
│   │   │   └── _normalize.scss
│   │   └── main.scss
│   ├── __tests__/
│   │   └── index.test.js
│   ├── index.html
│   ├── index.js
│   └── template.html
├── .babelrc
├── .gitignore
├── CONTRIBUTING.md
├── cypress.json
├── jest.config.js
├── jsdoc.conf.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── webpack/
│   ├── webpack.common.js
│   ├── webpack.config.babel.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
```
