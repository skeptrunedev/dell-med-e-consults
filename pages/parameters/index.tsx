import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'
import WelcomeHeading from '../../components/parameters/WelcomeHeading'
import Forms from '../../components/parameters/forms'

const Parameters: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'Parameters' } }/>
      <WelcomeHeading { ...{ active_page: 'Parameters' } }/>
      <Forms />
      <Footer />
    </div>
  )
}

export default Parameters
