interface Props {
    children: React.ReactNode;
}
function Heading({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold">{ children }</h2>
  )
}
export default Heading