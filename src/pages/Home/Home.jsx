import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { useState, useRef } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {

const [color, setColor]=useState();

const myDiv = useRef();

const handleColorChange = (e) => {
  setColor(e.target.value);
}

const handleClick = () => {
  myDiv.current.style.backgroundColor = color;
}


  return (
    <>
    <input type="text" onChange={handleColorChange}/>
    <button onClick={handleClick}>Change color</button>
    <div ref={myDiv} className='home-foo'>Home</div>
    <Link to={"/signin"}>
    <button>Go to sign in</button>
    </Link>
    <Link to={"/aboutus"}>
    <button>about us</button>
    </Link>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  
    
    </>
  )
}
