import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Signup = () => {
    return (
        <>
        <Navbar />
        <Formik initialValues={{
            fname:"",
            lname:"",
            email:"",
            password:"",
            cpassword:""
        }}
        validationSchema={Yup.object({
            fname: Yup.string()
            .required("First name is required")
            .min(2,"First name must be at least 2 characters")
            .max(30, "First name cannot be more than 30 characters"),

            lname:Yup.string()
            .required("Last name is required")
            .min(2,"Last name must be at least 2 characters")
            .max(30, "Last name cannot be more than 30 characters"),

            email:Yup.string()
            .required("Email is required")
            .email("invalid email format"),

            password:Yup.string()
            .required("Password is required")
            .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\@\!\_\-\$\%\^\&\*]).{8,30}$/,"passwrord must contain one lowercase, one uppercase, one number and one special character, must be at least 8 characters and maximum 30 characters."), 

            cpassword:Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref("password"),null],"Password and confirm password donot match")
        })}>

            
            <main className="container h-auto w-50 form-signin my-5 mx-auto border border-light p-5 shadow-lg rounded">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo512.png" alt="" width="57" height="57" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <Field type="text" name="fname" className="form-control" id="floatingFirstName" placeholder="First Name" />
                        <label for="floatingFirstName">First Name</label>
                    </div>
                    <div className="form-floating">
                        <Field type="text" name="lname" className="form-control" id="floatingLastName" placeholder="Last Name" />
                        <label for="floatingLastName">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="Date" className="form-control" id="floatingDate" placeholder="Date of Birth..." />
                        <label for="floatingDate">Date of Birth</label>
                    </div>
                    <div className="form-floating">
                        <div >
                            <label className='form-control'>Gender
                                <div className='d-flex ms-5'>
                                    <div class="form-check">
                                        <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </label> </div>
                    </div>

                    <div className="form-floating">
                        <Field type="email" className="form-control" name="email" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <Field type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <Field type="password" name="cpassword" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    
                    <ErrorMessage name='fname'>
                        {msg=><div style={{color:"red"}}>{msg}</div>}
                    </ErrorMessage>


                    <div className='text-center'>Already have an account. <Link to="/signin"> Sign in</Link></div>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
            </Formik>
            <Footer />

        </>
    )
}

export default Signup
