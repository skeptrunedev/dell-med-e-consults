import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'

const Results: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'Results' } }/>
      <Footer />
    </div>
  )
}

export default Results
