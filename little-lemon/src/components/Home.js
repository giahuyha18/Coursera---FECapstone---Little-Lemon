import Hero from "./HomePageComponents/Hero.js"
import WeeklySpecialDishes from "./HomePageComponents/WeeklySpecialDishes.js"
import Testimonials from "./HomePageComponents/Testimonials.js"
import About from "./HomePageComponents/About.js"
export default function Home(){
    return (
        <>
            <Hero/>
            <WeeklySpecialDishes/>
            <Testimonials/>
            <About/>
        </>
    )
}