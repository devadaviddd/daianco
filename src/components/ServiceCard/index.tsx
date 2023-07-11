/* eslint-disable no-unused-vars */

import consultantImg from "@/assets/consultant.png";
import installationImg from "@/assets/installation.png";
import supplyImg from "@/assets/supply.png";
import maintenanceImg from "@/assets/maintenance.png";
import { ContactModal } from "../Modal/contact";
import { useState } from "react";
import { Modal } from "flowbite-react";

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
};

export const ServiceData = {
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
  const [openModal, setOpenModal] = useState<string | undefined>();
  const { title, description, img } = props;

  return (
    <>
      <div
        className="flex  items-center rounded-2xl
    card-box-shadow  relative"
      >
        {/* {renderServiceImg(serviceType)} */}
        <div
          className="w-[60%] h-full 
        rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
        gap-4 "
        >
          <div className="font-futura_bold text-2xl tracking-wide">{title}</div>
          <p className="font-magazinegrotesque_regular">{description}</p>
        </div>
        <div
          className="w-[40%] h-full bg-[#F6F7FC] 
        rounded-tr-2xl rounded-br-2xl
        bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>

        <div
          className="absolute bottom-0 
      w-[60%] h-[5rem] flex items-center p-5
      "
        >
          <button
            onClick={() => {
              setOpenModal("default");
              // blockScroll();
            }}
            className="uppercase font-andantedisplay_bold
        text-[var(--main-red)] flex items-center gap-2"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="var(--main-red)"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                fontWeight={900}
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Modal
        show={openModal === "default"}
        onClose={() => {
          setOpenModal(undefined);
        }}
      >
        <ContactModal setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
};
