import main from '../assets/images/main-alternative2.svg';
import {Logo} from '../components';
import Wrapper from '../assets/wrappers/LandingPage';  // signals to be a styled component, Wrappe only responsible for styling, there's no logic
import {Link} from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
          <Logo/>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Desing<span> Monitor </span> Order
          </h1>
          <p>
            Leistungswerte von über 700 Bauteile. 
            Alle Bauweisen und Baustoffe.
            Funktionsintegrierende Darstellung aller beteiligten Disziplinen. Für Umbau- und Neubau sowie Design und Bestellung.
            Bauteilkonfigurator mit Echtzeit Leistungswerten.
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}
// shortcut rafc, since React17 we don't need import react any more => setting, "react snippets", checkbox => false


export default Landing