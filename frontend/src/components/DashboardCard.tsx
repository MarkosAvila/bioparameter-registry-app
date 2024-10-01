import { Card, CardContent } from "@/components/ui/card"


interface Props {
  totalPatients: number;
  abnormalBloodSugar: number;
  abnormalBloodPressure: number;
}

const DashboardCard: React.FC<Props> = ({ totalPatients, abnormalBloodSugar, abnormalBloodPressure }) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Total Patients</p>
            <p className="text-2xl font-bold">{totalPatients}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Abnormal Blood Sugar</p>
            <p className="text-2xl font-bold text-yellow-600">{abnormalBloodSugar}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Abnormal Blood Pressure</p>
            <p className="text-2xl font-bold text-red-600">{abnormalBloodPressure}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;