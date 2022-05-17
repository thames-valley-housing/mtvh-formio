# MTVH Formio Library

MTVH custom Form.io templates, components and styling for MTVH websites:

This library is dependant on:
- Formio JS v4.14.1 
- Bootstrap 4.*

## Installation

There are 2 files from this package that need to be included in any website to run the library.
- /dist/mtvh-formio.use.min.js
- /dist/mtvh-formio.css

You can include this library along with peer dependancies within the DOM of any website as follows:

```
<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.*/dist/css/bootstrap.min.css">
<script src="https://unpkg.com/bootstrap@4.*/dist/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/@mtvh/mtvh-formio@latest/dist/mtvh-formio.use.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@mtvh/mtvh-formio@latest/dist/mtvh-formio.css">
```

For performance it is recommended to include these dependancies locally using a package manager like NPM and copying the files to the relevant local directory using Gulp.

## Development

To be added