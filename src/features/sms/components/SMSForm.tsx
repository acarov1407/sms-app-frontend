import { Form, FormRow, TextArea } from "../../shared/components/Form";
import Button from "../../shared/components/Button";

interface Props { }
function SMSForm({ }: Props) {
  return (
    <Form>
      <FormRow id="message" label="Mensaje">
        <TextArea id="message" name="message" rows={12}></TextArea>
      </FormRow>
      <div>
        <Button type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  )
}
export default SMSForm