
import type { NextPage } from 'next'
import { NavbarProps } from '../../interfaces/navigation'


const  ResultsHeading: NextPage<NavbarProps> = ({ active_page }) => {
  return (
    <div className="grid mt-14 px-4 md:px-28">
      <div>
        <p className="text-2xl font-semibold"> Results </p>
      </div>
    </div>
  )
}

export default ResultsHeading;