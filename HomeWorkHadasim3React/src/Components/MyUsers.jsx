import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBCard } from 'mdb-react-ui-kit';
import { getAllUsers } from '../Redux/Users/UsersThunk';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function MyUsers(props) {
    const history=useHistory();
    const dispatch = useDispatch();
    const [users, setUsers] = useState(useSelector((state) => { return state.users }))
    const [date, setDate] = useState(null);
    useEffect(async () => {
     
    let U = await getAllUsers(dispatch);
    
    if(U){
        
        setUsers(U)
    } 
    else{
        alert("הייתה שגיאה בהבאת הנתונים")
    }   
    }, [])



  return (
    <>
    <h1 style={{color:"black"}}>חברי קופת החולים</h1>
    <MDBCard style={{opacity:"0.7", margin:"0 auto"}} className="col-11">
    <MDBTable align='middle'>
 {users === undefined?<></> :
      <MDBTableHead>
        <tr>
         <th scope='col'>שם מלא</th>
          <th scope='col'>עיר</th>
          <th scope='col'>רחוב</th>
          <th scope='col'>מספר</th>
          <th scope='col'>תאריך לידה</th>
          <th scope='col'>טלפון</th>
          <th scope='col'>פלאפון</th>
          <th scope='col'>פרטים מלאים</th>
        </tr>
      </MDBTableHead>
}
{users === undefined ? <h3>wait...</h3> :
 users.map((f, i) =>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={f.imageProfile!=null?`https://localhost:44315//images/${f.imageProfile}`:"https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530__340.png"}
                                alt=''
                style={{ width: '60px', height: '60px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{f.privateName}</p>
                <p className='fw-bold mb-1'>{f.familyName}</p>
                
              </div>
            </div>
          </td>
          <td>
            <p className='text-muted mb-0'>{f.cityAdress}</p>
          </td>
          <td>
            <p className='text-muted mb-0'>{f.streetAdress}</p>
          </td>
          <td>
            <p className='text-muted mb-0'>{f.numberAdress}</p>
          </td>
          <td>
          <p className='text-muted mb-0'>{(new Date(f.dateOfBirth)).toLocaleDateString()}</p>
          </td>
          <td>
          <p className='text-muted mb-0'>{f.phone}</p>
          </td>
          <td>
          <p className='text-muted mb-0'>{f.mobilePhone}</p>
            
          </td>
          <td>
          <MDBBtn onClick={()=>{props.history.push(`/ProfilePage/${f.idUser}`)}} >לפרטים נוספים</MDBBtn>
      
          </td></tr>
      </MDBTableBody>
)}
    </MDBTable>
    </MDBCard>
  </>
  );
}

