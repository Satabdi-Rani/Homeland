import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='fontFamily'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;