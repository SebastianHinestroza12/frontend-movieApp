import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
import { theme } from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
    ,
  </React.StrictMode>
);
