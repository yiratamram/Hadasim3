import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser, updateUser } from '../Redux/Users/UsersThunk'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useSelector } from "react-redux";
import axios from "axios";

export default function SignUp() {
  debugger
  let User = useSelector((store) => { return store.Users.user });
  debugger
  console.log("User")
  console.log(User.idUser);
  const [modal14, setModal14] = useState(true);
  const [errors, setErrors] = useState({ IdUser: "שדה חובה", PrivateName: "שדה חובה", FamilyName: "שדה חובה", CityAdress: "שדה חובה", StreetAdress: "שדה חובה", NumberAdress: "שדה חובה", DateOfBirth: "שדה חובה", Phone: "שדה חובה", MobilePhone: "שדה חובה", DateOfPositiveResult: "שדה חובה", DateOfRecovery: "שדה חובה" });
  const [user, setUser] = useState({ idUser: "", privateName: "", familyName: "", cityAdress: "", streetAdress: "", numberAdress: "", dateOfBirth: "", numberAdress: "", phone: "", mobilePhone: "" });
  const dispatch = useDispatch();


  useEffect(async () => {
    // if (!user.idUser) {
    //   user.idUser = "";
    //   user.privateName = "";
    //   user.familyName = "";
    //   user.cityAdress = "";
    //   user.streetAdress = "";
    //   user.numberAdress = "";
    //   user.dateOfBirth = "";
    //   user.phone = "";
    //   user.mobilePhone = "";
    // }
    if (User.idUser){
      errors.PrivateName ="תקין!" ;
      errors.FamilyName = "תקין!" ;
      errors.CityAdress = "תקין!" ;
      errors.StreetAdress = "תקין!" ;
      errors.NumberAdress = "תקין!" ;
      errors.Phone = "תקין!" ;
      errors.MobilePhone = "תקין!" ;
    }
    setUser(User);
    setErrors(errors);
  }, [])


  const ValidDate = (event) => {
    var birthday = event.target.value
    if (!event.target.value) {
      setErrors({ ...errors, DateOfBirth: "שדה חובה!" });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
      setErrors({ ...errors, DateOfBirth: "תאריך שגוי" })
    }

    let parts = birthday.split('-');
    let now = new Date();
    let year = parseInt(parts[0], 10);
    let currentYear = now.getFullYear();
    let month = (parts[1][0] === '0') ? parseInt(parts[1][1], 10) : parseInt(parts[1], 10);
    let day = (parts[2][0] === '0') ? parseInt(parts[2][1], 10) : parseInt(parts[2], 10);

    if (year >= currentYear) {
      setErrors({ ...errors, DateOfBirth: "שנה שגוי" })
    }
    else if ((currentYear - year) < 18 || (currentYear - year) > 80) {
      setErrors({ ...errors, DateOfBirth: "אינך בגיל המתאים לעבודה" })
    }
    else if (month < 1 || month > 12) {
      setErrors({ ...errors, DateOfBirth: "חודש שגוי" })
    }
    else if (day < 1 || day > 31) {
      setErrors({ ...errors, DateOfBirth: "יום שגוי" })
    }
    else setErrors({ ...errors, dateOfBirth: "תקין!"  })
  };



  const validatememberID = (event) => {
    var validID = /^([1-9]|[2-8]\d|90)\d{7}$/;
    if (!event.target.value) {
      setErrors({ ...errors, IdUser: "שדה חובה!" });
    }
    else if (event.target.value.match(validID)) {
      setErrors({ ...errors, IdUser: "תקין!" });

    }
    else {
      setErrors({ ...errors, IdUser: 'ת.ז שגויה!!' })

    }
    setUser({ ...user, idUser: event.target.value })
  }

  const validatememberNumberAdress = (event) => {
    var validNumberAdress = /^[0-9]+$/;
    if (!event.target.value) {
      setErrors({ ...errors, NumberAdress: "שדה חובה!" });
    }
    else if (event.target.value.match(validNumberAdress)) {
      setErrors({ ...errors, NumberAdress: "תקין!" });

    }
    else {
      setErrors({ ...errors, NumberAdress: 'ת.ז שגויה!!' })

    }
    setUser({ ...user, numberAdress: event.target.value })
  }

  const validatememberCellPhone = (event) => {
    var validMobilePhone = /^0[5-8]\d{8}$/;
    if (!event.target.value) {
      setErrors({ ...errors, MobilePhone: "שדה חובה!" });
    }
    else if (event.target.value.match(validMobilePhone)) {
      setErrors({ ...errors, MobilePhone: "תקין!" });

    }
    else {
      setErrors({ ...errors, MobilePhone: 'ת.ז שגויה!!' })

    }
    setUser({ ...user, mobilePhone: event.target.value })
  }



  const validatememberPhone = (event) => {
    var validPhone = /\d/g;
    if (!event.target.value) {
      setErrors({ ...errors, Phone: "שדה חובה!" });
    }
    else if (event.target.value.match(validPhone) && event.target.value.length == 9) {
      setErrors({ ...errors, Phone: "תקין!" });

    }
    else {
      setErrors({ ...errors, Phone: 'פלאפון שגוי!!' })

    }
    setUser({ ...user, phone: event.target.value })
  }





  const validatememberPrivateName = (event) => {
    var validPrivateName = /^[\u0590-\u05FF]+(?:\s[\u0590-\u05FF]+)*$/;
    if (!event.target.value) {
      setErrors({ ...errors, PrivateName: "שדה חובה!" });
    }
    else if (event.target.value.match(validPrivateName)) {
      setErrors({ ...errors, PrivateName: "תקין!" });

    }
    else {
      setErrors({ ...errors, PrivateName: 'שם שגוי!!' })

    }
    setUser({ ...user, privateName: event.target.value })
  }

  const validatememberFamilyName = (event) => {
    var validFamilyName = /^[\u0590-\u05FF]+(?:\s[\u0590-\u05FF]+)*$/;
    if (!event.target.value) {
      setErrors({ ...errors, FamilyName: "שדה חובה!" });
    }
    else if (event.target.value.match(validFamilyName)) {
      setErrors({ ...errors, FamilyName: "תקין!" });

    }
    else {
      setErrors({ ...errors, FamilyName: 'משפחה שגויה!!' })

    }
    setUser({ ...user, familyName: event.target.value })
  }

  const ChooseCity=(event)=>{
    /**
     * Select a street by city in Israel
     * Cities data is from https://data.gov.il/dataset/citiesandsettelments
     * Streets data is from https://data.gov.il/dataset/321
     * API documentation https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_search
     */
    
    // REST API URL
    const api_url = "https://data.gov.il/api/3/action/datastore_search";
    // Cities endpoint
    const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
    // Streets endpoint
    const streets_resource_id = "a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3";
    // Field names
    const city_name_key = "שם_ישוב";
    const street_name_key = "שם_רחוב";
    // dataset ids
    const cities_data_id = "cities-data";
    const streets_data_id = "streets-data";
    // input elements
    const cities_input = document.getElementById("city-choice");
    const streets_input = document.getElementById("street-choice");
    
    /**
     * Get data from gov data API
     * Uses Axios just because it was easy
     */
    const getData = (resource_id, q = "", limit = "100") => {
      //console.log("sending", resource_id, query);
      return axios.get(api_url, {
        params: { resource_id, q, limit },
        responseType: "json"
      });
    };
    
    /**
     * Parse records from data into 'option' elements,
     * use data from key 'field_name' as the option value
     */
    const parseResponse = (records = [], field_name) => {
      const parsed =
        records
          .map((record) => `<option value="${record[field_name].trim()}">`)
          .join("\n") || "";
      //console.log("parsed", field_name, parsed);
      return Promise.resolve(parsed);
    };
    
    /**
     * Fetch data, parse, and populate Datalist
     */
    const populateDataList = (id, resource_id, field_name, query, limit) => {
      const datalist_element = document.getElementById(id);
      if (!datalist_element) {
        console.log(
          "Datalist with id",
          id,
          "doesn't exist in the document, aborting"
        );
        return;
      }
      getData(resource_id, query, limit)
        .then((response) =>
          parseResponse(response?.data?.result?.records, field_name)
        )
        .then((html) => (datalist_element.innerHTML = html))
        .catch((error) => {
          console.log("Couldn't get list for", id, "query:", query, error);
        });
    };
    
    // ---- APP ----
    
    /**
     * Populate cities.
     * There are about 1300 cities in Israel, and the API upper limit is 32000
     * so we can safely populate the list only once.
     */
    populateDataList(
      cities_data_id,
      cities_resource_id,
      city_name_key,
      undefined,
      32000
    );
    
    /**
     * Populate streets
     * Update the streets list on every city name change
     * (assuming there aren't more than 32,000 streets in any city)
     */
    cities_input.addEventListener("change", (event) => {
    
      populateDataList(
        streets_data_id,
        streets_resource_id,
        street_name_key,
        {
          שם_ישוב: cities_input.value
        },
        32000
      );
     
    });
    
    }
    
    
    
    
  // const isIsraeliCity = async (cityName) => {
  //   const API_KEY = 'YOUR_API_KEY';
  //   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&components=country:IL&key=${API_KEY}`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     if (data.status === 'OK' && data.results.length > 0) {
  //       const city = data.results[0].address_components.find(component => component.types.includes('locality'));

  //       return city.long_name.toLowerCase() === cityName.toLowerCase();
  //     } else {
  //       setErrors({ ...errors, CityAdress: 'עיר שגויה!!' })
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setErrors({ ...errors, CityAdress: 'עיר שגויה!!' })
  //     return false;
  //   }
  // };

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




  const newUser = async () => {
    debugger
    let IdUser,DateOfBirth;
    if( !User.idUser ){
       IdUser = document.getElementById("IdUser").value
       DateOfBirth = document.getElementById("DateOfBirth").value
    }
    let PrivateName = document.getElementById("PrivateName").value
    let FamilyName = document.getElementById("FamilyName").value
    let CityAdress = document.getElementById("street-choice").value
     let StreetAdress = document.getElementById("street-choice").value
    let NumberAdress = document.getElementById("NumberAdress").value
    let Phone = document.getElementById("Phone").value
    let MobilePhone = document.getElementById("MobilePhone").value
    //  let DateOfPositiveResult = document.getElementById("DateOfPositiveResult").value
    //  let DateOfRecovery = document.getElementById("DateOfRecovery").value
    // תמונה


    if (User.idUser) {

      if (errors.PrivateName === "תקין!"  && errors.FamilyName === "תקין!" && errors.NumberAdress === "תקין!" && errors.Phone === "תקין!"  && errors.MobilePhone === "תקין!" ) {

        const _user = await updateUser(dispatch, user.idUser, PrivateName, FamilyName, CityAdress,StreetAdress, NumberAdress, user.dateOfBirth, Phone,MobilePhone)
        if (_user)
          alert("הפרטים עודכנו בהצלחה");
        setModal14(!modal14);

      }
      else {
        alert("הפרטים לא עודכנו אנא וודא שהשדות לא ריקים  ותקינים")
      }
    }
    
    else {
      // errors.CityAdress === "תקין!"  && errors.StreetAdress === "תקין!" 
      if (validDate(DateOfBirth,new Date())&&errors.IdUser === "תקין!"  && errors.PrivateName === "תקין!"  && errors.FamilyName === "תקין!" && errors.NumberAdress === "תקין!" && errors.Phone === "תקין!"  && errors.MobilePhone === "תקין!" ) {
          const user = await addUser(dispatch, IdUser, PrivateName, FamilyName, CityAdress,StreetAdress, NumberAdress, DateOfBirth, Phone,MobilePhone,null,null,null);
        
          if (user) {
            alert("ברוך הבא " + PrivateName + " לאתרינו מקווים שתהיה לך את חווית הגלישה הטובה");
            setModal14(!modal14);
            return user
          }
          else {
            alert("אנא מלא את כל השדות ובדוק שכולם תקינים");
          }

        
      }
      else {

        alert("אנא מלא את כל השדות ובדוק שכולם תקינים");

      }
    }
  }


  const up = (event) => {
    //   if (!event.target.value)
    //   setErrors({ ...errors, nameCompany1: 'שדה חובה*' })
    //  else 
    setUser(event.target.value)
  }


  return (
    <>

      <MDBContainer>
        <MDBModal isOpen={modal14} toggle={() => { setModal14(!modal14) }} centered>

          <MDBModalHeader toggle={() => { setModal14(!modal14); }}>
            {
              User.idUser ?
                <>
                  טופס עדכון
                </>
                : <>טופס הרשמה </>
            }
          </MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>

                    <div className="grey-text">
                      {!User.idUser &&
                        <>
                          <label>תעודת זהות </label>
                          <MDBInput id="IdUser" value={user.idUser} onChange={(e) => validatememberID(e)} icon="user" group type="text" validate error="wrong"
                            success="right" />
                          <p style={{ color: "red" }}>{errors.IdUser}</p>
                        </>
                      }

                      <label>שם פרטי</label>
                      <MDBInput id="PrivateName" value={user.privateName} onChange={(e) => { validatememberPrivateName(e) }} icon="user" group type="text" validate error="wrong"
                        success="right" />
                      <p style={{ color: "red" }}>{errors.PrivateName} </p>
                      <label>שם משפחה</label>
                      <MDBInput id="FamilyName" value={user.familyName} onChange={(e) => { validatememberFamilyName(e) }} icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                      <p style={{ color: "red" }}>{errors.FamilyName}</p>
{/* 
                             <label>עיר </label>
                      <MDBInput id="CityAdress" value={user.cityAdress} onChange={(e) => { up(e) }} icon="user" group type="text" validate error="wrong" success="right" />
                      {/* <p style={{ color: "red" }}>{errors.CityAdress}</p> */}

                      {/* <label>רחוב </label>
                      <MDBInput id="StreetAdress" value={user.streetAdress} onChange={(e) => { up(e) }} icon="user" group type="text" validate error="wrong" success="right" />
                      <p style={{ color: "red" }}>{errors.StreetAdress}</p>  */}

<form action="" onChange={(e)=>ChooseCity(e)} >
  <div class="form-field" id="city-selection">
    <label for="city-choice"> עיר</label>
    <input value={user.cityAdress} list="cities-data" id="city-choice" name="city-choice" />
    <datalist id="cities-data">
    
      <option value="" id="city">טוען רשימת ערים...</option>
    </datalist>
  </div>
  <div class="form-field" id="street-selection">
    <label for="street-choice"> רחוב</label>
    <input value={user.streetAdress} list="streets-data" id="street-choice" name="street-choice" />
    <datalist id="streets-data">
      <option id="street" value=""/>
    </datalist>
  </div>

</form>


                      <label>מספר דירה</label>
                      <MDBInput id="NumberAdress" value={user.numberAdress} onChange={(e) => { validatememberNumberAdress(e) }} icon="user" group type="text" validate error="wrong" success="right" />
                      <p style={{ color: "red" }}>{errors.NumberAdress}</p>
                      {!User.idUser &&
                        <>
                          <label>תאריך לידה </label>
                          <MDBInput id="DateOfBirth" value={user.dateOfBirth} onChange={(e) => { up(e) }} icon="lock" group type="date" validate />
                          {/* <p style={{ color: "red" }}>{errors.DateOfBirth}</p> */}
                        </>}
                      <label> טלפון </label>
                      <MDBInput id="Phone" value={user.phone} onChange={(e) => { validatememberPhone(e) }} icon="lock" group type="text" validate />
                      <p style={{ color: "red" }}>{errors.Phone}</p>
                      <label>פלאפון נייד  </label>
                      <MDBInput id="MobilePhone" value={user.mobilePhone} onChange={(e) => { validatememberCellPhone(e) }} icon="lock" group type="text" validate />
                      <p style={{ color: "red" }}>{errors.MobilePhone}</p>
                      {/* <label>תאריך קבלת תוצאה חיביות</label
                      <MDBInput  id="DateOfPositiveResult" value={user.dateOfPositiveResult} onChange={(e) => { up(e) }} icon="lock" group type="date" validate  />
                      {/* <p style={{color:"red"}}>{errors.pass2}</p> */}
                      {/* <label>תאריך החלמה</label>
                      <MDBInput  id="DateOfRecovery" value={user.dateOfRecovery} onChange={(e) => { up(e) }} icon="lock" group type="date" validate  /> */}
                      {/* <p style={{color:"red"}}>{errors.pass2}</p> */}
                      <div className="text-center">

                      </div>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            {
              User.idUser ?
                <MDBBtn color="secondary" onClick={() => newUser()}>עדכן</MDBBtn>
                : <MDBBtn color="secondary" onClick={() => newUser()}>הרשם</MDBBtn>
            }
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </>
  );
}




