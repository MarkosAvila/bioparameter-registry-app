import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HeaderDashboard from './routes/main_doctor.tsx'
import DoctorDashboard from './routes/dashboard_main.tsx'
import ErrorPage from './components/error-page.tsx';
import PatientDetail from './routes/patient_detail.tsx';
import PatientList from './routes/all_patients.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <HeaderDashboard />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DoctorDashboard />},
      {
        path: "patients/:patientId",
        element: <PatientDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: "patients",
        element: <PatientList />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
