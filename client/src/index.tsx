import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <HistoryRouter history={history}> */}
    <App />
    {/* </HistoryRouter> */}
  </Provider>
);
