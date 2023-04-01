import { ReactNode, createContext, useContext } from "react";
import { IDishContextProps } from "../interfaces/ICommonContextProps";

type Props = {
    children: ReactNode;
};

const DishesContext = createContext<IDishContextProps>({});

export const useDishesContext = () => useContext(DishesContext);

export const DishesContextProvider = ({ children }: Props) => {

    const propsValues = {};

    return (
        <DishesContext.Provider value={propsValues}>
            {children}
        </DishesContext.Provider>
    );
};