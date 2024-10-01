import { Outlet, useLocation } from 'react-router-dom'
import DoctorHeader from '@/components/DoctorHeader'

export default function HeaderDashboard() {
  const location = useLocation();
  const buttonText = location.pathname === '/dashboard' ? 'All patients' : 'Home'
  const buttonLink = location.pathname === '/dashboard' ? 'patients' : '/dashboard'
  // Mock data for demonstration
  const doctorName = "Dr. Smith"

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <DoctorHeader doctorName={doctorName} buttonText={buttonText} buttonLink={buttonLink} />
      <Outlet />
    </div>
  )
}