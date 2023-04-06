import { FC } from "react";

import { Routes, Route } from 'react-router-dom';

import Home from "../components/Home/Home";
import DishList from "../components/DishList/DishList";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";
import Quiz from "../components/Quiz/Quiz";
import LegalMentions from "../components/LegalMentions/LegalMentions";

const RoutesComponent: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plats" element={<DishList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/mentions-légales" element={<LegalMentions />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default RoutesComponent;
