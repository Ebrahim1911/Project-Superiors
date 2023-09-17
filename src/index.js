import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
