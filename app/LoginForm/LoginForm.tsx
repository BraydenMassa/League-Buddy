import Link from 'next/link'
import './LoginForm.css'

const LoginForm = () => {
	return (
		<form id='login-form'>
			<h3 id='login-form-header'>
				Log in to track data, save games, and make personalized notes to help
				with improvement.
			</h3>
			<div id='login-form-inputs'>
				<input
					className='login-form-input'
					type='text'
					placeholder='Username'
					autoComplete='off'
				/>
				<input
					className='login-form-input'
					type='password'
					placeholder='Password'
				/>
				<button id='login-btn'>Login</button>
			</div>
			<Link id='login-form-register-link' href='/pages/register'>
				New to League Buddy? Register here
			</Link>
		</form>
	)
}

export default LoginForm
