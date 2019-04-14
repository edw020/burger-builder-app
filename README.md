## Burger Builder App

This is a practice project created with the purpose of applying all the concepts related to ReactJS.

It contains a simple SPA which lets you build a burger with some basic ingredients and make an order for that built burger. Also provides authentication options for being able store orders for and specific user.

## Live version

You can find the live current version of this project running on https://react-burger-builder-4d3d6.firebaseapp.com/

### Technical details

This project foundation was created by using creat-react-app lib, and react v16.8.4

The features used on this project are:

- Class based components for containers.
- Stateless components for view related components.
- Redux and redux-thunk for managing state.
- React-router-dom for routing.
- Lazy loading for some components.
- Firebase used as db provider (and hosting).
- Unit Tests (by Using Jest and Enzyme).

### Special Implementations

- Implemented redux-saga as an alternative to redux-thunk (Check it on branch 'redux-saga-implementation').
- Implemented react-hooks to convert all class based components on project to funcional components which use react-hooks for state managing and side-effects (Check it on branch 'react-hooks').

## Commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!