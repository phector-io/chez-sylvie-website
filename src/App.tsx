import { AppContextProvider } from "./providers/AppContextProvider";
import { DishContextProvider } from "./providers/DishContextProvider";

import Router from "./Router/Router";

function App() {
    return (
        <AppContextProvider>
            <DishContextProvider>
                <Router />
            </DishContextProvider>
        </AppContextProvider>
    );
}
export default App;

//TODO
// Add in cache where first in site
