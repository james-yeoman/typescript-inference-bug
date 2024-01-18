import { createContext, useContext } from "react";

export const closeContext = createContext<(() => void) | null>(null);
export const useCloseComponent = () => {
	const context = useContext(closeContext);
	if (!context) throw new Error("useCloseComponent used outside of a context provider!");

	return context;
}
