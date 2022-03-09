import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="base-container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
