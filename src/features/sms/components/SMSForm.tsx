import { Form, FormRow, TextArea } from "../../shared/components/Form";
import Button from "../../shared/components/Button";

import { useForm } from "../../shared/hooks/useForm";
import { useSendSMS } from "../hooks/useSendSMS";
import { User } from "../../../types/user";
import { SMSCreate } from "../../../types/sms";

interface Props {
  user: User;
  closeModal: () => void;
}
function SMSForm({ user, closeModal }: Props) {

  const { values, handleChange, resetForm } = useForm({
    body: ""
  });

  const { sendSMS, isLoading } = useSendSMS();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message: SMSCreate = {
      to: user.phone,
      body: values.body
    };

    sendSMS(message, {
      onSuccess: () => {
        resetForm();
        closeModal();
      }
    });
  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormRow id="body" label="Mensaje">
        <TextArea
          id="body"
          name="body"
          rows={12}
          value={values.body}
          onChange={handleChange}
        />
      </FormRow>
      <div>
        <Button type="submit" disabled={isLoading}>
          Enviar
        </Button>
      </div>
    </Form>
  )
}
export default SMSForm