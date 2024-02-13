import Button from "@/components/Button";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Curve from "@/components/Curve";
import GetStarted from "@/components/GetStarted";
import Logo from "@/components/Logo";
import Mockups from "@/components/Mockups";
import Newsletter from "@/components/Newsletter";
import SocialIcon from "@/components/SocialIcon";
import Stats from "@/components/Stats";
import Text from "@/components/Text";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <header className="m-auto flex w-[375px] flex-col gap-24 p-6 lg:w-auto lg:p-16">
        <div className="flex items-center justify-between">
          <Logo />
          <Button type="Try it Free" />
        </div>
        <section className="flex flex-col gap-8 lg:items-center">
          <Title as="h1" className="font-openSans lg:text-[42px] lg:font-bold">
            Build The Community Your Fans Will Love
          </Title>
          <Text className="lg:w-[520px] lg:text-base">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </Text>
          <Button type="Get Started For Free" />
        </section>
        <Mockups />
        <div className="flex flex-col items-center gap-24 lg:flex-row lg:justify-center lg:gap-96">
          <Stats type="community" />
          <Stats type="message" />
        </div>
      </header>
      <main className="m-auto flex w-[375px] flex-col lg:w-auto">
        <Curve
          className="block lg:hidden"
          imageSrc="/bg-section-top-mobile-1.svg"
        />
        <Curve
          className="hidden lg:block"
          imageSrc="/bg-section-top-desktop-1.svg"
        />
        <Card type="Grow Together">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </Card>
        <Curve
          className="block lg:hidden"
          imageSrc="/bg-section-bottom-mobile-2.svg"
        />
        <Curve
          className="hidden lg:block"
          imageSrc="/bg-section-bottom-desktop-2.svg"
        />
        <Card type="Flowing Conversations">
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </Card>
        <Curve
          className="block lg:hidden"
          imageSrc="/bg-section-top-mobile-2.svg"
        />
        <Curve
          className="hidden lg:block"
          imageSrc="/bg-section-top-desktop-2.svg"
        />
        <Card type="Your Users">
          It takes no time at all to integrate Huddle with your app&apos;s
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </Card>
        <Curve
          className="block lg:hidden"
          imageSrc="/bg-section-bottom-mobile-1.svg"
        />
        <Curve
          className="hidden lg:block"
          imageSrc="/bg-section-bottom-desktop-1.svg"
        />
        <GetStarted />
        <Curve
          className="block lg:hidden"
          imageSrc="/bg-footer-top-mobile.svg"
        />
        <Curve
          className="hidden lg:block"
          imageSrc="/bg-footer-top-desktop.svg"
        />
      </main>
      <footer className="m-auto flex w-[375px] flex-col gap-16 bg-veryDarkCyan p-6 pt-12 lg:w-auto lg:flex-row-reverse lg:justify-between lg:p-28">
        <Newsletter />
        <section className="flex flex-col gap-8 lg:w-80">
          <div className="flex flex-col gap-2">
            <Logo white />
            <Text className="text-start text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </Text>
          </div>
          <div className="flex flex-col gap-5">
            <Contact iconSrc="/icon-phone.svg">Phone: +1-543-123-4567</Contact>
            <Contact iconSrc="/icon-email.svg">example@huddle.com</Contact>
          </div>
          <div className="flex gap-4 lg:mt-8">
            <SocialIcon type="facebook" />
            <SocialIcon type="instagram" />
            <SocialIcon type="twitter" />
          </div>
        </section>
      </footer>
    </>
  );
}
