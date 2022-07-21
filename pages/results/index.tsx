import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'
import ResultsHeading from '../../components/results/ResultsHeading'
import HighLevels from '../../components/results/HighLevels'
import WTPTable from '../../components/results/WTPTable'

const Results: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'Results' } }/>
      <ResultsHeading { ...{ active_page: 'Results' } }/>
      <HighLevels />
      <WTPTable />
      <Footer />
    </div>
  )
}

export default Results
