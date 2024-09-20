interface Props { 
    label?: string;
    id?: string;
    children: React.ReactNode;
}
function FormRow({ children, label, id }: Props) {
    return (
        <div className="py-3 px-0 grid grid-cols-1 first:pt-0 last:pb-0 gap-1.5 border-b border-gray-100 last:border-none">
            {label &&
                <label className="text-gray-800 font-semibold" htmlFor={id}>{label}</label>}
            {children}
        </div>
    )
}
export default FormRow