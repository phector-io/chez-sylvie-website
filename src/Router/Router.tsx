import { FC } from 'react';

import { BrowserRouter } from "react-router-dom";

import NavBar from '../components/NavBar/NavBar';
import RoutesComponent from './Routes';


const Router: FC = (): JSX.Element => {

    return (
       <BrowserRouter>
            <NavBar />
            <RoutesComponent />
       </BrowserRouter>
    );
};

export default Router;