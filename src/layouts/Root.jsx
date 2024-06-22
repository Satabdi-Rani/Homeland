import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Header';
import Footer from '../pages/Home/Footer';

const Root = () => {
    return (
        <div className='fontFamily'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;