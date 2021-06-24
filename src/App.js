import React from "react";
import "antd/dist/antd.css";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Routes from "./routes";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <SideMenu />
            <div className="mainContainer">
              <Header />
              {Routes.map((route, idx) => (
                <Route
                  exact
                  key={route.key}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </div>
          </Layout>
          <Route>
              <PageNotFound />
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
