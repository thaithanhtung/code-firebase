import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedSwitch } from 'reactRouterConnected';
import Loadable from 'react-loadable';
import Page from 'components/LayoutComponents/Page';
import NotFoundPage from 'modules/DefaultPages/NotFoundPage';
import HomePage from 'modules/DefaultPages/HomePage';

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  });

const loadableRoutes = {
  // Default Pages
  '/login': {
    component: loadable(() => import('modules/DefaultPages/LoginPage')),
  },
  // Dashboards
  '/dashboard/beta': {
    component: loadable(() => import('modules/Dashboard/DashboardBetaPage')),
  },

  // Students
  '/uploadFile': {
    component: loadable(() => import('modules/UploadFile/ui')),
  },
  '/listInput': {
    component: loadable(() => import('modules/ListInput/ui')),
  },
};

class Routes extends React.Component {
  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000 // load after 5 sec
    );
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  timeoutId = null;

  render() {
    return (
      <ConnectedSwitch>
        <Route exact path="/" component={HomePage} />
        {Object.keys(loadableRoutes).map(path => {
          const { exact, ...props } = loadableRoutes[path];
          props.exact = exact === 0 || exact || false; // set true as default
          return <Route key={path} path={path} {...props} />;
        })}
        <Route
          render={() => (
            <Page>
              <NotFoundPage />
            </Page>
          )}
        />
      </ConnectedSwitch>
    );
  }
}

export { loadableRoutes };
export default Routes;
