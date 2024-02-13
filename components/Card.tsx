import Image from "next/image";
import Text from "./Text";
import Title from "./Title";

type CardProps = {
  type: "Grow Together" | "Flowing Conversations" | "Your Users";
  children: string;
};

export default function Card({ type, children }: CardProps) {
  const styles = {
    "Grow Together": "bg-veryPaleBlue lg:flex-row-reverse",
    "Flowing Conversations": "bg-white lg:flex-row",
    "Your Users": "bg-veryPaleBlue lg:flex-row-reverse",
  };

  const imageSrc = {
    "Grow Together": "/illustration-grow-together.svg",
    "Flowing Conversations": "/illustration-flowing-conversation.svg",
    "Your Users": "/illustration-your-users.svg",
  };

  return (
    <div
      className={`${styles[type]} relative z-10 flex flex-col items-center gap-4 px-7 py-16 lg:justify-between lg:px-28`}
    >
      <div className="relative mb-7 h-56 w-64 lg:h-[27rem] lg:w-[32.5rem]">
        <Image className="object-contain" src={imageSrc[type]} alt="" fill />
      </div>
      <div className="flex flex-col gap-4 lg:w-[32.5rem]">
        <Title
          as="h2"
          className="font-openSans text-xl font-bold lg:text-start lg:text-3xl"
        >
          {type}
        </Title>
        <Text className="font-poppins text-[13px] lg:text-start">
          {children}
        </Text>
      </div>
    </div>
  );
}
