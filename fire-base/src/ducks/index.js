import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pendingTasksReducer } from 'react-redux-spinner';
import { reducer as form } from 'redux-form';
import app from './app';
import login from './login';
import { firestoreReducer } from "redux-firestore";
import authReducer from './../modules/DefaultPages/LoginPage/Login/LoginReducer'
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  routing: routerReducer,
  pendingTasks: pendingTasksReducer,
  app,
  login,
  form,
  auth: authReducer,
  // project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
