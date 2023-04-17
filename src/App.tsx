import { AppContextProvider } from "./providers/AppContextProvider";
import { DishContextProvider } from "./providers/DishContextProvider";
import { QuizContextProvider } from "./providers/QuizContextProvider";

import Router from "./Router/Router";

function App() {
    return (
        <AppContextProvider>
            <DishContextProvider>
                <QuizContextProvider>
                    <Router />
                </QuizContextProvider>
            </DishContextProvider>
        </AppContextProvider>
    );
}
export default App;