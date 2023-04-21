
// import styles from './page.module.css'

// original conponent
import About from "../components/about/page"
import Profile from "../components/profile/page"
import Contact from "../components/contact/page"
import Skill from "../components/skill/page"
import Product from "../components/product/page"

export default function Home() {
  return (
    <>
      <About />
      <Profile />
      <Skill />
      <Product />
      <Contact />
    </>
  )
}
