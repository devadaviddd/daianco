type Props = {
  middle?: boolean;
  right?: boolean;
  left?: boolean;
  banner?: boolean;
  middleBanner?: boolean;
};

export const LineVertical = (props: Props) => {
  const { middle, right, left, banner, middleBanner } = props;

  return (
    <div
      className={`w-[1px] h-full   
      -z-10 bg-[#262A31] absolute scaleY-100 
      origin
      ${middle ? "top-0 right-[50%] middle origin-bottom-left" : ""}
      ${right ? "right-[25%] origin-top-right" : ""}
      ${left ? "left-[25%] origin-top-right" : ""}
      ${banner ? "banner" : "line"}
      ${middleBanner ? "top-0 right-[50%] middleBanner origin-bottom-left" : ""}
    `}
    ></div>
  );
};
