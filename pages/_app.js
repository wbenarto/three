import "../styles/globals.css";

import { TransitionProvider } from "../src/context/TransitionContext";
import TransitionLayout from "../src/animation/TransitionLayout";

function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
    </TransitionProvider>
  );
}

export default MyApp;
