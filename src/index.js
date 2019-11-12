import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import store from "./redux/redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Change Color palette with material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757c338364e8",
      main: "#00653e",
      dark: "#00462b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7977625861",
      main: "#563b2f",
      dark: "#3c2920",
      contrastText: "#fff"
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
