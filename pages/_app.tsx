import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
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
