import Heading from "../features/shared/components/Heading"
import UserCard from "../features/user/components/UserCard"
import AddUser from "../features/user/components/AddUser"

import { useUsers } from "../features/user/hooks/useUsers"

interface Props { }
function Dashboard({ }: Props) {

  const { users, isLoading, error } = useUsers();


  return (
    <>
      <div>
        <Heading>SMS APP - Panel de administrador</Heading>
        <div className="shadow-sm border border-gray-200 p-5 mt-8 rounded-md sm:w-[500px]">
          <div className="grid grid-cols-[2fr,auto]">
            <h3 className="font-semibold text-xl">Lista Usuarios</h3>
            <AddUser />
          </div>

          <div className="space-y-3 mt-5 max-h-[calc(100vh-400px)] overflow-y-scroll">
            {isLoading
              ? <p>Cargando usuarios...</p>
              : users && users?.length > 0 ? (
                users.map(user => <UserCard key={user.id} user={user} />)
              ) : (
                <p>Aún no hay usuarios</p>
              )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard