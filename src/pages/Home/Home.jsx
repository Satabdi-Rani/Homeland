import { Helmet } from 'react-helmet-async';
import Estates from './Estates';
import Slider from './Slider';
import { HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Homeland - Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            </HelmetProvider>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;