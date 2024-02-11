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
      <header className="m-auto flex w-[375px] flex-col gap-24 p-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Button type="Try it Free" />
        </div>
        <section className="flex flex-col gap-8">
          <Title as="h1">Build The Community Your Fans Will Love</Title>
          <Text>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </Text>
          <Button type="Get Started For Free" />
        </section>
        <Mockups />
        <div className="flex flex-col items-center gap-24">
          <Stats type="community" />
          <Stats type="message" />
        </div>
      </header>
      <main className="m-auto flex w-[375px] flex-col">
        <Curve type="sectionTop1" />
        <Card type="Grow Together">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </Card>
        <Curve type="sectionBottom2" />
        <Card type="Flowing Conversations">
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </Card>
        <Curve type="sectionTop2" />
        <Card type="Your Users">
          It takes no time at all to integrate Huddle with your app&apos;s
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </Card>
        <Curve type="sectionBottom1" />
        <GetStarted />
        <Curve type="footerTop" />
      </main>
      <footer className="m-auto flex w-[375px] flex-col gap-16 bg-veryDarkCyan p-6 pt-12">
        <Newsletter />
        <section className="flex flex-col gap-8">
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
          <div className="flex gap-4">
            <SocialIcon type="facebook" />
            <SocialIcon type="instagram" />
            <SocialIcon type="twitter" />
          </div>
        </section>
      </footer>
    </>
  );
}
