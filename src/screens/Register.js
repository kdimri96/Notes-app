import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';



const initialValues = {
    username: '',
    email: '',
    password: ''
}


const onSubmit = values => {
    
    console.log(values);
}

const validate = values => {
    let errors = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    return errors;
}


const Register = () => {
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
      })
     
  
        let navigate = useNavigate(); 
        const routeChange = () =>{ 
          let path = `/create`; 
          navigate(path);
        }
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <div className="base-container" >
                    <div className="header">Register</div>
                    <div className="content">

                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.username} placeholder="username" />
                                {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.username} />
                                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.password} placeholder="password" />
                                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button
                        
                        type="submit" 
                        onClick={routeChange} className="btn">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </Container>
    );
}

export default Register;