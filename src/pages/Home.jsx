import Hero from '../Components/hero.jsx';
import Stats from '../Components/stats.jsx';
import About from '../Components/about.jsx';
import './pageStyles/home.css';
import Services from '../Components/services.jsx';
import ProjectSlider from '../Components/ProjectSlider.jsx';




export default function Home(){
    return(
        <>
        <section className='hero'>
            <Hero />
        </section>
        <section>
            <About/>
        </section>
        <section className='stats'>
            <Stats/>
        </section>
        <section>
            <Services />
        </section>
        <section>
            <ProjectSlider />
        </section>
        </>
    )
}
