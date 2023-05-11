export function GetVaccinationById(vaccination) {
    return { type: "GET_VACCINATION_BY_ID",paylod:vaccination }
}
export function AddVaccination(vaccination) {
    return { type: "ADD_USER",paylod:vaccination }
}
export function PatientChart(vaccination) {
    return { type: "PATIENT_CHART",paylod:vaccination }
}
export function GetCountWhoVaccinated(vaccination) {
    return { type: "GET_COUNT_WHO_VACCINATED",paylod:vaccination }
}
