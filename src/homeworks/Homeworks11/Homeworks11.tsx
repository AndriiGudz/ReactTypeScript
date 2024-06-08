import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from 'components/Input/Input'
import { Homeworks11Component, EmployeeForm, TitleForm, TermErrors, TermsAccepted } from './styles'
import { EmployeeFormValues, EMPLOYEE_FORM_NAMES } from './types'
import Button from 'components/Button/Button'

function Homeworks11() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('Имя является обязательным')
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(50, 'Имя должно содержать максимум 50 символов'),

    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('Фамилия является обязательной')
      .max(15, 'Фамилия должна содержать максимум 15 символов'),

    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .required('Возраст является обязательным')
      .min(18, 'Возраст должен быть не меньше 18')
      .max(150, 'Возраст должен быть не больше 150'),

    [EMPLOYEE_FORM_NAMES.JOB_TITLE]: Yup.string()
      .max(30, 'Должность должна содержать максимум 30 символов')
      .notRequired(),

    [EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]: Yup.boolean()
      .oneOf([true], 'Вы должны принять условия использования')
      .required('Вы должны принять условия использования'),
  })

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.AGE]: '',
      [EMPLOYEE_FORM_NAMES.JOB_TITLE]: '',
      [EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Homeworks11Component>
      <EmployeeForm onSubmit={formik.handleSubmit}>
        <TitleForm>Employee Form</TitleForm>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          placeholder={'Имя'}
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          placeholder={'Фамилия'}
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          placeholder={'Возраст'}
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.JOB_TITLE}
          placeholder={'Должность'}
          value={formik.values[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
        />
        <TermsAccepted>
          <input
            type="checkbox"
            name={EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED}
            checked={formik.values[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor={EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED}>Принять правила использования</label>
          {formik.touched[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED] && formik.errors[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED] && (
            <TermErrors>{formik.errors[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]}</TermErrors>
          )}
        </TermsAccepted>
        <Button name="Создать" type="submit" />
      </EmployeeForm>
    </Homeworks11Component>
  )
}

export default Homeworks11
