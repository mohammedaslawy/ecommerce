
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import './home.css'
import { Featured } from '../../components/featured/Featured'
import { PropertyList } from '../../components/prpertyList/PropertyList'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>

  )
}
