import { Outlet } from "react-router-dom";
import Container from "../features/shared/components/Container";

function AppLayout() {
    return (
        <div className="h-screen grid grid-rows-[auto,1fr] bg-gray-50 mx-auto">
            <header className="p-4 bg-gray-900">
                <Container>
                    <h1 className="text-white text-xl font-semibold">SMS APP</h1>
                </Container>
            </header>
            <main className="py-8 px-5 sm:py-10 sm:px-12 overflow-y-scroll flex justify-center">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    )
}
export default AppLayout