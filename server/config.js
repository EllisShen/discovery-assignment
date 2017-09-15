// default serve port
let LISTEN_PORT;
if (process.env.NODE_ENV === 'production') {
  LISTEN_PORT = 80;
} else {
  // While in developing, WebApp runs in port 3000 or 8080
  // API service will be run separately in port 4000
  LISTEN_PORT = 4000;
}

let API_KEY;
if (process.env.NODE_ENV === 'production') {
  API_KEY = 'AIzaSyBNAHXcA0GXXOvee0KMpbwvfRJSxTT0zkM';
} else {
  // While in developing, WebApp runs in port 3000 or 8080
  // API service will be run separately in port 4000
  API_KEY = 'AIzaSyBNAHXcA0GXXOvee0KMpbwvfRJSxTT0zkM';
}

const Config = {
  LISTEN_PORT,
  API_KEY,
};

module.exports = Config;
