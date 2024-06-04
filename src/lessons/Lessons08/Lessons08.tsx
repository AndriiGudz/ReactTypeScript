import {
    Lessons08Component, 
    BoxInfo, 
    ButtonStyleComponent, 
    ButtonBox
} from './styles'

function Lessons08() {
const typeButton = true

    return (
        <Lessons08Component>
            <BoxInfo>My First styled component</BoxInfo>
            <BoxInfo>My First styled component</BoxInfo>
            {/* <ButtonStyleComponent mainButton = {typeButton}>Custom Button</ButtonStyleComponent> */}
            <ButtonBox>
            <ButtonStyleComponent>Custom Button Main</ButtonStyleComponent>
            <ButtonStyleComponent mainButton>Custom Button Main</ButtonStyleComponent>
            </ButtonBox>
        </Lessons08Component>
    )
}

export default Lessons08