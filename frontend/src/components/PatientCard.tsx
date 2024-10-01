import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { Link } from 'react-router-dom'


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
      <Link to={`patients/${patient.id}`} className="p-4 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <p className="font-medium text-gray-800">{patient.name}</p>
            <p className="text-sm text-gray-500">{patient.age} years, {patient.gender}</p>
          </div>
        </div>
        <AlertTriangle
          className={`h-5 w-5 ${
            patient.condition === 'Blood Sugar' || patient.condition === 'Blood Pressure'
            ? 'text-orange-600'
            : 'text-red-600'
          }`}
        />
      </Link>
    </Card>
  );
};

export default PatientCard;