'use client'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import './RegisterForm.css'

interface FormValues {
	username: String
	email: String
	password: String
	confirmPassword: String
}

const emailError = 'Please enter a valid email address'
const validationSchema = yup.object({
	username: yup.string().min(3).max(17).required('Please enter a username'),
	email: yup.string().email(emailError).required(emailError),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Please enter a password'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password')
})

const initialValues: FormValues = {
	username: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const RegisterForm = () => {
	const handleSubmit = (
		values: FormValues,
		{ setSubmitting }: FormikHelpers<FormValues>
	) => {
		console.log(values)
		setSubmitting(false)
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div id='register-form'>
						<h3 id='register-form-header'>League Buddy Registration</h3>
						<div id='register-form-inputs'>
							<div className='register-form-input'>
								<Field
									className='register-field'
									type='text'
									id='username'
									name='username'
									placeholder='Username'
								/>
								<ErrorMessage name='username' component='span' />
							</div>
							<div className='register-form-input'>
								<Field
									className='register-field'
									type='text'
									id='email'
									name='email'
									placeholder='Email'
								/>
								<ErrorMessage name='email' component='span' />
							</div>
							<div className='register-form-input'>
								<Field
									className='register-field'
									type='password'
									id='password'
									name='password'
									placeholder='Password'
								/>
								<ErrorMessage name='password' component='span' />
							</div>
							<div className='register-form-input'>
								<Field
									className='register-field'
									type='password'
									id='confirmPassword'
									name='confirmPassword'
									placeholder='Confirm Password'
								/>
								<ErrorMessage name='confirmPassword' component='span' />
							</div>
						</div>

						<button id='register-btn' type='submit' disabled={isSubmitting}>
							Register
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default RegisterForm
