import { SignInForm } from "@/components/Form/signin";
import { MainLayouts } from "@/layouts/main-layouts";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const SignIn: NextPageWithLayout = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center
      bg-none"
    >
      <SignInForm />
    </div>
  );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <MainLayouts>{page}</MainLayouts>;
};

export default SignIn;
