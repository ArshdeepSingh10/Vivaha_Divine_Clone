import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object({
  PhoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'), // Example of phone number validation
  Password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
    .required('Password is required'), // Example of password validation
});

const SignIn: React.FC = () => {
  return (
    <div className="gray-400">
      <div className="container">
        <div id="sign-in" className="d-flex justify-content-center align-items-center">
          <div className="bg-white rounded-2 col-4 shadow p-3">
            <div className="d-flex justify-content-center">
              <img src="/Image/SignIn.png" className="img-fluid signImage rounded-2" alt="SignIn" />
            </div>
            <div className="text-center fw-semibold">
              <p>Sign in to your account</p>
            </div>
            <div className="pb-3">
              <Formik
                initialValues={{
                  PhoneNumber: '',
                  Password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log(values);
                }}
              >
                {({ touched, errors, handleBlur, handleChange }) => (
                  <Form>
                    <div className="form-floating py-2">
                      <Field
                        type="text"
                        name="PhoneNumber"
                        id="PhoneNumber"
                        className={`form-control ${touched.PhoneNumber && errors.PhoneNumber ? 'is-invalid' : ''}`}
                        placeholder="PhoneNumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="PhoneNumber">Phone Number</label>
                      {touched.PhoneNumber && errors.PhoneNumber && (
                        <div className="invalid-feedback">{errors.PhoneNumber}</div>
                      )}
                    </div>

                    <div className="form-floating py-2">
                      <Field
                        type="password"
                        name="Password"
                        id="Password"
                        className={`form-control ${touched.Password && errors.Password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="Password">Password</label>
                      {touched.Password && errors.Password && (
                        <div className="invalid-feedback">{errors.Password}</div>
                      )}
                    </div>

                    <input
                      type="submit"
                      value="LOG IN"
                      id="submit"
                      className="form-control btn primary-red-bg text-white mt-2"
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="d-flex flex-column text-center gap-2">
              <Link to="/sign-up" className="primary-red text-decoration-none fw-semibold">
                I forgot my password
              </Link>
              <Link to="/sign-up" className="primary-red text-decoration-none fw-semibold">
                Register a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
