import { TextareaHTMLAttributes } from "react";
import { inputStyles } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{}
function TextArea({ children, ...props}: Props) {
  return (
    <textarea className={`${inputStyles}`} {...props}>
        { children }
    </textarea>
  )
}
export default TextArea