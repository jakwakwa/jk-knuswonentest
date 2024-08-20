type CtaBtnProps = {
  readonly variant: "left" | "right";
  readonly children: React.ReactNode;
};

function CtaBtn({ variant, children }: CtaBtnProps) {
  const gradientGreen = "bg-gradient-to-r from-[#bfe27d] to-[#35bce7]";
  const gradientOrange = "bg-gradient-to-r from-[#f9b248] to-[#f12711]";
  return (
    <div className="w-[597px] h-[72px] relative mt-[-10px]">
      <button
        className={`h-10 px-6 py-2 left-0 top-[332px]
        ${variant === "left" ? gradientGreen : gradientOrange}
          rounded-lg justify-center items-center gap-2.5 inline-flex mt-4`}
      >
        <div className="text-white text-base font-medium font-body">
          {children}
        </div>
      </button>
    </div>
  );
}

export default CtaBtn;
