import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from 'components/Input/Input'
import {
  EmployeeFormComponent,
  EmployeeFormBox,
  TitleForm,
  TermErrors,
  TermsAccepted,
  Checkbox,
  CheckboxLabel
} from './styles'
import { EmployeeFormValues, EMPLOYEE_FORM_NAMES } from './types'
import Button from 'components/Button/Button'

function EmployeeForm() {
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
      .max(150, 'Возраст должен быть не больше 150')
      .test('check length', 'Max length 3 symbols', (value) => String(value).length <= 3),

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

  console.log(formik)

  return (
    <EmployeeFormComponent>
      <EmployeeFormBox onSubmit={formik.handleSubmit}>
        <TitleForm>Employee Form</TitleForm>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          placeholder={'Имя'}
          label="Имя"
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          placeholder={'Фамилия'}
          label="Фамилия"
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          placeholder={'Возраст'}
          label="Возраст"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.JOB_TITLE}
          placeholder={'Должность'}
          label="Должность"
          value={formik.values[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
        />
        <TermsAccepted>
          <Checkbox
            id="check-box"
            type="checkbox"
            name={EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED}
            checked={formik.values[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <CheckboxLabel htmlFor="check-box">Принять правила использования</CheckboxLabel>
          {formik.touched[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED] &&
            formik.errors[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED] && (
              <TermErrors>
                {formik.errors[EMPLOYEE_FORM_NAMES.TERMS_ACCEPTED]}
              </TermErrors>
            )}
        </TermsAccepted>
        <Button name="Создать" type="submit" />
      </EmployeeFormBox>
    </EmployeeFormComponent>
  )
}

export default EmployeeForm
