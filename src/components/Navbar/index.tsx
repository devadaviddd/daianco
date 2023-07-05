export const NavBar = () => {
  return (
    <nav className="w-full h-[50px]  flex fixed z-10 bg-black">
      <div
        className="w-1/2 h-full text-center
        flex items-center justify-center"
      >
        <h1 className="text-4xl font-futura_bold tracking-wider text-[var(--main-red)]  ">
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
        <li className="text-white font-andantedisplay_bold text-md navChild">
          LOGIN
        </li>
      </ul>
    </nav>
  );
};
