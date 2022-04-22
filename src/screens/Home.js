import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Container>
      <h1 className='at-3'>
        Notes
      </h1>
      <p> Please login to your account. If you don't have an account create one by clicking on "Register" </p>
      <Link to='/login'>Login</Link> <br /><br /> <span>Or</span> <br /><br />
      <Link to='/register'>Register with us</Link>

    </Container>
  )
}

export default Home