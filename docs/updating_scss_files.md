# Updating SCSS Files

## How to Update SCSS Files

The SCSS files in this project are organized into a modular structure to ensure maintainability and scalability. Follow these steps to update existing SCSS files:

1. **Locate the SCSS File**: Navigate to the appropriate directory under `src/scss` (e.g., `abstracts`, `base`, `components`, `layout`, `pages`, `themes`, `vendors`).

2. **Open the File**: Open the file you want to update using your preferred code editor.

3. **Make Changes**: Update the SCSS code as needed. Follow the existing coding conventions and ensure you use variables, mixins, and functions appropriately.

4. **Compile and Test**: After making changes, compile the SCSS files by running the build script:

   ```sh
   npm run build
   ```

   Test the application to ensure that your changes work as expected and do not introduce any new issues.

5. **Commit Changes**: Once you are satisfied with the changes, commit them to the repository with a descriptive commit message:

   ```sh
   git add src/scss/path/to/your/changed/file.scss
   git commit -m "Describe the changes made"
   ```

6. **Push Changes**: Push your changes to the repository:

   ```sh
   git push origin your-branch-name
   ```

## Expanding the Repository Structure

### How to Expand the SCSS Structure

To maintain a clean and organized codebase, adhere to the following guidelines when expanding the SCSS structure:

1. **Create New Directories**: If your changes introduce a new category of styles, create a new directory under `src/scss`. For example, if you are adding utility classes, create a `utilities` directory.

2. **Add New Files**: Create new SCSS files within the appropriate directory. Name the files descriptively based on their content. For example, if adding button styles, create a `_buttons.scss` file under `components`.

3. **Import New Files**: Ensure that new SCSS files are imported into `main.scss` in the correct order. For example:

   ```scss
   // src/scss/main.scss

   // Abstracts
   @import 'abstracts/variables';
   @import 'abstracts/mixins';
   @import 'abstracts/functions';
   @import 'abstracts/placeholders';

   // Base styles
   @import 'base/reset';
   @import 'base/typography';
   @import 'base/base';

   // Layout styles
   @import 'layout/header';
   @import 'layout/footer';
   @import 'layout/grid';
   @import 'layout/sidebar';

   // Component styles
   @import 'components/buttons';
   @import 'components/cards';
   @import 'components/modals';

   // Page-specific styles
   @import 'pages/home';
   @import 'pages/about';

   // Theme styles
   @import 'themes/dark';
   @import 'themes/light';

   // Vendor styles
   @import 'vendors/bootstrap';
   @import 'vendors/normalize';

   // Utility styles
   @import 'utilities/helpers';
   @import 'utilities/responsive';

   // Other specific imports
   @import 'styles/error-handlers';
   @import 'styles/mermaid';
   @import 'styles/tables';
   ```

4. **Follow Naming Conventions**: Use hyphen-separated names for SCSS files and directories (e.g., `_new-component.scss`).

## Utilizing the Application as a CDN from GitHub Pages

### How to Utilize the Application as a CDN

You can use GitHub Pages to serve your compiled CSS files as a CDN. Follow these steps:

1. **Build the Project**: Ensure your project is built and the `dist` directory contains the compiled files:

   ```sh
   npm run build
   ```

2. **Deploy to GitHub Pages**: Deploy the `dist` directory to GitHub Pages:

   ```sh
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to `Settings` > `Pages`.
   - Under `Source`, select the `gh-pages` branch and set the directory to `/ (root)`.
   - Save the settings.

4. **Access the CDN URL**: Once deployed, your CSS files will be available at a URL similar to:

   ```html
   https://<username>.github.io/<repository-name>/main.css
   ```

5. **Use the CDN URL in Your Projects**: Include the CDN URL in the HTML files of other projects to use the styles. For example:

   ```html
   <link rel="stylesheet" href="https://<username>.github.io/<repository-name>/main.css">
   ```
