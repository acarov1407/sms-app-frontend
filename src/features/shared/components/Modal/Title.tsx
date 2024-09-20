interface Props {
    children: React.ReactNode;
}
function Title({ children }: Props) {
  return (
    <h4 className="font-semibold text-gray-900 text-xl mb-4 pb-1 border-b border-gray-200">{ children }</h4>
  )
}
export default Title