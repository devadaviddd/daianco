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
  serviceType: ServiceType;
};

const renderServiceImg = (serviceType: ServiceType) => {
  switch (serviceType) {
    case ServiceType.CONSULTANT:
      return (
        <>
          <div
            className="w-[60%] h-full 
        rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
        gap-4"
          >
            <div className="font-futura_bold text-2xl tracking-wide">
              Consultant
            </div>
            <p className="font-magazinegrotesque_regular">
              Support: design, set up a design document, approval, set up a
              completed work document, prepare the document for fire protection
              certificate for a construction project.
            </p>
          </div>
          <div
            className="w-[40%] h-full bg-[#F6F7FC] 
        rounded-tr-2xl rounded-br-2xl
        bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${consultantImg.src})`,
            }}
          ></div>
        </>
      );
    case ServiceType.INSTALLATION:
      return (
        <>
          <div
            className="w-[60%] h-full 
      rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
      gap-4"
          >
            <div className="font-futura_bold text-2xl tracking-wide">
              Installation
            </div>
            <p className="font-magazinegrotesque_regular">
              Install, check and take over the different types of security and
              fire protection systems in the areas of Viet Nam.
            </p>
          </div>
          <div
            className="w-[40%] h-full bg-[#F6F7FC] 
      rounded-tr-2xl rounded-br-2xl
      bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${installationImg.src})`,
            }}
          ></div>
        </>
      );
    case ServiceType.SUPPLY:
      return (
        <>
          <div
            className="w-[60%] h-full 
    rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
    gap-4"
          >
            <div className="font-futura_bold text-2xl tracking-wide">
              Supply of devices
            </div>
            <p className="font-magazinegrotesque_regular">
              We have researched and selected the best security and fire
              protection products possible from the different factories in the
              world to present and supply these to the customers in Vietnam
              market.
            </p>
          </div>
          <div
            className="w-[40%] h-full bg-[#F6F7FC] 
    rounded-tr-2xl rounded-br-2xl
    bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${supplyImg.src})`,
            }}
          ></div>
        </>
      );
    case ServiceType.MAINTENANCE:
      return (
        <>
          <div
            className="w-[60%] h-full 
      rounded-tl-2xl rounded-bl-2xl p-5 flex flex-col
      gap-4"
          >
            <div className="font-futura_bold text-2xl tracking-wide">
              Maintenance
            </div>
            <p className="font-magazinegrotesque_regular">
              Our maintenance work have done on the base of experience and
              responsibility to ensure your systems always work in normal
              condition as they need.
            </p>
          </div>
          <div
            className="w-[40%] h-full bg-[#F6F7FC] 
      rounded-tr-2xl rounded-br-2xl
      bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${maintenanceImg.src})`,
            }}
          ></div>
        </>
      );
  }
};

export const ServiceCard = (props: Props) => {
  const { serviceType } = props;

  return (
    <div
      className="flex  items-center rounded-2xl
    card-box-shadow  "
    >
      {renderServiceImg(serviceType)}
    </div>
  );
};