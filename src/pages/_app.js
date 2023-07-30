import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
