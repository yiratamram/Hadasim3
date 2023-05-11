import produce from 'immer';

const VaccinationsInitialState={
    vaccination:{},
    vaccinations:[]   
}


export const VaccinationsReducer=produce((state,action)=>{
    switch(action.type)
    {
         case "GET_VACCINATION_BY_ID":state.vaccination=action.paylod;break;
         case "ADD_VACCINATION":state.vaccinations.push(action.payload);break; 
         case "PATIENT_CHART":state.vaccinations.push(action.payload);break;
         case "GET_COUNT_WHO_VACCINATED":state.vaccinations.push(action.payload);break;
         z
         
    }
},VaccinationsInitialState)
