import { Form, FormRow, Input } from "../../shared/components/Form";
import Button from "../../shared/components/Button";

import type { UserCreate } from "../../../types/user";

import { useForm } from "../../shared/hooks/useForm";
import { useCreateUser } from "../hooks/useCreateUser";

interface Props { }
function UserForm({ }: Props) {


    const { values, handleChange, setFieldValue, resetForm } = useForm<UserCreate>({
        username: "",
        phone: "",
        photo: null
    });

    const { createUser, isLoading } = useCreateUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        createUser(values);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow id="username" label="Nombre completo">
                <Input
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    required
                />
            </FormRow>
            <FormRow id="phone" label="Numero de telefono">
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="ej: 573045670909"
                    value={values.phone}
                    onChange={handleChange}
                    required
                />
            </FormRow>
            <FormRow id="photo" label="Foto de perfil">
                <Input
                    id="photo"
                    name="photo"
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    onChange={(e) => setFieldValue("photo", e.target.files && e.target.files[0])}
                />
            </FormRow>
            <FormRow>
                <Button type="submit" disabled={isLoading}>
                    Agregar
                </Button>
            </FormRow>
        </Form>
    )
}
export default UserForm