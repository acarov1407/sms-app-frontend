import Modal from "../../shared/components/Modal/Modal";
import Button from "../../shared/components/Button";
import UserCard from "../../user/components/UserCard";
import SMSForm from "./SMSForm";
import Title from "../../shared/components/Modal/Title";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import type { User } from "../../../types/user";

interface Props {
    user: User;
 }
function SendSMS({ user }: Props) {
    return (
        <Modal>
            <Modal.Open opens="new-sms">
                {(handleOpen) => (
                    <Button type="button" onClick={handleOpen}>
                        <EnvelopeIcon className="h-5 w-5" />
                        <span>Enviar SMS</span>
                    </Button>
                )}
            </Modal.Open>
            <Modal.Content id="new-sms">
                {(handleClose) => (
                        <div className="min-w-[280px] sm:min-w-[400px]">
                            <Title>Enviar a</Title>
                            <UserCard user={user} withAction={false}/>
                            <SMSForm />
                        </div>
                    )}
            </Modal.Content>
        </Modal>
    )
}
export default SendSMS;