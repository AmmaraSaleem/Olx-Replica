
const INITIAL_STATE ={
   users:[{
       name:"ammara",
       email:"ammarasaleem@gmail.com"

   }]
}

export default (state =INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SETDATA':
        return({
            ...state,
            users:[...state.users,action.users]
        })
    }
    return  state;
}
