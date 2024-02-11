import Image from "next/image";
import Text from "./Text";
import Title from "./Title";

type CardProps = {
  type: "Grow Together" | "Flowing Conversations" | "Your Users";
  children: string;
};

export default function Card({ type, children }: CardProps) {
  const styles = {
    "Grow Together": "bg-veryPaleBlue",
    "Flowing Conversations": "bg-white",
    "Your Users": "bg-veryPaleBlue",
  };

  const imageSrc = {
    "Grow Together": "/illustration-grow-together.svg",
    "Flowing Conversations": "/illustration-flowing-conversation.svg",
    "Your Users": "/illustration-your-users.svg",
  };

  return (
    <div
      className={`${styles[type]} relative z-10 flex flex-col items-center gap-4 px-7 py-16`}
    >
      <div className="relative mb-7 h-56 w-64">
        <Image className="object-contain" src={imageSrc[type]} alt="" fill />
      </div>
      <Title as="h2" className="font-openSans text-xl font-bold">
        {type}
      </Title>
      <Text className="font-poppins text-[13px] ">{children}</Text>
    </div>
  );
}
