import { Toast } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

type Props = {
  isSuccess: boolean;
};

export const ContactModalSend = (props: Props) => {
  const { isSuccess } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [isSuccess]);

  useEffect(() => {
    console.log("show", show);
  }, [show]);


  return (
    <>
      {show ? (
        <div
          className={`space-x-4 divide-x divide-gray-200 
      dark:divide-gray-700 fixed z-30 bottom-3 left-3
      `}
        >
          <Toast>
            <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <div className="pl-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </Toast>
        </div>
      ): null}
    </>
  );
};
