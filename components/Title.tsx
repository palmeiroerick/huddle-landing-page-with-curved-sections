type TitleProps = {
  as: "h1" | "h2";
  className?: string;
  children: string;
};

export default function Title({ as, className, children }: TitleProps) {
  const Tag = as;

  return (
    <Tag
      className={`text-center font-poppins text-2xl text-veryDarkCyan ${className}`}
    >
      {children}
    </Tag>
  );
}
