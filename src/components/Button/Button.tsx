import './styles.css'
import { ButtonProps } from './type'

function Button({ name, type = 'button', onClick }: ButtonProps) {
  return (
    <button className="btn-component" type={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
