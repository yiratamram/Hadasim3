import produce from 'immer';

const UsersInitialState={
    user:{},
    users:[],  
    isMenneger:0,
}


export const UsersReducer=produce((state,action)=>{
    switch(action.type)
    {
         case "GET_USER_BY_ID":state.user=action.paylod;break;
         case "ADD_USER":state.users.push(action.payload);break;
         case "GET_ALL_USERS":state.users.push(action.payload);break;
         case "UPDATE_USER":state.users.push(action.payload);break;
         case "IS_MENNEGER":state.isMenneger=action.payload;break;
         case "IF_SICK":state.isMenneger=action.payload;break;
    
         
    }
},UsersInitialState)
