# MTVH Formio Library

This repo provides a library of all Form.io dependancies for including in MTVH websites:

- Formio JS v4.13.5 
  - `/node_modules/formiojs/dist/formio.full.min.js`
  - `/node_modules/formiojs/dist/formio.full.min.css`
- MTVH Form.io custom modules and styling
   - `/dist/mtvh-formio.use.min.js`
   - `/dist/mtvh-formio.css`

## Installation

You can also include this library within the DOM of any website as follows. 

```
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/mtvh-formio@latest/dist/mtvh-formio.use.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/mtvh-formio@latest/dist/mtvh-formio.css">
```

Alternatively, for performance it is recommended to include these dependancies locally in the website. Install the node module using a package manager and copy the files to the relevant local directory using Gulp.

## Development

To be added