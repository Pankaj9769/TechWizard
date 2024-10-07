import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { persistor, store } from "./Store/store.jsx";
import FetchProduct from "./Components/FetchProduct.jsx";
import { ContextProvider } from "./store/Context.jsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextProvider>
          <FetchProduct />
          <App />
        </ContextProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
