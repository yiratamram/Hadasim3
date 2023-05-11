import React, { Component, useState } from 'react';
import {  MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useDispatch } from 'react-redux';
import {getUserById} from '../Redux/Users/UsersThunk'
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import {ReadMenegerPassword} from '../Redux/Users/UsersThunk'
import { isMenneger } from '../Redux/Users/UserAction';
import {
  BrowserRouter,
  withRouter
} from "react-router-dom";


 export default  withRouter(function Mannege(props){
  let User = useSelector((store) => {return store.Users.user }); 
  const [modal14,setModal14]=useState(true);
  const history=useHistory();
  const dispatch=useDispatch();
   useEffect(async () =>{
    if(!User){
       alert("לקוח יקר הינך רשום כבר במערכת");
       setModal14(!modal14);
     }
     },[])
  
  const ModalPage = async(dispatch) => { 
     debugger
    const IdUser = document.getElementById("IdUser").value;
    const Password = document.getElementById("Password").value;
    const user =  await  getUserById(dispatch,IdUser);
    const password =  await ReadMenegerPassword()
    console.log(user)

  if (user!=""&&password==Password) 
  {
    dispatch(isMenneger(1));
    alert("ברוך הבא המנהל: "+user.privateName);
    setModal14(!modal14);
    return user;
  }
  else{
   {
     alert("אחד או יותר מן הנתונים שגוי אנא הקש שנית");
    
    return;
  }
}
  }

  return (
    <BrowserRouter>
      <MDBContainer>
        <MDBModal isOpen={modal14} toggle={()=>{setModal14(!modal14)}} centered>
          <MDBModalHeader toggle={()=>{setModal14(!modal14);}}>התחברות</MDBModalHeader>
          <MDBModalBody>
          <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
       
        <div className="grey-text">
       <label>תעודת זהות </label>
          <MDBInput  id="IdUser" icon="user" group type="text" validate error="wrong"
            success="right" />
            <label> סיסמת מנהל </label>
          <MDBInput  id="Password" icon="user" group type="password" validate error="wrong"
            success="right" />
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary"  onClick={()=>ModalPage(dispatch)}>התחבר</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      </BrowserRouter>
    );
  })

 
  