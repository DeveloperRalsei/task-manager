"use client";

import { createContext, useContext, useState } from "react";

type NavbarContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </NavbarContext.Provider>
    );
}

export function useNavbarContext() {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error(
            "useNavbarContext must be used within a NavbarProvider"
        );
    }
    return context;
}
