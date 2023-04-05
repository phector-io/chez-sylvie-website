import { CommonContextProvider } from "./providers/CommonContextProvider";

import Router from "./Router/Router";

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
