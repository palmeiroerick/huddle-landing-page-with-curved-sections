import Button from "./Button";
import Text from "./Text";
import Title from "./Title";

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-6">
      <Title as="h2" className="self-start text-white font-semibold uppercase text-xl">
        Newsletter
      </Title>
      <Text className="text-start text-white text-sm">
        To receive tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </Text>
      <input type="text" className="h-12 rounded-lg outline-none text-veryDarkCyan px-3" />
      <Button type="Subscribe" />
    </div>
  );
}
