
import type { NextPage } from 'next'
import { NavbarProps } from '../../interfaces/navigation'


const  WelcomeHeading: NextPage<NavbarProps> = ({ active_page }) => {
  return (
    <div className="grid grid-cols-2 mt-14 px-4 md:px-28">
      <div>
        <p className="text-2xl font-semibold"> Welcome to EconAnalysis </p>
        <p> We help you calculate costs for seeing patients virtually. </p>
      </div>
      <div className="grid">
          <a
            type="button"
            className="justify-self-end self-center w-fit h-fit px-8 py-4 border-2 border-casal-300 font-medium rounded-xl text-casal-400 bg-honeysuckle-600/20 hover:bg-honeysuckle-600/40 focus:outline-none focus:ring-none"
            href={ active_page == 'Parameters' ? "/decision_tree" : "/parameters" }
          >
            View { active_page == 'Parameters' ? "Decision Tree" : "Parameters" }
          </a>
      </div>
    </div>
  )
}

export default WelcomeHeading;