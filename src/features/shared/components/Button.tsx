import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }
function Button({ children, ...props }: Props) {
    return (
        <button
            className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold hover:bg-gray-700 rounded-md w-full flex items-center gap-2 justify-center disabled:opacity-60"
            {...props}
        >
            {children}
        </button>
    )
}
export default Button