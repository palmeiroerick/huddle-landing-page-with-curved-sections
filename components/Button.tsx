type ButtonProps = {
  type: "Get Started For Free" | "Try it Free" | "Subscribe";
};

export default function Button({ type }: ButtonProps) {
  const styles = {
    "Get Started For Free":
      "bg-pink text-white h-10 w-52 rounded-full text-sm self-center",
    "Try it Free":
      "h-6 w-24 rounded-full text-pink border border-pink text-xs self-center",
    Subscribe: "h-12 w-40 rounded-md bg-pink text-white self-end",
  };

  return (
    <button className={`font-openSans font-bold ${styles[type]}`}>
      {type}
    </button>
  );
}
