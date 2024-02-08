import Image from "next/image";

type LogoProps = {
  white?: boolean;
};

export default function Logo({ white }: LogoProps) {
  const logo = white ? "/logo-white.svg" : "/logo.svg";
  const size = white ? "h-16 w-52" : "h-8 w-32";

  return (
    <div className={`${size} relative`}>
      <Image className="object-contain" src={logo} alt="huddle logo" fill />
    </div>
  );
}
