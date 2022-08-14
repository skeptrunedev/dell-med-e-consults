import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'
import ResultsHeading from '../../components/results/ResultsHeading'
import WTPTable from '../../components/results/WTPTable'

const Results: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'Results' } }/>
      <ResultsHeading { ...{ active_page: 'Results' } }/>
      <WTPTable />
      <Footer />
    </div>
  )
}

export default Results
