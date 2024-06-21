import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Header';

const Root = () => {
    return (
        <div className='fontFamily'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;