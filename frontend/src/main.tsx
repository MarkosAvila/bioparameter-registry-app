import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DoctorDashboard from './routes/main_page_doctor.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DoctorDashboard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
