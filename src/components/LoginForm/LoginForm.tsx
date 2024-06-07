import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { LoginFormContainer, TitleForm, InputForm } from './styles'
import {LoginFormValues, LOGIN_FORM_NAMES} from './types'

function LoginForm() {

const schema = Yup.object().shape({
  [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required('Field email required').email('Field type email'),
  [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
    .required('Field password required')
    .typeError('Password must be number')
    // .min(10, 'Min 10') считывает минимальное значение
})

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: '',
      [LOGIN_FORM_NAMES.PASSWORD]: '',
    } as LoginFormValues,
    validationSchema: schema,
    // validateOnChange: true,
    // validateOnMount: true,
    onSubmit: (values) => {console.log(values);},
    
  })
  
  console.log(formik);
  

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <TitleForm>Login form</TitleForm>
      <InputForm>
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          // type="text" 
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          // type="text"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputForm>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  )
}

export default LoginForm
