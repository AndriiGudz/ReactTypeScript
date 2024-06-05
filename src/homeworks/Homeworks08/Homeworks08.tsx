import Button from "components/Button/Button";
import {Lesson08, ButtonBox} from './styles'
import Input from "components/Input/Input";

function Homeworks08() {
    return (
        <Lesson08>
            <ButtonBox>
            <Button name = 'Aktiv button' type="button" disabled = {false} />
            <Button name = 'Disable button' type="button" disabled />
            </ButtonBox>
        </Lesson08>
    ) 
}

export default Homeworks08