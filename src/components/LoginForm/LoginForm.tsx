import './styles.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

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
