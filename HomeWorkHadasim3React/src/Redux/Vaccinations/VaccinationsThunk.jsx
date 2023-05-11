import axios from "axios"
import { useDispatch } from "react-redux";
import {GetVaccinationById,AddVaccination,PatientChart,GetCountWhoVaccinated} from "./VaccinationsAction";
export const VaccinationsURL="https://localhost:44315/api/Vaccinations/"


 
export const getVaccinationById = async (dispatch,id) => {
    
    const vaccinationPromise = axios.get(VaccinationsURL+"GetVaccinationById/"+id);
    const response = await vaccinationPromise;
    const vaccination = response.data;
    dispatch(GetVaccinationById(vaccination))
    return vaccination;

}
export const getLastVaccinationsById = async (id) => {
    
    const vaccinationPromise = axios.get(VaccinationsURL+"GetLastVaccinationsById/"+id);
    const response = await vaccinationPromise;
    const vaccination = response.data;
    return vaccination;

}
export const addVaccination=async(dispatch,IdUser,DateOfVaccination,Manufacturer)=>
  {   
    debugger
       try{
           
       const newVaccination={ IdUser:IdUser,DateOfVaccination:DateOfVaccination,Manufacturer:Manufacturer,NumVaccination:0};
       const VaccinationPromise =await axios.post(VaccinationsURL+"AddVaccination",newVaccination);
       console.log(VaccinationPromise);
       await  dispatch(AddVaccination(VaccinationPromise.data));
       return VaccinationPromise.data;
       }
       catch(e){
           console.log(e);
       }
       
    }
    export const GetCountNotV = async () => {
  
        const VaccinationPromise = axios.get(VaccinationsURL+"GetCountNotV");
        const response = await VaccinationPromise;
        const vaccination= response.data;
        alert("  מספר חברי הקופה שאינם מחוסנים הוא"+ vaccination)
        return vaccination;
    
    }
    
//גרף
export const patientChart = async (dispatch) => {
  
    const VaccinationPromise = axios.get(VaccinationsURL+"PatientChart");
    const response = await VaccinationPromise;
    const vaccination= response.data;
    return vaccination;

}
export const getCountWhoVaccinated = async (num) => {
  
    const VaccinationPromise = axios.get("https://localhost:44315/api/Vaccinations/GetCountWhoVaccinated?numberVaccination="+num);
    const response = await VaccinationPromise;
    const vaccination= response.data;
    return vaccination;

}
