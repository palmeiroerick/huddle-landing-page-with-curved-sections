type CurveProps = {
  type:
    | "footerTop"
    | "sectionBottom1"
    | "sectionBottom2"
    | "sectionTop1"
    | "sectionTop2";
};

export default function Curve({ type }: CurveProps) {
  const style = {
    footerTop: "bg-footerTopMobile w-[375px] h-[53px] lg:bg-footerTopDesktop",
    sectionBottom1:
      "bg-sectionBottomMobile1 w-[375px] h-[52px] lg:bg-sectionBottomDesktop1",
    sectionBottom2:
      "bg-sectionBottomMobile2 w-[375px] h-[101px] lg:bg-sectionBottomDesktop2",
    sectionTop1:
      "bg-sectionTopMobile1 w-[375px] h-[112px] lg:bg-sectionTopDesktop1",
    sectionTop2:
      "bg-sectionTopMobile2 w-[375px] h-[103px] lg:bg-sectionTopDesktop2",
  };

  return <div className={`${style[type]}  bg-white`} />;
}
