import { Helmet } from 'react-helmet-async';
import Estates from './Estates';
import Slider from './Slider';
import { HelmetProvider } from 'react-helmet-async';
import FamilySection from './FamilySection';
import Counting from './Counting';

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
            <FamilySection></FamilySection>
            <Estates></Estates>
            <Counting></Counting>
        </div>
    );
};

export default Home;