# Getting Started with this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The react online editors we've tried has good support for react/js files, but limited options for styling imports.

Therefore, is project is set up to help:
1. Give the developers a working dev environment to create example code for a workshop
2. Generate a css-file with all necessary styling from ffe

Because of this, and to make sure no styling code is forgotten, the styling-part of the project is a little different.

When first cloning this app `npm install` in root folder.

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.


## Bruk av denne koden i codesandbox

1. Bygg og lag eksportpakke med `./bulid-export.sh` eller `./bulid-export-mac.sh` avhengig av plattform.

2. Flytt filene over i et standard React (Vite + TS) template på codesandbox, man kan godt slette alle eksisterende filer i mappestrukturen. 

3. Fjern eller kommenter ut `import "./App.less";` fra `Main.jsx` og slett App.less fra codesandbox, den er ikke i bruk.

4. Åpne et terminalvindu (finnes under ... eller er allerede åpent) og kjør `npm install` og `npm run dev` og appen skal kjøre.
