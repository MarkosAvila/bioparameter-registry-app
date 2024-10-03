import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Activity } from 'lucide-react';

interface AverageVitalParameters {
  averageGlucose: number;
  averageDiastolic: number;
  averageSystolic: number;
}

const AverageMeasurementsCard = ({ averageGlucose, averageDiastolic, averageSystolic }: AverageVitalParameters) => {

  const isAbnormal = (values: AverageVitalParameters, type: string) => {
    if (type === 'glucose') {
      return values.averageGlucose < 100
    } else if (type === 'bloodPressure') {
      return (values.averageDiastolic < 90 && values.averageSystolic < 130)
    }
  };

  const vitalParameters = {
    averageGlucose: averageGlucose,
    averageDiastolic: averageDiastolic,
    averageSystolic: averageSystolic,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Measurements</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`mb-4 p-4 rounded-md ${isAbnormal(vitalParameters, 'glucose') ? 'bg-green-100' : 'bg-red-100'}`}
        >
          <div className="flex items-center">
            <Droplets className="mr-2" />
            <span className="font-semibold">Average Blood Glucose:</span>
          </div>
          <p className="text-2xl">{averageGlucose} mg/dL</p>
        </div>

        <div
          className={`p-4 rounded-md ${isAbnormal(vitalParameters, 'bloodPressure') ? 'bg-green-100' : 'bg-red-100'}`}
        >
          <div className="flex items-center">
            <Activity className="mr-2" />
            <span className="font-semibold">Average Arterial Pressure:</span>
          </div>
          <p className="text-2xl">{averageSystolic}/{averageDiastolic} mmHg</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AverageMeasurementsCard;