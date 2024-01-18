import type { ComponentTypes, OpenComponent, RawState} from "./useOpenComponent";
import { FC, PropsWithChildren, useState } from "react";
import ReactModal from "react-modal";
import { closeContext } from "./contexts";

import styles from "./Selector.module.css";
import { components, componentContext } from "./useOpenComponent";

export const ComponentWrapper = ({ children }: PropsWithChildren<object>) => {
	const [active, setActive] = useState(false);

    const [modalType, setModalType] = useState<keyof ComponentTypes>();
	const [panelState, setPanelState] =
		useState<RawState<keyof ComponentTypes>>();

	const closeModal = () => setActive(false);

    const openComponent: OpenComponent = (modalType, newState) => {
		setModalType(modalType);
		setPanelState({ ...newState });
		setActive(true);
	};

	const context = { openComponent };

	let ModalComponent: FC<RawState<keyof ComponentTypes>> = () => null;
	if (modalType && components[modalType]) {
		ModalComponent = components[modalType];
	}

    return (
        <componentContext.Provider value={context}>
            <ReactModal isOpen={active} className={styles.container} overlayClassName={styles.outer} onRequestClose={closeModal}>
                <closeContext.Provider value={closeModal}>
                    <ModalComponent {...panelState!} />
                </closeContext.Provider>
            </ReactModal>

            {children}
        </componentContext.Provider>
    )
}