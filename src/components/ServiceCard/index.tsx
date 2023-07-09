/* eslint-disable no-unused-vars */
import consultantImg from "@/assets/consultant.png";
import installationImg from "@/assets/installation.png";
import supplyImg from "@/assets/supply.png";
import maintenanceImg from "@/assets/maintenance.png";

enum ServiceType {
  CONSULTANT = 0,
  INSTALLATION = 1,
  SUPPLY = 2,
  MAINTENANCE = 3,
}

type Props = {
  title: string;
  description: string;
  img: string;
}

export const ServiceData  = {
  [ServiceType.CONSULTANT]: {
    title: "Consultant",
    description:
      "Support: design, set up a design document, approval, set up a completed work document, prepare the document for fire protection certificate for a construction project.",
    img: consultantImg.src,
  },
  [ServiceType.INSTALLATION]: {
    title: "Installation",
    description:
      "Install, check and take over the different types of security and fire protection systems in the areas of Viet Nam.",
    img: installationImg.src,
  },
  [ServiceType.SUPPLY]: {
    title: "Supply",
    description:
      "Supply the different types of security and fire protection systems in the areas of Viet Nam.",
    img: supplyImg.src,
  },
  [ServiceType.MAINTENANCE]: {
    title: "Maintenance",
    description:
      "Maintain the different types of security and fire protection systems in the areas of Viet Nam.",
    img: maintenanceImg.src,
  },
};

export const ServiceCard = (props: Props) => {
  const { title, description, img } = props;

  return (
    <div
      className="flex  items-center rounded-2xl
    card-box-shadow  "
    >
      {/* {renderServiceImg(serviceType)} */}
      <div
        className="w-[60%] h-full 
        rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
        gap-4"
      >
        <div className="font-futura_bold text-2xl tracking-wide">
          {title}
        </div>
        <p className="font-magazinegrotesque_regular">
          {description}
        </p>
      </div>
      <div
        className="w-[40%] h-full bg-[#F6F7FC] 
        rounded-tr-2xl rounded-br-2xl
        bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};
