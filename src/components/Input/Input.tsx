import {InputContainer, InputField, LabelComponent} from './styles'
import { InputProps } from './types'

function Input({ name, type = 'text', placeholder, label }: InputProps) {
  return (
    <InputContainer>
      <LabelComponent>{label}</LabelComponent>
      <InputField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default Input
