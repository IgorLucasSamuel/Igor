from appointment import Appointment

class Hospital:
    def __init__(self):
        self.patients = []
        self.doctors = []

    def add_patient(self, patient):
        self.patients.append(patient)

    def add_doctor(self, doctor):
        self.doctors.append(doctor)

    def list_patients(self):
        return [str(patient) for patient in self.patients]

    def list_doctors(self):
        return [str(doctor) for doctor in self.doctors]

    def book_appointment(self, patient, doctor, date_time):
        appointment = Appointment(patient, doctor, date_time)
        patient.book_appointment(appointment)
        return appointment