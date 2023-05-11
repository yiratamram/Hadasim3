// import axios from "axios"
// import { useDispatch } from "react-redux";
// import {CalculationProfile,AveragePos,AverageNeg,AverageUnsup,Pnu } from "./ProfileCalculationsAction";
// export const ProfileCalculationsURL="http://localhost:21507/api/ProfileCalculations/"

// export const calculationProfile = async (dispatch,codeCompany,calculationDate,fromDate,toDate) => {
//     debugger;
//     const calculationProfile  = { codeCompany:codeCompany,calculationDate: calculationDate,fromDate:fromDate,toDate:toDate};
//     try {
//         const calculationProfilePromise = await axios.post(ProfileCalculationsURL + "CalculationProfile/", calculationProfile);
//         await dispatch(CalculationProfile(calculationProfilePromise.data));
//          const response = await calculationProfilePromise;
//         return calculationProfilePromise.data;
//     }
//     catch (e) {
//         console.log(e);
//     }
// }



// export const averagePos = async (code) => {
//     debugger;
//     const calculationProfilePromise = axios.get(ProfileCalculationsURL+"AveragePos?codeCompany="+code);
//     const response = await calculationProfilePromise;
//     const calculationProfile = response.data;
//     (AveragePos(calculationProfile))
//     return calculationProfile;

// }
// export const averageNeg = async (code) => {
//     debugger;
//     const calculationProfilePromise = axios.get(ProfileCalculationsURL+"AverageNeg?codeCompany="+code);
//     const response = await calculationProfilePromise;
//     const calculationProfile = response.data;
//     (AverageNeg(calculationProfile))
//     return calculationProfile;

// }
// export const averageUnsup = async (code) => {
//     debugger;
//     const calculationProfilePromise = axios.get(ProfileCalculationsURL+"AverageUnsup?codeCompany="+code);
//     const response = await calculationProfilePromise;
//     const calculationProfile = response.data;
//     (AverageUnsup(calculationProfile))
//     return calculationProfile;

// }

// export const pnu = async (code) => {
//     debugger;
//     const calculationProfilePromise = axios.get(ProfileCalculationsURL+"Pnu?codeCompany="+code);
//     const response = await calculationProfilePromise;
//     const calculationProfile = response.data;
//     (Pnu(calculationProfile))
//     return calculationProfile;

// }



