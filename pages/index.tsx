import type { NextPage } from 'next'
import Navbar from '../components/app_shell/Navbar'
import Footer from '../components/app_shell/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar { ...{ active_page: 'About The Tool' } }/>
      <Footer />
    </div>
  )
}

export default Home
