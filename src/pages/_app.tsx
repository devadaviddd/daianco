import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Loading } from "@/components/Loading";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
  const loadingTime = setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    const startLoading = (url: any) =>
      url !== router.asPath && setLoading(true);
    const stopLoading = (url: any) => url === router.asPath && loadingTime;

    // Add event listeners for route changes
    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    // Remove event listeners on component unmount
    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
      clearTimeout(loadingTime);
      console.log("clear");
    };
  }, [loadingTime, router]);

  return getLayout(
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          {loading ? <Loading /> : <Component {...pageProps} />}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
