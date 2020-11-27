import ReactDOM from "react-dom";
import App from "./App";
import { DataContextProvider } from "./Context";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("root")
);
