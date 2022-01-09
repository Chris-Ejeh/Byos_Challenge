import React, { FC, useState } from 'react';

interface AppContexProps {
    sideDrawerOpen: boolean;
    setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext({} as AppContexProps);

const AppProvider: FC = ({ children }) => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    return (
        <AppContext.Provider
            value={{
                sideDrawerOpen,
                setSideDrawerOpen,
            }}>
            {children}
        </AppContext.Provider>
    );
};

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };

export default AppProvider;
