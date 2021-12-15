import PageTransition from "../components/transitionGsap";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <PageTransition route={router.pathname}>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
