import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

interface Measurement {
  date: string;
  glucose: number;
  systolic: number;
  diastolic: number;
}

interface BloodPressureHistoryProps {
  patientData: {
    measurements: Measurement[];
  };
}

const BloodPressureHistoryCard = ({ patientData }: BloodPressureHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Pressure History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientData.measurements}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
            <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BloodPressureHistoryCard;