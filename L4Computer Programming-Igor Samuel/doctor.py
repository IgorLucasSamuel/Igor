class Doctor:
    def __init__(self, name, specialty):
        self.name = name
        self.specialty = specialty

    def chat(self, patient, message):
        return f"Chat with Dr. {self.name}: {message}"

    def __str__(self):
        return f"Dr. {self.name} - Specialty: {self.specialty}"