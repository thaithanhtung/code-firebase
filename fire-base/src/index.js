import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';
import 'es6-promise/auto';
import 'setimmediate';
import 'chartist-plugin-tooltip';
import { LocaleProvider } from 'antd';
import enGB from 'antd/lib/locale-provider/en_GB';
import registerServiceWorker from 'registerServiceWorker';

import Layout from 'components/LayoutComponents/Layout';
import reducer from 'ducks';

import 'resources/_antd.less'; // redefinition AntDesign variables
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import 'resources/AntStyles/AntDesign/antd.cleanui.scss';
import 'resources/CleanStyles/Core/core.cleanui.scss';
import 'resources/CleanStyles/Vendors/vendors.cleanui.scss';
import 'resources/themeCustom.scss';
import fbConfig from './config/fbConfig';

const history = createHistory();
const router = routerMiddleware(history);
const middlewares = [router, thunk.withExtraArgument({ getFirebase, getFirestore })];
const isLogger = false;
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = import('redux-logger');
  middlewares.push(logger);
}
const store = createStore(reducer,
  composeWithDevTools(
    compose(
      applyMiddleware(...middlewares),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig, {
        useFirestoreForProfile: true,
        userProfile: "users",
        attachAuthIsReady: true
      })
    )
  )
)
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LocaleProvider locale={enGB}>
          <div>
            <Helmet titleTemplate="Clean UI - %s" />
            <Layout />
          </div>
        </LocaleProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
});
export default history;
