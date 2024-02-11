type TextProps = {
  className?: string;
  children: string;
};

export default function Text({ className, children }: TextProps) {
  return (
    <p
      className={`text-center font-openSans text-[15px] text-veryDarkCyan ${className}`}
    >
      {children}
    </p>
  );
}
