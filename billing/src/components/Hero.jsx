import './Hero.css'
import ClientList from './ClientList';
import ClientDetail from './ClientDetail';

function Hero() {
    return <>
        <h1>Client Billing and Invoice</h1>
        <section>
            <ClientList/>
            <ClientDetail/>
        </section >
    </>
}

export default Hero;