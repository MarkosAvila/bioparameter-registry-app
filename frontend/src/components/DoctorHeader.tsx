import { Button } from "@/components/ui/button"
import { MessageCircle, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import '../index.css'

interface Props {
  doctorName: string;
}

const DoctorHeader: React.FC<Props> = ({ doctorName }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{doctorName}</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={() => alert("Navigating to All Patients page")}>
          <Users className="mr-2 h-4 w-4" />
          All Patients
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => alert("Logging out...")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DoctorHeader;