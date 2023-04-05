import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/redux';
import { loginUser } from '../../../data/slices/authSlice';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: LoginFormValues) => {
    // event.preventDefault();
    // login(email, password);
    dispatch(loginUser(values));
  };

  return (
    <div className="login-form-container">
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={`form-control ${
                  errors.password && touched.password ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Index;
