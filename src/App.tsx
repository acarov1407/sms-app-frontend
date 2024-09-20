import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./pages";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MyToaster from "./features/shared/components/MyToaster";
import AppLayout from "./layouts/AppLayout";

import queryClient from "./config/query-client";

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <MyToaster />
      <BrowserRouter>
        <Routes>
          <Route path="/auth">

          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
