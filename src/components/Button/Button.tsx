import './styles.css'
import { ButtonProps } from './type'

function Button({ name, type = 'button', onClick, disabled = false }: ButtonProps) {
  return (
    <button className="btn-component" type={type} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button
