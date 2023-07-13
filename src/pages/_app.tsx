import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const startLoading = (url: any) =>
      url !== router.asPath && setLoading(true);
    const stopLoading = (url: any) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 500);

    // Add event listeners for route changes
    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    // Remove event listeners on component unmount
    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, [router]);

  return getLayout(
    <>
      <SessionProvider session={pageProps.session}>
        {loading ? (
          <div
            className="flex justify-center items-center h-screen
          bg-white"
          >
            <div className="animate-spin rounded-full 
            h-32 w-32 border-t-2 border-b-2 border-[var(--main-red)]"></div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}
