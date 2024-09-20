import { InputHTMLAttributes } from "react";
import { inputStyles } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> { }
function Input({ children, ...props }: Props) {
    return (
        <input
            className={`${inputStyles}`}
            {...props}
        />
    )
}
export default Input