# Discovery Assignment App

## Technologies

### Frontend

* [React] - A javascript library for building user interfaces
* [Redux] - A predictable state container for JavaScript apps
* [Redux-saga] - An alternative side effect model for Redux apps
* [React-router] - A complete routing library for React.
* [React-router-redux] - Ruthlessly simple bindings to keep react-router and redux in sync
* [Material-ui] - Material UI

### Backend

* [Express] - Fast, unopinionated framework for Node.js
* [Helmet] - Help secure Express apps with various HTTP headers


## Developement and Deployment

### Folder Structure

```bash
├── /build/          # production build dest
├── /server/         # Backend source code
| ├── /api.js        # Backend Api services
| ├── /config.js     # Backend configs
| ├── /youtube.js    # Google youtube service
| ├── /index.js      # Backend Entrypoint
├── /src/            # Frontend source code
| ├── /actions/      # Redux actions
│ ├── /components/   # UI component
│ ├── /reducers/     # Redux reducers
│ ├── /sagas/        # Redux-saga implmentation
│ ├── /services/     # API abstraction
│ ├── /store/        # Redux store init
│ ├── app.js         # App UI component
│ ├── index.js       # Entrypoint
├── package.json     # npm packages info

```

### Development

Start frontend：

```bash
npm run start

Open http://localhost:3000
```

Start backend:
```bash
node server.js
```

Production build：

```bash
npm run build
```

### Todo List





License
----

Private


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React]: <https://facebook.github.io/react/index.html>
   [Redux]: <https://github.com/reactjs/redux>
   [Redux-saga]: <https://github.com/redux-saga/redux-saga>
   [React-router]: <https://github.com/reacttraining/react-router>
   [React-router-redux]: <https://github.com/reactjs/react-router-redux>
   [Express]: <https://expressjs.com/>
   [Helmet]: <https://github.com/helmetjs/helmet>
