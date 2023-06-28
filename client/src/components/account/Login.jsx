import { useState } from 'react';

import {Box,TextField,Button,styled,Typography} from '@mui/material'
import { API } from '../../service/api';

//all thing import from material ui
 //styling
 const Components=styled(Box)`
 width:400px;
 margin:auto;
 margin-top:5rem;
 box-shadow:7px 2px 7px 2px rgb(0 0 0/0.6)
 `;
 const Image=styled('img')({
    width:200,
    margin:'auto',
    display:'flex',
    padding:'50px',
 })

 const Wrapper=styled(Box)`
 padding:25px 35px ;
 display:flex;
 flex:1;
 flex-direction:column;
 space-around:20px;
 & > div,& > button{
    margin-top:20px;
 }
 `

const signupInitialValues={
    name:'',
    username:'',
    password:'',
}




const Login =()=>{
    const imageURL='https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_960_720.png';
   
   const[account,signupAccount]=useState('login')
   const[signUp, setSignup]=useState('signupInitialValues')
   
   const toggleSignup=()=>{
    account ==='signup'?signupAccount('login'): signupAccount('signup') //conditon check karga fir badlega apni state
   }
   
   const onInputChange=(e)=>{
    setSignup({...signUp, [e.target.name]:e.target.value})
   }
   
   const signupUser=async()=>{
      let response = await API.userSignup(signUp)
      return response.data
   }
   
    return (
        <Components>
            <Box>
               <Image src={imageURL} alt='login'/>
               {
                account==='login'?
                  <Wrapper>
                     <TextField  variant='standard' label="Enter user name" style={{marginTop:'-1rem',}}/>
                     <TextField variant='standard'label ="Enter Password"/>
                     <Button variant='contained' style={{backgroundColor:'#52b852',borderRadius:'6px'}}>Login</Button>
                     <Typography style={{textAlign:'center',marginTop:'1rem'}}>OR</Typography>
                     <Button style={{marginBottom:'2rem',color:'#52b852',borderRadius:'6px',boxShadow:'3px 2px 3px 2px rgb(0 0 0/0.4)'}} onClick={()=>toggleSignup()}>Create an account</Button>
                  </Wrapper>
                :

                   <Wrapper>
                      <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='name' label=" Name"style={{marginTop:'-1rem',}}/>
                      <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username' label =" User name"/> 
                      <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='password' label =" Password"/>
                      <Button  onClick={()=>signupUser()} style={{marginBottom:'2rem',color:'#52b852',borderRadius:'6px',boxShadow:'3px 2px 3px 2px rgb(0 0 0/0.4)'}}> signup</Button>
                     
                      <Typography style={{textAlign:'center',marginTop:'-9px'}}>OR</Typography>
                      <Button variant='contained' style={{backgroundColor:'#52b852',borderRadius:'6px'}}onClick={()=>toggleSignup()}>Already have an account</Button>
                   </Wrapper>
                } 
            </Box>
        </Components> 
    )
}

export default Login;