import { FC } from "react";

import { Routes, Route } from 'react-router-dom';

import Home from "../components/Home/Home";
import DishList from "../components/DishList/DishList";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";
import Quiz from "../components/Quiz/Quiz";
import LegalMentions from "../components/LegalMentions/LegalMentions";

import { SettingsHelper } from "../helpers/SettingsHelper";

const RoutesComponent: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={SettingsHelper.getSetting("route_path_home")} element={<Home />} />
            <Route path={SettingsHelper.getSetting("route_path_menu")} element={<DishList />} />
            <Route path={SettingsHelper.getSetting("route_path_contact")} element={<Contact />} />
            <Route path={SettingsHelper.getSetting("route_path_quiz")} element={<Quiz />} />
            <Route path={SettingsHelper.getSetting("route_path_mentions")} element={<LegalMentions />} />
            <Route path={SettingsHelper.getSetting("route_path_404")} element={<NotFound />} />
        </Routes>
    );
};
export default RoutesComponent;
