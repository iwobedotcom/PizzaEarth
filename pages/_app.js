import Body from "../components/Body";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Body>
        <Component {...pageProps} />
      </Body>
    </Provider>
  );
}

export default MyApp;
