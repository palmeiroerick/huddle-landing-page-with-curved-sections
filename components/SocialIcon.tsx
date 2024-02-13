import Image from "next/image";

type SocialIconProps = {
  type: "facebook" | "instagram" | "twitter";
};

export default function SocialIcon({ type }: SocialIconProps) {
  return (
    <div className="relative h-6 w-6 lg:h-8 lg:w-8">
      <Image
        className="object-contain"
        src={`icon-${type}.svg`}
        alt={`${type} icon`}
        fill
      />
    </div>
  );
}
