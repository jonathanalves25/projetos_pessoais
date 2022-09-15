import './style.css';
import MenuNav from '../MenuNav/'
import TextPrimary from '../TextPrimary/'
import TextSecondary from '../TextSecondary/'

const Home = () => {
  return (
    <section className="container">
      <MenuNav/>

      <div className="content">
        <div className="content-left">
            <TextSecondary title="so, you want to travel to"/>
            <TextPrimary title="space"/>
            <p>Let’s face it; if you want to go to space, you might as well 
              genuinely go to outer space and not hover kind of on the edge 
              of it. Well sit back, and relax because we’ll give you a truly
              out of this world experience!</p>
        </div>
        <div className="content-right">
            <div className="button-explore">
              <a href="">Explore</a>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Home