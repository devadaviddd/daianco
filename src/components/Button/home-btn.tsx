export const HomeButton = () => {
  return (
    <button className="w-[40%] h-[3rem] ">
      {/* MORE INFO */}
      <a
        href="#_"
        className="relative inline-flex items-center justify-center 
          w-full h-full overflow-hidden font-andantedtext_regular
          tracking-tighter text-white bg-black rounded-full group
          btn-shadow"
      >
        <span
          className="absolute w-0 h-0 
        transition-all duration-500 ease-out bg-[var(--main-red)] rounded-full group-hover:w-56 group-hover:h-56"
        ></span>
        <span
          className="absolute 
        inset-0 w-full h-full 
        -mt-1 rounded-lg opacity-30 
        bg-gradient-to-b from-transparent via-transparent to-gray-700"
        ></span>
        <span className="relative">MORE INFO</span>
      </a>
    </button>
  );
};
