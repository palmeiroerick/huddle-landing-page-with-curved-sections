import Image from "next/image";

export default function Mockups() {
  return (
    <div className="relative m-auto h-52 w-72 lg:h-[44rem] lg:w-[61rem]">
      <Image
        className="object-contain"
        src="/screen-mockups.svg"
        alt="Mockups"
        fill
      />
    </div>
  );
}
