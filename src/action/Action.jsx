export const increment=()=>{
    return {
        type:"INCREMENT"
        
    }
}

export const decreament=()=>{
    return {
        type :"DECREAMENT"
    }
}

export const bhej=(data)=>{
    return {
      type:"SEND",
      payload:{
        // id:new  Date().getTime().toString(),
        data:data
      }
      
    }
}

export const Khana=(data)=>{
    return {
         type:"KHARIYAT",
         payload:{
            id:new Date().getTime().toString(),
            data:data
    }
}}

export const del=(id)=>{
    return {
        type: "DELETE",
        id
    }
}