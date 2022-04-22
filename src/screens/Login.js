import React from "react";
import { Container } from 'react-bootstrap';
import '.././css/Login.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  }
  
  const onSubmit = values => {
    navigate('/create')
  }
  
  const validate = values => {
    let errors= {}
    if (!values.username) {
      errors.username = 'Required'
    } 
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors;
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  
  return (
    <Container>

      <form onSubmit={formik.handleSubmit}>
        <div className="base-container" >
          <div className="header">Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.username} placeholder="username"  />
                { formik.touched.username &&formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.password} placeholder="password" />
                { formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
        
      </form>
    </Container>
  );
}



export default Login;