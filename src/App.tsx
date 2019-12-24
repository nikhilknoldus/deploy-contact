import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import ContactsNav from "./components/contacts-nav/contacts-nav.component";
import MainContact from "./components/main-contact/main-contact.component";
import { ContactReducer, GLOBAL_INITIAL_STATE } from "./store/reducer";
import { ContactProvider } from "./store/context";
import CreateContact from "./components/create-contact/create-contact.component";
import FavouriteContact from "./components/favourite-contact/favourite-contact.component";
import ErrorBoundary from "./error-boundary/error-boundary";
import Page404 from "./page404/page404.page";

const App: React.FC = () => {
  const [contactData, dispatchContact]: any = React.useReducer(
    ContactReducer,
    JSON.parse(GLOBAL_INITIAL_STATE)
  );

  return (
    <ErrorBoundary data-test="AppComponent">
      <ContactProvider
        value={[contactData, dispatchContact]}
        data-test="AppContactProvider"
      >
        <div className="App">
          <ContactsNav />
          <Switch>
            <Route exact path="/" component={MainContact} />
            <Route exact path="/create" component={CreateContact} />
            <Route exact path="/update" component={CreateContact} />
            <Route exact path="/favourite" component={FavouriteContact} />
            <Route component={Page404} />
          </Switch>
        </div>
      </ContactProvider>
    </ErrorBoundary>
  );
};

export default App;
