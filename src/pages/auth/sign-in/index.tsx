import { Logo } from "@/components/globals";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { SignInCard } from "./_components/sign-in-card";
import { signInOptions } from "@/constants/sign-in-options";
import { ScaleLoader } from "@/components/ui/scale-loader";

type TabType = "saas" | "self-hosted";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState<TabType>("saas");
  const [isLoading, setIsLoading] = useState(false);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  useEffect(() => {
    const updateTabMetrics = () => {
      const currentTab = tabsRef.current[activeTab === "saas" ? 0 : 1];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);

      if (optionsRef.current) {
        optionsRef.current.style.height = `${optionsRef.current.scrollHeight}px`;
      }
    };

    updateTabMetrics();
    window.addEventListener("resize", updateTabMetrics);

    return () => window.removeEventListener("resize", updateTabMetrics);
  }, [activeTab]);

  return (
    <div className="relative grid h-screen md:grid-cols-2">
      {isLoading && <ScaleLoader />}
      <div className="col-span-1 flex h-full w-full items-end justify-start border-r bg-[url('/bg/auth.png')] bg-cover bg-center bg-no-repeat max-md:hidden">
        <img
          src="/images/auth-sub.png"
          alt="Authentication illustration"
          width={284}
          height={319}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 bg-background-neutral px-4 md:px-6">
        <div className="shadow-xs flex w-full flex-col items-center rounded-xl border bg-background-elevated py-4 pt-9 shadow-shadow-base md:py-6">
          <div className="flex w-full flex-col items-center gap-6 border-b border-border-muted pb-9 md:gap-9">
            <Logo />
            <div className="flex w-full flex-col gap-5 px-4 md:px-6">
              <h1 className="text-center text-2xl font-semibold text-text-primary md:text-[32px]">
                Welcome to CodeAnt AI
              </h1>
              <div className="relative rounded-lg bg-gray-100 p-1">
                {(["saas", "self-hosted"] as const).map((tab, idx) => (
                  <button
                    key={tab}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className="relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-200"
                    onClick={() => setActiveTab(tab)}
                  >
                    <h1
                      className={classNames(
                        "font-semibold text-lg transition-all ease-in-out duration-150",
                        {
                          "text-background-elevated": activeTab === tab,
                          "text-text-primary": activeTab !== tab,
                        }
                      )}
                    >
                      {tab === "saas" ? "SAAS" : "Self Hosted"}
                    </h1>
                  </button>
                ))}
                <div
                  className="absolute inset-y-1 rounded-md bg-action-primary shadow-sm transition-all duration-300 ease-in-out"
                  style={{
                    left: tabUnderlineLeft,
                    width: tabUnderlineWidth,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            ref={optionsRef}
            className="flex min-h-[310px] w-full flex-col items-center justify-start gap-4 pt-6 max-md:px-4"
          >
            {signInOptions
              .filter((option) => option.type === activeTab)
              .map((option) => (
                <SignInCard
                  key={option.icon}
                  icon={option.icon}
                  text={option.text}
                  onRouteChange={handleLoadingChange}
                />
              ))}
          </div>
        </div>
        <p className="text-base font-normal text-text-primary">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
