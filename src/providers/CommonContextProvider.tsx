import { ReactNode, createContext, useContext } from "react";
import { ICommonContextProviderProps } from "../interfaces/ICommonContextProviderProps";

type Props = {
    children: ReactNode;
};

const CommonContextProvider = createContext<ICommonContextProviderProps>({});

export const useCommonContextProvider = () => useContext(CommonContextProvider);

export const CommonContextProviderProvider = ({ children }: Props) => {

    const propsValues = {};

    return (
        <CommonContextProvider.Provider value={propsValues}>
            {children}
        </CommonContextProvider.Provider>
    );
};