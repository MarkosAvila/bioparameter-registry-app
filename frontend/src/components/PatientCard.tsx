import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AlertTriangle } from "lucide-react"


interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  condition: string;
}

interface Props {
  patient: Patient;
}

const PatientCard: React.FC<Props> = ({ patient }) => {
  return (
    <Card key={patient.id}>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-500">{patient.age} years, {patient.gender}</p>
          </div>
        </div>
        <AlertTriangle
          className={`h-5 w-5 ${
            patient.condition === 'Blood Sugar'
              ? 'text-yellow-600'
              : patient.condition === 'Blood Pressure'
              ? 'text-red-600'
              : 'text-orange-600'
          }`}
        />
      </CardContent>
    </Card>
  );
};

export default PatientCard;