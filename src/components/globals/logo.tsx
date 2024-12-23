export const Logo = () => {
  return (
    <div className="flex items-center gap-[11px]">
      <img
        src="/icons/logo.svg"
        alt="Logo"
        width={28}
        height={32}
        className=""
      />
      <h1 className="font-normal text-2xl leading-[26px] satoshi">CodeAnt AI</h1>
    </div>
  );
};
