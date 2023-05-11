import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addVaccination } from "../Redux/Vaccinations/VaccinationsThunk";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useSelector } from "react-redux";
import { getLastVaccinationsById } from "../Redux/Vaccinations/VaccinationsThunk";
import axios from "axios"

export default function SignUp1() {
    debugger
    let Vaccination = useSelector((store) => { return store.Vaccinations.vaccination });
    debugger
    console.log("Vaccination")
    console.log(Vaccination.idVaccination)
    const [modal14, setModal14] = useState(true);
    const [errors, setErrors] = useState({ IdUser: "שדה חובה", DateOfVaccination: "שדה חובה", Manufacturer: "שדה חובה", DateOfPositiveResult: "שדה חובה", DateOfRecovery: "שדה חובה", NumVaccination: "שדה חובה" });
    const [vaccination, setVaccination] = useState({ idUser: "", dateOfVaccination: "", manufacturer: "", dateOfPositiveResult: "", dateOfRecovery: "", numVaccination: "" });
    const dispatch = useDispatch();
    const U = useSelector((store) => { return store.Users.user });
    let d;
    const [dd, setDd] = useState();
    
    

    useEffect(async () => {


        if (!Vaccination) {
            Vaccination.IdUser = "";
            Vaccination.DateOfVaccination = "";
            Vaccination.Manufacturer = "";
            Vaccination.DateOfPositiveResult = "";
            Vaccination.DateOfRecovery = "";
            Vaccination.NumVaccination = "";

        }
        setVaccination(Vaccination);
       
        console.log(dd+"fggf")

    }, [])

    const validDate = (d1, d2) => {
        
        var date = new Date();


        if (d1 == "0001-01-01T00:00:00" || d2 == "0001-01-01T00:00:00" || d1 == null || d2 == null || d1 == "" || d2 == "")
            return true
        else {
            var d1 = new Date(d1);
            var d2 = new Date(d2);
            if (d2.getFullYear() < d1.getFullYear() || d2.getFullYear() > date.getFullYear() || d1.getFullYear() > date.getFullYear())
                return false
            else {
                if (d2.getFullYear() > d1.getFullYear() && d2.getFullYear() <= date.getFullYear())
                    return true;
                if (d2.getFullYear() === d1.getFullYear() && d2.getFullYear() <= date.getFullYear()) {
                    if (d2.getMonth() < d1.getMonth())
                        return false;
                    else {
                        if (d2.getMonth() === d1.getMonth()) {

                            if (d2.getDate() >= d1.getDate())
                                return true;

                        }
                        else {
                            return true;
                        }
                    }
                }
            }
        }
    }




    const newVaccination = async () => {
       let Ru = await axios.get("https://localhost:44315/api/Vaccinations/Rdate?id="+U.idUser);
        var a= Ru.data

        let IdUser = U.idUser;
        let DateOfVaccination = document.getElementById("DateOfVaccination").value
        let Manufacturer = document.getElementById("Manufacturer").value
        //  let DateOfPositiveResult = document.getElementById("DateOfPositiveResult").value
        //  let DateOfRecovery = document.getElementById("DateOfRecovery").value
        //  let NumVaccination = document.getElementById("NumVaccination").value


        // if (validDate(d, DateOfVaccination)) {
            debugger
            if(a){
            if(validDate(DateOfVaccination,new Date())&&validDate(new Date(Ru.data),DateOfVaccination)){
            const vaccination = await addVaccination(dispatch, IdUser, DateOfVaccination, Manufacturer);
            console.log(vaccination)
            if (vaccination) {
                alert("חיסון התווסף בהצלחה");
                // setModal14(!modal14);
                return vaccination
            }
        }
        
        else {
              
            alert("אנא מלא את כל השדות ובדוק שכולם תקינים");
        }
    }
    else{
        if(validDate(DateOfVaccination,new Date())){
            const vaccination = await addVaccination(dispatch, IdUser, DateOfVaccination, Manufacturer);
            console.log(vaccination)
            if (vaccination) {
                alert("חיסון התווסף בהצלחה");
                setModal14(!modal14);
                return vaccination
            }
        }
        
        else {
              
            alert("אנא מלא את כל השדות ובדוק שכולם תקינים");
        }
    }
       
    }

    const up = (event) => {
      
        setVaccination(event.target.value)
    }


    return (
        <>

            <MDBContainer>
                <MDBModal isOpen={modal14} toggle={() => { setModal14(!modal14) }} centered>

                    <MDBModalHeader toggle={() => { setModal14(!modal14); }}>
                        {
                            Vaccination.idUser ?
                                <>
                                    טופס עדכון
                                </>
                                : <> הוספת חיסון </>
                        }
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6">
                                    <form>

                                        <div className="grey-text">
                                          
                                            <label>תאריך חחיסון</label>
                                            <MDBInput id="DateOfVaccination" value={vaccination.dateOfVaccination} onChange={(e) => { up(e) }} icon="user" group type="date" validate error="wrong"
                                                success="right" />
                                            {/* <p style={{color:"red"}}>{errors.erroruserName1} </p> */}
                                            <label>יצרן חיסון</label>
                                            <MDBInput id="Manufacturer" value={vaccination.manufacturer} onChange={(e) => { up(e) }} icon="envelope" group type="text" validate error="wrong"
                                                success="right" />
                                            {/* <p style={{color:"red"}}>{errors.errorEmail1}</p> */}

                                           
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={() => newVaccination()}>הוסף</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </>
    );
}




