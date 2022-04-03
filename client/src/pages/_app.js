import "../styles/globals.css";
import { StyledTheme } from "../theme";
import * as Layout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <StyledTheme>
      <Layout.HomeLayout>
        <Component {...pageProps} />
      </Layout.HomeLayout>
    </StyledTheme>
  );
}

export default MyApp;
