import React,{useState} from 'react';
import img from "../images/pricingg.jpg"
import Back from "../common/Back"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./contact.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

const [Name,setName] = useState('')
const [Email,setEmail] = useState('')
const [Phone,setPhone] = useState('')
const [Message,setMessage] = useState('')

const submit = async(e) => {
    e.preventDefault()

    try{
        // alert("Submitted")

        toast.success('successful')
        // send data frontend to backend
        await axios.post("http://localhost:3797/", {
            Name,
            Email,
            Phone,
            Message
    })

  }
  catch(err){
    console.log(err);
  }
}
  return (
        <>
      <section className='contact mb'>
          <form action='POST'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
         <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        
        <div className='field'>
            <h2 className='header'>Contact Us</h2>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            onChange={(e) => {setName(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            defaultValue=""
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone"
            defaultValue=""
            onChange={(e) => {setPhone(e.target.value)}}
          />
         <TextField
            required
            style={{width:"785px"}}
            id="outlined-multiline-static"
            multiline
            rows={5}
            label="Message"
            defaultValue=""
            onChange={(e) => {setMessage(e.target.value)}}
          />
          <button className='btn1' onClick={submit} style={{margin:"20px 0 20px 10px"}}>Submit</button>
        </div>
        </Box>
        </form>
      </section>
    </>
  );
}

export default Contact;
