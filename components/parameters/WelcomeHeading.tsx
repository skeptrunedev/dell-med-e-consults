import type { NextPage } from "next";
import { NavbarProps } from "../../interfaces/navigation";

const WelcomeHeading: NextPage<NavbarProps> = ({ active_page }) => {
  return (
    <div className="mt-14 grid grid-cols-2 px-4 md:px-28">
      <div>
        <p className="text-2xl font-semibold"> Welcome to EconAnalysis </p>
      </div>
      <div className="grid">
        <a
          type="button"
          className="focus:ring-none h-fit w-fit self-center justify-self-end rounded-xl border-2 border-casal-300 bg-honeysuckle-600/20 px-8 py-4 text-center font-medium text-casal-400 hover:bg-honeysuckle-600/40 focus:outline-none"
          href={active_page == "Parameters" ? "/decision_tree" : "/parameters"}
        >
          View {active_page == "Parameters" ? "Decision Tree" : "Parameters"}
        </a>
      </div>
    </div>
  );
};

export default WelcomeHeading;
