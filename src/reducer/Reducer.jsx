const init=0;
const counter=(stete=init,action)=>{
switch(action.type)
{                 
     case "INCREMENT" :
    
        if(stete<10){
           return stete+1
       }
    return stete


    case "DECREAMENT" : 
   
    if(stete>0){
       return stete-1
    }
    return stete
    
    default : return stete;
}
}
export default counter;