import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

export const SignInForm = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();
    console.log(userInfo);
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };

  return (
    <form
      className="flex min-w-[30rem] h-1/2 flex-col gap-4 bg-white"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          placeholder="name@flowbite.com"
          required
          type="email"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          required
          type="password"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
