class Patient:
    def __init__(self, name, age, patient_id):
        self.name = name
        self.patient_id = patient_id
        self.medical_history = []
        self.appointments = []

    def add_medical_record(self, record):
        self.medical_history.append(record)

    def view_medical_history(self):
        return self.medical_history

    def book_appointment(self, appointment):
        self.appointments.append(appointment)

    def __str__(self):
        return f"Patient: {self.name} (ID: {self.patient_id})"

