import { FormHTMLAttributes } from "react"

interface Props extends FormHTMLAttributes<HTMLFormElement> { }
function Form({ children, ...props }: Props) {
    return (
        <form
            className="bg-white rounded-md"
            {...props}
        >
            {children}
        </form>
    )
}
export default Form