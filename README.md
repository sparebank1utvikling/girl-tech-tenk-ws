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


## Bruke denne koden i codesandbox

Bygg og lag eksportpakke med `./bulid-export.sh` eller `./bulid-export-mac.sh` avhengig av plattform.

Flytt filene over i et standard React (Vite + TS) template på codesandbox, la vite.config.ts ligge igjen fra template-prosjektet. 

Fjern eller kommenter ut `import "./App.less";` fra `Main.jsx`

Slett filen package-lock.json

Åpne et terminalvindu (finnes under ...) og kjør `npm install`

I preview-vinduet i codesanbox tykk på ... og velg Restart