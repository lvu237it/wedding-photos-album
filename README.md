# K & T Wedding Photos Album by lvu237it

The completed version has been deployed at https://wedding-photos-album.web.app/

## Requirements

* **nodejs (>= v20.10.0)**
* **npm (>= v10.3.0) or yarn (>= v1.22.22)**
* **node modules** (Terminal: npm i/install)

## Clone project and run test.

* $ git clone https://git_url_clone <project_dir>
* $ cd <project_dir>
* $ npm run dev / yarn dev

# Note for Build and Deploy with CI/CD by firebase hosting

* CLI: 

**firebase login** 
**firebase init** - select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys" option, then config by your own option, with CI/CD
**firebase deploy** - can be used if you want to deploy manually

* Important:

**Config vite.config.js** - to avoid 'Error: [vite]: Rollup failed to resolve import "/firebase-config.js" from "/home/runner/work/.../index.html"'

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
