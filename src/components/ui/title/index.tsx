import { shantell_sans } from "@/fonts";

type TitleProps = {
  children: string;
}

function Title({ children }: TitleProps) {
  return (
    <h1 className={`text-2xl md:text-3xl lg:text-4xl ${shantell_sans.className}`}>
      {children}
    </h1>
  )
}

export default Title