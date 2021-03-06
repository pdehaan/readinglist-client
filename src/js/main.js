"use strict";

import React from "react/addons";
import API from "./api";
import { AuthStore, ArticleStore, stores } from "./flux";
import App from "./components/App";

// XXX handle this with envify
var serverUrl = process.env.READINGLIST_SERVER_BASEURL || "http://0.0.0.0:8000/v0";
var debug = process.env.NODE_ENV === "development";

var api = new API(serverUrl, {debug: debug});

stores.register({
  authStore: new AuthStore(api, {debug: debug}),
  articleStore: new ArticleStore(api, {debug: debug})
});

React.render(<App />, document.querySelector("#app"));
