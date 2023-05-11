import { combineReducers, createStore } from "redux";
import {UsersReducer} from "./Users/UsersReducer";
import { VaccinationsReducer } from "./Vaccinations/VaccinationsReducer";


const reducers = combineReducers(
    {
        Users:UsersReducer,
        Vaccinations:VaccinationsReducer
        
    }
)

//בניית הסטור- המחסן הגלובאלי- שיכיר את כל הנתונים
export const store = createStore(reducers);

//לצורך בדיקה בלבד- בדפדפן
window.store = store;
