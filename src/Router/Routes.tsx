import { FC } from "react";

import { Routes, Route } from 'react-router-dom';

import HomeComponent from "../components/Home/Home";
import DishesComponent from "../components/Dishes/Dishes";
import ContactComponent from "../components/Contact/Contact";
import NotFoundComponent from "../components/NotFound/NotFound";
import QuizComponent from "../components/Quiz/Quiz";
import LegalMentionsComponent from "../components/LegalMentions/LegalMentions";

const RoutesComponent: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/plats" element={<DishesComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/quiz" element={<QuizComponent />} />
            <Route path="/mentions-légales" element={<LegalMentionsComponent />} />
            <Route path="*" element={<NotFoundComponent />} />
        </Routes>
    );
};
export default RoutesComponent;
