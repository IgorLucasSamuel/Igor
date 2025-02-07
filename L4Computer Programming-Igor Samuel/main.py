import datetime
from patient import Patient
from doctor import Doctor
from hospital import Hospital

if __name__ == "__main__":
    hospital = Hospital()


    doctor1 = Doctor("Sabrina Julia", "Pediatrician")
    hospital.add_doctor(doctor1)

    patient1 = Patient("Lester Walker", 30, "patient_id")
    hospital.add_patient(patient1)

    appointment_time = datetime.datetime(2025, 10, 17, 15, 30)
    appointment = hospital.book_appointment(patient1, doctor1, appointment_time)
    print(appointment)

    patient1.add_medical_record("Diabetes.")
    patient1.add_medical_record("Pneumonia.")

    print(f"{patient1.name}'s Medical History:")
    for record in patient1.view_medical_history():
        print(f"- {record}")

    chat_message = doctor1.chat(patient1, "Hello, how can I assist you today?")
    print(chat_message)

    print("Patients in the hospital:")
    print(hospital.list_patients())
    print("Doctors in the hospital:")
    print(hospital.list_doctors())