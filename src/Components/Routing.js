import React from "react";
import Header from "./Header";
import { ForgetPassword } from './ForgetPassword'
import { PageNotFound } from './PageNotFound'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import { Login } from "./Login";
import { Framework } from "./Framework";
import { Content } from "./Content";
import { Signup } from './Signup'
import { Blog } from './Blog'
import {CMS} from './CMS'
export const Routing = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Content} />
          <Route exact={true} path="/framework" component={Framework} />
          <Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/blog" component={Blog} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/forgetpass" component={ForgetPassword} />
          <Route exac={true} path="/cms" component={CMS} />
          <Route exact={true} path="*" component={PageNotFound} />
        </Switch>
        {/* </HashRouter> */}
      </div>
    </HashRouter>
  );
};
