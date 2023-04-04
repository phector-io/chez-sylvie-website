import "./App.css";
import FooterComponent from "./components/Footer/Footer";
import NavBarComponent from "./components/NavBar/NavBar";
import { CommonContextProvider } from "./providers/CommonContextProvider";

function App() {
    return (
        <CommonContextProvider>
            <div className="App">
                <NavBarComponent />
                <FooterComponent />
            </div>
        </CommonContextProvider>
    );
}

export default App;

//TODO
// Add in cache where first in site
