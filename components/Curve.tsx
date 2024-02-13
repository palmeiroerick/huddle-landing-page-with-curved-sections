import Image from "next/image";

type CurveProps = {
  imageSrc:
    | "/bg-footer-top-mobile.svg"
    | "/bg-footer-top-desktop.svg"
    | "/bg-section-bottom-mobile-1.svg"
    | "/bg-section-bottom-desktop-1.svg"
    | "/bg-section-bottom-mobile-2.svg"
    | "/bg-section-bottom-desktop-2.svg"
    | "/bg-section-top-mobile-1.svg"
    | "/bg-section-top-desktop-1.svg"
    | "/bg-section-top-mobile-2.svg"
    | "/bg-section-top-desktop-2.svg";
  className?: string;
};

export default function Curve({ imageSrc, className }: CurveProps) {
  return (
    <Image
      className={`${className} h-auto w-full`}
      src={imageSrc}
      alt=""
      width="0"
      height="0"
      sizes="100vw"
    />
  );
}
