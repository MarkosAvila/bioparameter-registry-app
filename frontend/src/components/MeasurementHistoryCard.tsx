import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

interface Measurement {
  date: string;
  glucose: number;
  systolic: number;
  diastolic: number;
}

interface MeasurementHistoryProps {
  patientData: {
    measurements: Measurement[];
  };
}

const MeasurementHistoryCard = ({ patientData }: MeasurementHistoryProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Measurement History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Blood Glucose (mg/dL)</TableHead>
              <TableHead>Blood Pressure (mmHg)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientData.measurements.map((measurement, index) => (
              <TableRow key={index}>
                <TableCell>{measurement.date}</TableCell>
                <TableCell>{measurement.glucose}</TableCell>
                <TableCell>{`${measurement.systolic}/${measurement.diastolic}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MeasurementHistoryCard;