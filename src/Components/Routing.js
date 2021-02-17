import React from "react";
import Header from "./Header";
import { ForgetPassword } from './ForgetPassword'
import { ForgetPasswordSend } from './ForgetPasswordSend'
import { PageNotFound } from './PageNotFound'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import { Login } from "./Login";
import { ActivationPage } from "./ActivationPage";
import { ActivateAccount } from "./ActivateAccount";
// import Checkbox from 
import { Framework } from "./Framework";
import { Content } from "./Content";
import { Signup } from './Signup'
import { Blog } from './Blog'
import {CMS} from './CMS'
import {ResetPassword} from './ResetPassword'
import {Payment} from './Payment'
import {PurchaseSuccess} from './PurchaseSuccess'
import { Checkbox } from "./Checkbox";
import StripeComp from './StripeComp';
export const Routing = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Content} />
          <Route exact={true} path="/framework" component={Framework} />
          <Route exact={true} path="/auth" component={ActivationPage} />
          <Route exact={true} path="/activation" component={ActivateAccount} />
          <Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/blog" component={Blog} />
          <Route exact={true} path="/login" component={Login} />
    
          {/* <Route exact={true} path="/sripe" component={StripeComp} /> */}
    
          <Route exact={true} path="/auth/password-reset/confirm/:uid/:token" component={ResetPassword} />
          <Route exact={true} path="/forgetpass" component={ForgetPassword} />
          <Route exact={true} path="/forgetpasssend" component={ForgetPasswordSend} />
          <Route exact={true} path="/cms" component={CMS} />
          <Route exact={true} path="/payment" component={Payment} />
          <Route exact={true} path="/purchase-done" component={PurchaseSuccess} />
          <Route exact={true} path="/cms/:id" component={CMS} />
          <Route exact={true} path="/chek" component={Checkbox} />

          <Route exact={true} path="*" component={PageNotFound} />
        </Switch>
        {/* </HashRouter> */}
      </div>
    </HashRouter>
  );
};
