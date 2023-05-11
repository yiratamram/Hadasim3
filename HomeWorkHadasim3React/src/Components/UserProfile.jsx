import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBFile, MDBInput
} from 'mdb-react-ui-kit';
import { useHistory } from 'react-router';
import { getUserById } from '../Redux/Users/UsersThunk';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccinationById,getLastVaccinationsById } from '../Redux/Vaccinations/VaccinationsThunk';
import { ifSick, UpdateImage,getAllUsers,updateUser } from '../Redux/Users/UsersThunk';

export default function ProfilePage(props) {
  const history = useHistory();
  let User = useSelector((store) => { return store.Users.user });
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [lv, setLv] = useState([]);
  const [user2, setUser2] = useState({});
  const [sick, setSick] = useState();
  const [myFile, setMyfile] = useState();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  
  let DateOfRecovery , DateOfPositiveResult ;
  let ifsick = 0
    let U
    let U2
    let id = props.match.params.id
    let Lv=0;
  const [user1, setUser1] = useState({ idUser: "", privateName: "", familyName: "", cityAdress: "", streetAdress: "", numberAdress: "", dateOfBirth: "", numberAdress: "", phone: "", mobilePhone: "", dateOfRecovery: "" });

  useEffect(async () => {
      
      if (id) {
      U = await getVaccinationById(dispatch, id);
      U2 = await getUserById(dispatch, id);
      ifsick = await ifSick(id)
      Lv=await getLastVaccinationsById(id)
      
    }
    else {
      U = await getVaccinationById(dispatch, User.idUser);
      U2 = await getUserById(dispatch, User.idUser);
      ifsick = await ifSick(User.idUser)
       Lv=await getLastVaccinationsById(User.idUser)


    }
    setLv(Lv);


    setSick(ifsick)
    if (U2) {
      setUser(U)
      setUser2(U2)
    }
    else {
      alert("אינך מחובר למערכת אנא התחבר או הרשם תחילה")
    }
  }, [])


  const up = (event) => {

    setUser1(event.target.value)
  }

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


  const updateDate = async () => {
    DateOfPositiveResult=User.dateOfPositiveResult;
    DateOfRecovery=User.dateOfRecovery;
if(sick==0){
      DateOfPositiveResult = document.querySelector("#DateOfPositiveResult").value
}
if(sick==1){
      DateOfRecovery = document.getElementById("DateOfRecovery").value
}
if(sick==0){
if(validDate(DateOfPositiveResult,new Date())){
   try{
    const UserI = await updateUser(dispatch,User.idUser,User.privateName,User.familyName,User.cityAdress,User.streetAdress,User.numberAdress,User.dateOfBirth,User.phone,User.mobilePhone,User.imageProfile,DateOfPositiveResult,DateOfRecovery);
    if(UserI){
      alert("פרטיך עודכנו בהצלחה אנא רענן את הדף כדי לצפות בשינויים")
    }
   }
  
   catch{
    alert("פרטיך אינם עודכנו אנא נסה שנית ")
   }
  }
  else{
    alert("אנא בדוק את תקינות התאריך")
  }
   } 


   else {
    if(validDate(DateOfPositiveResult,DateOfRecovery)&&(DateOfRecovery,new Date())){
      try{
       const UserI = await updateUser(dispatch,User.idUser,User.privateName,User.familyName,User.cityAdress,User.streetAdress,User.numberAdress,User.dateOfBirth,User.phone,User.mobilePhone,User.imageProfile,DateOfPositiveResult,DateOfRecovery);
       if(UserI){
         alert("פרטיך עודכנו בהצלחה אנא רענן את הדף כדי לצפות בשינויים")
       }
      }
     
      catch{
       alert("פרטיך אינם עודכנו אנא נסה שנית ")
      }
     }
     else{
      alert("אנא בדוק את תקינות התאריך")
    }
   }
  
  }
  
  


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && isImageFile(selectedFile)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid image file (JPEG, PNG, or GIF)");
    }
  };



  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("https://localhost:44315/api/Users/Upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          try {
           
            const UserI = await updateUser(dispatch,User.idUser,User.privateName,User.familyName,User.cityAdress,User.streetAdress,User.numberAdress,User.dateOfBirth,User.phone,User.mobilePhone,file.name,User.dateOfPositiveResult,User.dateOfRecovery);
            if(UserI)
            alert("העלאת תמונה בוצעה בהצלחה")
           
          }
          catch {
            alert("ישנה בעיה בהעלאת תמונה");
          }
        }
        else {
          throw new Error(await response.text());
        }
      } catch (ex) {
        alert(`Error: ${ex.message}`);
      }
    } else {
      setError("אנא בחר תמונה");
    }
  };

  const isImageFile = (file) => {
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    return file && acceptedImageTypes.includes(file.type);
  }

  return (
    <section style={{ backgroundColor: '#eee', padding: "10px 0px", margin: "20px auto", borderRadius: "8px" }} className="col-11">
      <MDBContainer className="p-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={user2.imageProfile != null ? `https://localhost:44315//images/${user2.imageProfile}` : "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530__340.png"}


                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user2.idUser}</p>
                <p className="text-muted mb-1">{user2.privateName} {user2.familyName}</p>
                <p className="text-muted mb-1">{user2.cityAdress} {user2.streetAdress} {user2.numberAdress}</p>
                <p className="text-muted mb-1">תאריך לידה: {(new Date(user2.dateOfBirth)).toLocaleDateString()}</p>
                <p className="text-muted mb-1">טלפון: {user2.phone}</p>
                <p className="text-muted mb-1">פלאפון: {user2.mobilePhone}</p>

                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn outline className="ms-1"><MDBFile onChange={handleFileChange} />העלאת תמונה</MDBBtn>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                  <MDBBtn outline className="ms-1" onClick={handleUpload}>שמור תמונה</MDBBtn>


                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th scope='col'>מספר חיסון</th>
                      <th scope='col'>יצרן</th>
                      <th scope='col'>תאריך</th>
                    </tr>
                  </MDBTableHead>
                  {user === undefined ? <h3>wait...</h3> :
                    user.map((f, i) =>
                      <MDBTableBody>

                        <tr>
                          <th scope='row'>{f.numVaccination}</th>
                          <td>{f.manufacturer}</td>
                          <td className='date_v'>{(new Date(f.dateOfVaccination)).toLocaleDateString()}</td>
                        </tr>
                      </MDBTableBody>
                    )}

                </MDBTable>
                {(lv<4)&&
                <MDBBtn outline className="ms-1" onClick={() => { props.history.push("/SignUp1") }}>הוסף חיסון </MDBBtn>
                }
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <p> סטטוס:</p>
                    {(sick == 1) &&
                      <p>חולה פעיל</p>
                    }
                    {(sick == 2) &&
                      <p>חלה בעבר</p>
                    }
                    {(sick == 0) &&
                      <p>לא חלה</p>
                    }
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6 " >
                <MDBCard className="mb-4 mb-md-0" >
                  <MDBCardBody  >
                    
                    {(sick == 1) &&
                     <>
                    <p> עדכון פרטי מחלה</p>
                     <label> תאריך החלמה </label>
                        <MDBInput id="DateOfRecovery" value={user1.dateOfRecovery} onChange={(e) => { up(e); }} icon="lock" group type="date" validate />
                      </>
                     }
                    {(sick == 2) &&
                      <p> אין צורך לעדכן תאריכים</p>
                    }
                    {(sick == 0) &&
                     <>
                     <p> עדכון פרטי מחלה</p>
                     <label> תאריך תוצאה חיובית </label>
                        <MDBInput id="DateOfPositiveResult" value={user1.DateOfPositiveResult} onChange={(e) => { up(e); }} icon="lock" group type="date" validate />
                      </>
                     }
                   


                  </MDBCardBody>
                  {(sick == 0 ||sick == 1 ) &&
                  <MDBBtn outline className="ms-1" onClick={updateDate}>עדכן </MDBBtn>
                  }
                </MDBCard>
              </MDBCol>
              {/* <MDBCol md="6" >
                <MDBCard className="mb-4 mb-md-0" >
                  <MDBCardBody  >
                    <p>סטטוס:</p>
                    <p>חולה עכשווי</p>
                  
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
               */}
            </MDBRow>
            {/* <MDBCard>
          <MDBBtn className="mb-4" onClick={()=>{props.history.push("/ProfilePage")}} >הוספת חיסון</MDBBtn>
          </MDBCard> */}

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
