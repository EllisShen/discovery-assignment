import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoryAction, fetchVideoListAction } from './actions';
import DevTools from './components/DevTools';  // debug only
// Material-UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {},
});

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  componentWillMount() {
    this.props.fetchCategoryList();  // fetch video category
    this.props.fetchVideoList('', '');  // fetch video
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Title" iconElementRight={<Login />} />
          {
            process.env.NODE_ENV !== 'production' &&
            <DevTools />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryList: () => {
      dispatch(fetchCategoryAction());
    },
    fetchVideoList: (pageToken, categoryId) => {
      dispatch(fetchVideoListAction({ pageToken, categoryId }));
    }
  }
};

const mapStateToProps = (store) => {
  return {
    category: store.category
  }
};

// Redux binding
export default connect(mapStateToProps, mapDispatchToProps)(App);
