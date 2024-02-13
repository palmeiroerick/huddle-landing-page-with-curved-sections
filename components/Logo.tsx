import Image from "next/image";

type LogoProps = {
  white?: boolean;
};

export default function Logo({ white }: LogoProps) {
  const logo = white ? "/logo-white.svg" : "/logo.svg";
  const size = white ? "h-16 w-52" : "h-6 w-32 lg:h-8 lg:w-48";

  return (
    <div className={`${size} relative`}>
      <Image className="object-contain" src={logo} alt="huddle logo" fill />
    </div>
  );
}
