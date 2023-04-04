import Router from "./Router/Router";

import { CommonContextProvider } from "./providers/CommonContextProvider";

function App() {
    return (
        <CommonContextProvider>
            <Router />
        </CommonContextProvider>
    );
}
export default App;

//TODO
// Add in cache where first in site
