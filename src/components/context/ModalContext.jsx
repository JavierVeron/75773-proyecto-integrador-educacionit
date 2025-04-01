import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({children}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const mostrarModal = () => {
        setModalVisible(true);
    }

    const ocultarModal = () => {
        setModalVisible(false);
    }

    return <ModalContext.Provider value={{modalVisible, mostrarModal, ocultarModal}}>
        {children}
    </ModalContext.Provider>
}

export default ModalContextProvider