import "./App.css";
import NavBarComponent from "./components/NavBar/NavBar";
import { CommonContextProvider } from "./providers/CommonContextProvider";

function App() {
    return (
        <CommonContextProvider>
            <div className="App">
                <NavBarComponent />
            </div>
        </CommonContextProvider>
    );
}

export default App;

//TODO
// Add in cache where first in site
