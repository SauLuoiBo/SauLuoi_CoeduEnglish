import "../styles/globals.css";
import { StyledTheme } from "../theme";
import * as Layout from "../layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
