import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  const isActiveLogin = pathname.startsWith("/auth/signin");

  return (
    <nav className="w-[100vw] h-[50px]  flex fixed z-20 bg-black">
      <div
        className="w-1/2 h-full text-center
        flex gap-3 items-center justify-center"
      >
        <Image
          src={logo.src}
          width={283}
          height={186}
          alt="Logo"
          className="w-[4rem] h-[2.5rem]"
        />
        <h1 className="text-4xl font-futura_bold  text-[var(--main-red)]  ">
          DaiAnCo.
        </h1>
      </div>
      <ul className="w-full h-full flex flex-row items-center justify-center gap-10">
        <li className="text-white font-andantedisplay_bold text-md navChild">
          HOME
        </li>
        <li className="text-white font-andantedisplay_bold text-md navChild">
          PRODUCT
        </li>
        <li className="text-white font-andantedisplay_bold text-md navChild">
          SERVICE
        </li>
        <li className="text-white font-andantedisplay_bold text-md navChild">
          CONTACT
        </li>
        <Link
          href={isActiveLogin ? "" : "auth/signin"}
        >
          <li className="text-white font-andantedisplay_bold text-md navChild">
            LOGIN
          </li>
        </Link>
      </ul>
    </nav>
  );
};
