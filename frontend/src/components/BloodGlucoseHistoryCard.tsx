import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

interface Measurement {
  date: string;
  glucose: number;
  systolic: number;
  diastolic: number;
}

interface BloodGlucoseHistoryProps {
  patientData: {
    measurements: Measurement[];
  };
}

const BloodGlucoseHistoryCard = ({ patientData }: BloodGlucoseHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Glucose History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientData.measurements}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BloodGlucoseHistoryCard;