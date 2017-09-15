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

### Design Wireframe

![](https://github.com/EllisShen/discovery-assignment/blob/e1d32ab9caa7c02bef9af15e4b670b0063b9a8d0/Wireframe.png?raw=true)

### Completed Feature
* Fetch Youtube Categories
* Fetch 10 Videos and support PageToken and CategoryId query
* Redux Store [category, videoList]
* App can start withoutht error

### What would have been done with more time

* Add Feature Video UI component in homepage
* Add Search and category selection component
* Add Video playback component which supports lazy loading of passing pageToken to get 10 more videos.
* Add related video list component
* Display 10 Videos in homepage
* Add Reducer of {selectedVideo} to store selected Video information
* Add API services:
  - Query related video list according to selected video
* SASS support


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
