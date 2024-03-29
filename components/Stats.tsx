import Image from "next/image";
import Text from "./Text";
import Title from "./Title";

type StatsProps = {
  type: "community" | "message";
};

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <div className="flex w-40 flex-col gap-3 lg:w-auto">{children}</div>;
}

export default function Stats({ type }: StatsProps) {
  if (type === "community") {
    return (
      <Wrapper>
        <Image
          src="/icon-communities.svg"
          alt="Community Icon"
          width={32}
          height={28}
        />
        <Title as="h2" className="text-6xl lg:text-7xl lg:font-semibold">
          1.4k+
        </Title>
        <Text className="lg:text-[22px] lg:text-[#777]">Communities Formed</Text>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Image
          src="/icon-messages.svg"
          alt="Message Icon"
          width={28}
          height={24}
        />
        <Title as="h2" className="text-5xl lg:text-7xl lg:font-semibold">
          2.7m+
        </Title>
        <Text className="lg:text-[22px] lg:text-[#777]">Messages Sent</Text>
      </Wrapper>
    );
  }
}
