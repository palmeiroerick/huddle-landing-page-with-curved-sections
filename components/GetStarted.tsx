import Button from "./Button";
import Title from "./Title";

export default function GetStarted() {
  return (
    <div className="pb-64 pt-32 flex flex-col gap-8">
      <Title as="h2" className="font-bold font-openSans">Ready To Build Your Community?</Title>
      <Button type="Get Started For Free" />
    </div>
  );
}
