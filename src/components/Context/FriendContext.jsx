import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendTimeline = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const addTimeline = (entry) => {
        setTimeline(prev => [entry, ...prev]);
    };

    return (
        <FriendContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendTimeline;