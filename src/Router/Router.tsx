import { FC } from 'react';

import { BrowserRouter } from "react-router-dom";

import NavBarComponent from '../components/NavBar/NavBar';
import RoutesComponent from './Routes';


const Router: FC = (): JSX.Element => {

    return (
       <BrowserRouter>
            <NavBarComponent />
            <RoutesComponent />
       </BrowserRouter>
    );
};

export default Router;