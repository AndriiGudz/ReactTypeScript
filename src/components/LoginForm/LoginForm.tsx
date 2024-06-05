import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import {LoginFormContainer, TitleForm, InputForm} from './styles'

function LoginForm() {
  return (
    <LoginFormContainer>
      <TitleForm>Login form</TitleForm>
      <InputForm>
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
      </InputForm>
      <Button name="Login" type='submit' />
    </LoginFormContainer>
  )
}

export default LoginForm
