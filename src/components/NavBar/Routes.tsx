import { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import HomeComponent from "../Home/Home";
import DishesComponent from "../Dishes/Dishes";
import ContactComponent from "../Contact/Contact";
import NotFoundComponent from "../NotFound/NotFound";
import QuizComponent from "../Quiz/Quiz";
import LegalMentionsComponent from "../LegalMentions/LegalMentions";

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
