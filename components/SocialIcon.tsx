import Image from "next/image";

type SocialIconProps = {
  type: "facebook" | "instagram" | "twitter";
};

export default function SocialIcon({ type }: SocialIconProps) {
  return (
    <Image
      src={`icon-${type}.svg`}
      alt={`${type} icon`}
      width={24}
      height={24}
    />
  );
}
