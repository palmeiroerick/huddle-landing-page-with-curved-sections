import Button from "./Button";
import Text from "./Text";
import Title from "./Title";

export default function Newsletter() {
  return (
    <section className="flex flex-col gap-6 lg:w-[33rem]">
      <Title
        as="h2"
        className="self-start text-xl font-semibold uppercase text-white"
      >
        Newsletter
      </Title>
      <Text className="text-start text-sm text-white lg:w-[22.5rem]">
        To receive tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </Text>
      <div className="flex flex-col gap-6 lg:flex-row">
        <input
          type="text"
          className="h-12 rounded-lg px-3 text-veryDarkCyan outline-none lg:w-[21.5rem]"
        />
        <Button type="Subscribe" />
      </div>
    </section>
  );
}
