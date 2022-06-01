import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'

const Parameters: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'Parameters' } }/>
      <Footer />
    </div>
  )
}

export default Parameters
