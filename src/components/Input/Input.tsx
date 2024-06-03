import './styles.css'
import { InputProps } from './types'

function Input({ name, type = 'text', placeholder, label }: InputProps) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        className="input-field"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
