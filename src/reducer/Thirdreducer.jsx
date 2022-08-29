const init=''
const pina=(state=init,action)=>{
switch(action.type){
    case "KHARIYAT" : 
        const {data}=action.payload;
        return {  
            data
            // "iii":state.lit,data
            
        }
  default :return state
}
}
export default pina;