from pydantic import BaseModel, EmailStr, Field, validator

from datetime import datetime

from models.models import Gender, Scholing


class EmailSchema(BaseModel):
    email_id: int
    email_address: EmailStr
    email_verify: bool = False
    doctor_id: str


class AdressSchema(BaseModel):
    adress_id: int
    adress: dict


class DoctorOut(BaseModel):
    doctor_id: str
    first_name: str
    second_name: str | None = None
    last_name: str | None = None
    specialty: str | None = None
    portrait: str | None = None


class DoctorIn(DoctorOut):
    password: str


class DoctorUp(BaseModel):
    doctor_id: str | None = None
    first_name: str | None = None
    second_name: str | None = None
    last_name: str | None = None
    specialty: str | None = None
    portrait: str | None = None
    password: str | None = None

    @validator("*", pre=True, allow_reuse=True)
    def check_null_values(cls, value):
        if value == "null":
            return None
        return value


class Patient(BaseModel):
    patient_id: str
    first_name: str
    second_name: str | None = None
    last_name: str | None = None
    birth_date: datetime | None = None
    gender: Gender | None = None
    height: int | None = None
    weight: float | None = None
    scholing: Scholing | None = None
    employee: bool | None = None
    married: bool | None = None
    adress_id: int


class DoctorPatient(BaseModel):
    doctor_id: str
    patient_id: str


class CardiovascularParameter(BaseModel):
    date: datetime
    systolic: int = 120
    diastolic: int = 80
    heart_rate: int | None = None
    patient_id: str
    doctor_id: str


class BloodSugarLevel(BaseModel):
    date: datetime
    value: float
    patient_id: str
    doctor_id: str
