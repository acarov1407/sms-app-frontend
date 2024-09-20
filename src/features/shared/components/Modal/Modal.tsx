import { XMarkIcon } from "@heroicons/react/24/outline";
import ModalContext from "./ModalContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("Modal components must be used within a Modal provider");
    }
    return context;
}


function Modal({ children }: { children: React.ReactNode }) {

    const [openId, setOpenId] = useState("");

    const handleOpen = setOpenId;
    const handleClose = () => setOpenId("");

    return (
        <ModalContext.Provider
            value={{ openId, handleOpen, handleClose }}
        >
            {children}
        </ModalContext.Provider>
    )
}


interface OpenProps {
    children: (openModal: () => void) => React.ReactNode;
    opens: string;
}
function Open({ children, opens }: OpenProps) {

    const { handleOpen } = useModalContext();

    return children(() => handleOpen(opens));
}


interface ContentProps {
    children: (closeModal: () => void) => React.ReactNode;
    id: string;
}
function Content({ children, id }: ContentProps) {

    const { openId, handleClose } = useModalContext();

    const { ref } = useOutsideClick(handleClose);

    if (openId !== id || openId === "") return null;
    return createPortal(
        <div className="fixed top-0 left-0 right-0 z-[200] bottom-0 backdrop-blur-sm transition-all duration-300">
            <div className="fixed top-1/2 left-1/2 rounded-md transition-all duration-300 -translate-y-1/2 -translate-x-1/2 shadow-lg py-10 px-9 bg-white" ref={ref}>
                <button
                    className="absolute top-2 right-2 rounded-sm p-1 hover:bg-gray-100"
                    type="button"
                    onClick={handleClose}

                >
                    <XMarkIcon className="h-4 w-4"/>
                </button>
                {children(handleClose)}
            </div>
        </div>,
        document.getElementById("root") as HTMLElement
    )
}

Modal.Open = Open;
Modal.Content = Content;

export default Modal;