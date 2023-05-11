import axios from "axios"
import { useDispatch } from "react-redux";
import { GetUserById,AddUser,GetAllUsers,UpdateUser,IfSick} from "./UserAction";
export const UsersURL="https://localhost:44315/api/Users/"

 

 
export const getUserById = async (dispatch,id) => {
    
    const userPromise = axios.get(UsersURL+"GetUserById/"+id);
    const response = await userPromise;
    const user = response.data;
    console.log(user);
    dispatch(GetUserById(user))
    return user;

}
export const ReadMenegerPassword = async () => {
    
    const menegerPromise = axios.get(UsersURL+"ReadMenegerPassword/");
    const response = await menegerPromise;
    const meneger= response.data;
    return meneger;

}

export const addUser=async(dispatch,idUser,privateName,familyName,cityAdress,streetAdress,numberAdress,dateOfBirth,phone,mobilePhone,imageProfile)=>
  {   
    debugger
       try{
           
       const newUser={idUser:idUser,privateName:privateName,familyName:familyName,cityAdress:cityAdress,streetAdress:streetAdress,numberAdress:numberAdress,dateOfBirth:dateOfBirth,phone:phone,mobilePhone:mobilePhone,imageProfile:imageProfile};
       const UserPromise =await axios.post(UsersURL+"AddUser",newUser);
       console.log(UserPromise);
       await  dispatch(AddUser(UserPromise.data));
       return UserPromise.data;
       }
       catch(e){
           console.log(e);
       }
       
    }
    export const getAllUsers=async(dispatch)=>
{
    const userPromise=axios.get(UsersURL+"GetAllUsers");
     const response=await userPromise;
     const users=response.data;
     dispatch(GetAllUsers(users))
     return users;
 }


 export const ifSick = async (id) => {
    
    const userPromise = axios.get("https://localhost:44315/api/Users/IfSick?id="+id);
    const response = await userPromise;
    const user = response.data;
    
    console.log(user);
    return user;

}
 

 export const updateUser = async (dispatch,idUser,privateName,familyName,cityAdress,streetAdress,numberAdress,dateOfBirth,phone,mobilePhone,imageProfile,dateOfPositiveResult,dateOfRecovery) => {
    debugger
    if(dateOfPositiveResult=="0001-01-01T00:00:00"){
        dateOfPositiveResult=null
    }
    if(dateOfRecovery=="0001-01-01T00:00:00"){
        dateOfRecovery=null
    }
    const updateUser  = {idUser:idUser,privateName:privateName,familyName:familyName,cityAdress:cityAdress,streetAdress:streetAdress,streetAdress:streetAdress,numberAdress:numberAdress,dateOfBirth:dateOfBirth,phone:phone,mobilePhone:mobilePhone ,imageProfile:imageProfile,dateOfPositiveResult:dateOfPositiveResult,dateOfRecovery:dateOfRecovery};
    try {
        const userPromise = await axios.put(UsersURL + "UpdateUser", updateUser);
        await dispatch(UpdateUser(userPromise.data));
        return userPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}

export const UpdateImage=async (idUser,name)=>{
    try {

        const PicturePromise1 = axios.put(`https://localhost:44315/api/Users/${idUser}/${name}` );
        // const PicturePromise1 = axios.put("https://localhost:44315/api/Users/UpdateImage/322461302/profile2.png" );
        // const userPromise=axios.get("https://localhost:44315/api/Users/"+"GetAllUsers");

        const response = await PicturePromise1;
         const Picture = response.data;
        alet("תמונה הועלתה בהצלחה");
      }

      catch {
        alert("שגיאה")
      }
}

  

