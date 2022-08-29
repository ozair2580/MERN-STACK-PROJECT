

 const init=''
 //{
//     list:[]
// }
//{
//     lit:''
// }


const lebabu=(state=init,action)=>{
    switch(action.type){
        case "SEND" : 
        const {id,data}=action.payload;
        return {  data
            // ...state,
            // list:[...state.list,
            //     {
            //  // id:id,
            //   :data,
            // }]
            

          }
          
          case "DELETE" : 
          const newlist=state.list.filter((e)=>e.id!=action.id)
          return {  
              ...state,
              list:newlist,}

        
        default :return state
    }
}
export default lebabu;