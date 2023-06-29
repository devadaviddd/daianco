type Props = {
  middle?: boolean
  right?: boolean
  left?: boolean
}


export const LineVertical = (props: Props) => {
  const { middle, right, left } = props;

  return (
    <div className={`w-[1px] h-full line -z-10 bg-[#262A31] absolute scaleY-100
      origin
      ${middle ? 'top-0 right-[50%]  origin-bottom-left' : ''}
      ${right ? 'right-[25%] origin-top-right' : ''}
      ${left ? 'left-[25%] origin-top-right' : ''}
    `
    }>
      
    </div>

  )
}