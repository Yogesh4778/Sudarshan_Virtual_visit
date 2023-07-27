import React,{useState} from 'react';
import Box from '@mui/material/Box';
import img from "../images/pricingg.jpg"
import Back from "../common/Back"
import TextField from '@mui/material/TextField';
import "./feedback.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
    
const [Name,setName] = useState('')
const [Email,setEmail] = useState('')
const [Phone,setPhone] = useState('')
const [Visited,setVisited] = useState('')
const [Date,setDate] = useState('')
const [Feedback,setFeedback] = useState('')
const [Suggestion,setSuggestion] = useState('')
const [Rating,setRating] = useState('')
const [WantToVisit,setWantToVisit] = useState('')
const [Comment,setComment] = useState('')

const submit = async(e) => {
    e.preventDefault()

    try{
        alert("Submitted")

        // send data frontend to backend
        await axios.post("http://localhost:8010/", {
            Name,
            Email,
            Phone,
            Visited,
            Date,
            Feedback,
            Suggestion,
            Rating,
            WantToVisit,
            Comment

            // this msg goes to backend
        })
    }
    catch(err){
        console.log(err);
    }
}

    return ( 
      <section>
        <form action='POST'>
        <Back name='Give us Feedback' title='We Give our best for you' cover={img} />
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        
        <div className='field'>
            <h2 className='header'>FeedBack Form</h2>
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
            label="Phone Number"
            defaultValue=""
            onChange={(e) => {setPhone(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Visited Place"
            defaultValue=""
            onChange={(e) => {setVisited(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            type='date'
            label=""
            defaultValue=""
            onChange={(e) => {setDate(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Feedback"
            defaultValue=""
            onChange={(e) => {setFeedback(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Suggestion"
            defaultValue=""
            onChange={(e) => {setSuggestion(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Overall Rating"
            defaultValue="0/10"
            onChange={(e) => {setRating(e.target.value)}}
          />
          <TextField
            required
            id="outlined-required"
            label="Want to visit"
            defaultValue=""
            onChange={(e) => {setWantToVisit(e.target.value)}}
          />
          <TextField
            required
            style={{width:"785px"}}
            id="outlined-multiline-static"
            multiline
            rows={5}
            label="Comments"
            defaultValue=""
            onChange={(e) => {setComment(e.target.value)}}
          />
          <button className='btn1' onClick={submit} style={{margin:"20px 0 20px 10px"}}>Submit</button>
        </div>
        </Box>
        </form>
        </section>
     );
}
 
export default FeedbackForm;