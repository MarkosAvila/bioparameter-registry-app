import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, AlertTriangle } from "lucide-react"

// Mock data for demonstration
const patients = Array(50).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Name ${index + 1}`,
  surname: `Surname ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
  sex: Math.random() > 0.5 ? 'Male' : 'Female',
  weight: Math.floor(Math.random() * 50) + 50,
  height: Math.floor(Math.random() * 50) + 150,
  education: ['High School', 'Bachelor', 'Master', 'PhD'][Math.floor(Math.random() * 4)],
  married: Math.random() > 0.5,
  employed: Math.random() > 0.3,
  address: `${Math.floor(Math.random() * 1000)} Main St, City`,
  bloodSugar: Math.floor(Math.random() * 150) + 70,
  bloodPressure: `${Math.floor(Math.random() * 60) + 100}/${Math.floor(Math.random() * 40) + 60}`,
}))

const isAbnormal = (patient) => {
  const systolic = parseInt(patient.bloodPressure.split('/')[0])
  const diastolic = parseInt(patient.bloodPressure.split('/')[1])
  return patient.bloodSugar > 140 || patient.bloodSugar < 70 || systolic > 140 || diastolic > 90
}

const allColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'surname', label: 'Surname' },
  { key: 'age', label: 'Age' },
  { key: 'sex', label: 'Sex' },
  { key: 'weight', label: 'Weight (kg)' },
  { key: 'height', label: 'Height (cm)' },
  { key: 'education', label: 'Education' },
  { key: 'married', label: 'Married' },
  { key: 'employed', label: 'Employed' },
  { key: 'address', label: 'Address' },
  { key: 'bloodSugar', label: 'Blood Sugar' },
  { key: 'bloodPressure', label: 'Blood Pressure' },
]

export default function PatientList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [selectedColumns, setSelectedColumns] = useState(['name', 'surname', 'age', 'sex', 'weight', 'height'])
  const patientsPerPage = 10

  const filteredPatients = patients
    .filter(patient =>
      Object.values(patient).some(value => 
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (isAbnormal(a) && !isAbnormal(b)) return -1
      if (!isAbnormal(a) && isAbnormal(b)) return 1
      return 0
    })

  const indexOfLastPatient = currentPage * patientsPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient)

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleColumnToggle = (columnKey: string) => {
    setSelectedColumns(prev => 
      prev.includes(columnKey) 
        ? prev.filter(key => key !== columnKey)
        : [...prev, columnKey]
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Patient List</h1>

        <div className="mb-6">
            <Input
                type="text"
                placeholder="Search patients..."
                onChange={(e) => setFilter(e.target.value)}
                className="absolute pl-12"
            />
            <Search className="h-4 w-4 text-gray-500 relative left-4 top-[10px]" />
        </div>

      <div className="mb-6 flex flex-wrap gap-4">
        {allColumns.map(column => (
          <div key={column.key} className="flex items-center space-x-2">
            <Checkbox
              id={column.key}
              checked={selectedColumns.includes(column.key)}
              onCheckedChange={() => handleColumnToggle(column.key)}
            />
            <label
              htmlFor={column.key}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {column.label}
            </label>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              {allColumns.filter(column => selectedColumns.includes(column.key)).map(column => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPatients.map((patient) => (
              <TableRow key={patient.id} className={isAbnormal(patient) ? 'bg-yellow-100' : ''}>
                {allColumns.filter(column => selectedColumns.includes(column.key)).map(column => (
                  <TableCell key={column.key}>
                    {column.key === 'bloodSugar' ? (
                      <>
                        {patient[column.key]}
                        {(patient[column.key] > 140 || patient[column.key] < 70) && (
                          <AlertTriangle className="inline ml-2 h-4 w-4 text-yellow-600" />
                        )}
                      </>
                    ) : column.key === 'bloodPressure' ? (
                      <>
                        {patient[column.key]}
                        {(parseInt(patient[column.key].split('/')[0]) > 140 || parseInt(patient[column.key].split('/')[1]) > 90) && (
                          <AlertTriangle className="inline ml-2 h-4 w-4 text-yellow-600" />
                        )}
                      </>
                    ) : (
                      patient[column.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}