import { IconProps } from '.'

export const ArrowRight = ({ fill = '#0A0A0A', width = 24, height = 24 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M14.0391 5.08594L12.9609 6.16406L18.0469 11.25H3V12.75H18.0469L12.9609 17.8359L14.0391 18.9141L20.4141 12.5391L20.9297 12L20.4141 11.4609L14.0391 5.08594Z" fill={fill} />
    </svg>
  )
}