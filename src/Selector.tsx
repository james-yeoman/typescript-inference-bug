import type {ComponentState, ComponentTypes, OpenComponent} from "./useOpenComponent";
import { FC, PropsWithChildren, useState } from "react";
import ReactModal from "react-modal";

import styles from "./Selector.module.css";
import { components, componentContext } from "./useOpenComponent";


export const ComponentWrapper = ({ children }: PropsWithChildren<object>) => {
	const [active, setActive] = useState(false);

    const [modalType, setModalType] = useState<keyof ComponentTypes>();
	const [panelState, setPanelState] =
		useState<ComponentState<keyof ComponentTypes>>();

	const closeModal = () => setActive(false);

    const openComponent: OpenComponent = (modalType, newState) => {
		setModalType(modalType);
		setPanelState({ ...newState, close: closeModal });
		setActive(true);
	};

	const context = { openComponent };

    // The only part of this that is difficult to type appropriately...
	// Luckily, this has no effect on the type inference when calling
	// useOpenModal, so an `any` here will suffice for now
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let ModalComponent: FC<any> = () => null;
	if (modalType && components[modalType]) {
		ModalComponent = components[modalType];
	}

    return (
        <componentContext.Provider value={context}>
            <ReactModal isOpen={active} className={styles.container} overlayClassName={styles.outer} onRequestClose={closeModal}>
                <ModalComponent {...panelState} />
            </ReactModal>

            {children}
        </componentContext.Provider>
    )
}