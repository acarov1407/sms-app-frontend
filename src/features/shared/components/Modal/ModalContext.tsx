import { createContext } from "react";

interface ModalContextProps {
    openId: string;
    handleOpen: (id: string) => void;
    handleClose: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;