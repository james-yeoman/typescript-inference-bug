import { createContext, useContext } from "react";
import { User } from "./components/User";

type InferElementProps<T> = T extends React.ComponentType<infer Props>
	? Props extends object
		? Props
		: never
	: never;

export enum Components {
    USER = "USER"
    // More after
}

export const components = {
    [Components.USER]: User
	// Exhaustive
}

export type ComponentTypes = typeof components;
export type RawState<T extends keyof ComponentTypes> = InferElementProps<
	ComponentTypes[T]
>;

export type OpenComponent = <T extends keyof ComponentTypes>(
	modalType: T,
	newState: RawState<T>
) => void;

export const componentContext = createContext<{ openComponent: OpenComponent } | null>(null);
export const useOpenComponent = () => {
	const context = useContext(componentContext);
    if (!context) throw new Error("useOpenComponent used outside of a context provider!");

	return context.openComponent;
};
