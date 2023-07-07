import { ServiceCard } from "@/components/ServiceCard";

const Frame3 = () => {
  return (
    <div
      className="w-full h-[100vh] flex flex-col 
    items-center justify-center gap-5 "
    >
      <div
        className=" text-[var(--main-red)] font-andantedisplay_bold 
      text-3xl mt-5"
      >
        OUR SERVICES FOR YOUR SAFETY
      </div>
      <div
        className="w-[60%] h-3/4 grid
      grid-cols-2 grid-rows-2 gap-3"
      >
        <ServiceCard serviceType={0}/>
        <ServiceCard serviceType={1}/>
        <ServiceCard serviceType={2}/>
        <ServiceCard serviceType={3}/>

      </div>
    </div>
  );
};

export default Frame3;
