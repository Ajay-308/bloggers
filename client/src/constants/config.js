export const API_NOTIFICATIONS_MESSAGES={
    loading:{
        title:'Loading...',
        message:'Data is being loaded,pls wait',
    },
    success:{
        title:'Success',
        message:"Data successfully loaded",
    },
    responseFailure:{
        title:'Error',
        message:"An error occured while fetching response from server. pls try again",
    },
    responseFailure:{
        title:'Error',
        message:"An error occured while parsing the data",
    },
    networkError:{
        title:'Error',
        message:'unable to connect with server. Please check your connectivity'
    }

}

//API SERVICE CALL
//SAMPLE REQUEST
//intercepter benefits is that we don't need to append data again and again in userSignup url it get automatically

//NEED SERVICE CALL:{url:'/' , method:'POST/GET/DELETE/PUT', params:true/false , query: true/false}
export const SERVICE_URL={
    userSignup:{url:'/signup',method:'POST'}
}                                                        