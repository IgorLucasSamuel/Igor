from patient import Patient
import datetime
class Appointment:
    def __init__(self, patient, doctor, date_time):
        self.patient = patient
        self.doctor = doctor
        self.date_time = date_time

    def __str__(self):
        return f"Appointment: {self.patient.name} with {self.doctor.name} on {self.date_time}"