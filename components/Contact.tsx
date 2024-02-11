import Image from "next/image";
import Text from "./Text";

type ContactProps = {
  iconSrc: "/icon-phone.svg" | "/icon-email.svg";
  children: string;
};

export default function Contact({ iconSrc, children }: ContactProps) {
  return (
    <div className="flex gap-4 items-center">
      <Image src={iconSrc} alt="" width={24} height={24} />
      <Text className="text-white text-sm">{children}</Text>
    </div>
  );
}
