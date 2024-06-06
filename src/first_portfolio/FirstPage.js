import './FirstPage.css'
import Hero from "./Hero"
import Who from "./Who"
import Works from "./Works"
import Contact from "./Contact"
export default function FirstPage() {
  return (
    <div className="fPage">
        <Hero/>
        <Who/>
        <Works />
        <Contact/>
    </div>
  )
}
