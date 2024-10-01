"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from 'lucide-react'


interface PatientData {
    id: number;
    name: string;
    age: number;
    sex: string;
    weight: number;
    height: number;
  }

  const PatientInfoCard: React.FC<{ patientData: PatientData }> = ({ patientData }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <User className="mr-2" />
            <span className="font-semibold">{patientData.name}</span>
          </div>
          <p>Age: {patientData.age}</p>
          <p>Sex: {patientData.sex}</p>
          <p>Weight: {patientData.weight} kg</p>
          <p>Height: {patientData.height} cm</p>
        </CardContent>
      </Card>
    );
  };

  export default PatientInfoCard;