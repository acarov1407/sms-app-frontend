interface Props {
    children: React.ReactNode;
}
function Container({ children }: Props) {
  return (
    <div className="max-w-[1100px] mx-auto my-0">
        { children }
    </div>
  )
}
export default Container