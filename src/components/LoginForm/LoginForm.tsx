import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import './styles.css'

function LoginForm() {
  return (
    <div className="login-form-container">
      <h2>Login form</h2>
      <div className='input-form'>
      <Input
        name="Email"
        type="text"
        placeholder="Enter your email"
        label="Email"
      />
      <Input
      name="Password"
      type="text"
      placeholder="Enter your password"
      label="Password"
      />
      </div>
      <Button name="Login" type='submit' />
    </div>
  )
}

export default LoginForm
