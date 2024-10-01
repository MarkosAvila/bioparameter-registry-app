import { Button } from "@/components/ui/button"
import { Settings, Users, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'
import '../index.css'

interface Props {
  doctorName: string;
  buttonText: string;
  buttonLink: string;
}

const DoctorHeader: React.FC<Props> = ({ doctorName, buttonText, buttonLink}) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{doctorName}</h1>
      <div className="flex items-center space-x-4">
        <Link to={`${buttonLink}`}>
          <Button variant="outline" size="sm" onClick={() => alert("Navigating to All Patients page")}>
            <Users className="mr-2 h-4 w-4" />
            {`${buttonText}`}
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="justify-around" onClick={() => alert("Logging out...")}>
              Logout
              <LogOut className="h-5 w-5" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DoctorHeader;