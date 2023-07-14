import { ReactElement, useEffect } from "react";
import { MainLayouts } from "@/layouts/main-layouts";
import { NextPageWithLayout } from "./_app";
import "keen-slider/keen-slider.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame1 from "./home/frame1";
import Frame2 from "./home/frame2";
import Frame3 from "./home/frame3";
import { Footer } from "@/components/Footer";
import { BannerHome } from "@/components/Banner";
import { getSession, useSession } from "next-auth/react";

const Home: NextPageWithLayout = () => {
  const { status } = useSession();

  useEffect(() => {
    async function getUserSession() {
      const session = await getSession();
      const { user } = session!;

      console.log(user.role);
    }

    if (status === "authenticated") {
      getUserSession();
    }
  }, [status]);

  return (
    <>
      <Frame1 />
      <Frame2 />
      <BannerHome />
      <Frame3 />
      <Footer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayouts>{page}</MainLayouts>;
};

export default Home;
