import { Forbidden } from "./components/Forbidden/Forbidden";
import { AppContextProvider } from "./providers/AppContextProvider";
import { DishContextProvider } from "./providers/DishContextProvider";
import { QuizContextProvider } from "./providers/QuizContextProvider";

import Router from "./Router/Router";

function App() {
    return (
        // <AppContextProvider>
        //     <DishContextProvider>
        //         <QuizContextProvider>
        //             <Router />
        //         </QuizContextProvider>
        //     </DishContextProvider>
        // </AppContextProvider>
		<Forbidden />
    );
}
export default App;