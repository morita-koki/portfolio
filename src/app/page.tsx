
// import styles from './page.module.css'

// original conponent
import { About } from "../components/about/page"
import { Profile } from "../components/profile/page"
import { Contact } from "../components/contact/page"
import { Skills } from "../components/skill/page"
import { Products } from "../components/product/page"

export default function Home() {
  return (
    <>
      <About id="about" />
      <Profile id="profile" />
      <Skills id="skills" />
      <Products id="products" />
      <Contact id="contact" />
    </>
  )
}
