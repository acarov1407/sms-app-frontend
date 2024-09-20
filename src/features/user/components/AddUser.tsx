import Modal from "../../shared/components/Modal/Modal"
import Button from "../../shared/components/Button"
import UserForm from "./UserForm"
import { UserPlusIcon } from "@heroicons/react/24/outline"
import Title from "../../shared/components/Modal/Title"

interface Props { }
function AddUser({ }: Props) {
    return (
        <Modal>
            <Modal.Open opens="new-user">
                {(handleOpen) => (
                    <Button type="button" onClick={handleOpen}>
                        <UserPlusIcon className="h-5 w-5"/>
                        <span>Agregar Usuario</span>
                    </Button>
                )}
            </Modal.Open>
            <Modal.Content id="new-user">
                {(handleClose) => (
                    <div>
                        <Title>Creación de usuario</Title>
                        <UserForm closeModal={handleClose}/>
                    </div>
                )}
            </Modal.Content>
        </Modal>
    )
}
export default AddUser