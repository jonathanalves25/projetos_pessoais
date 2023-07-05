import {Container, TextButton, AddIcon} from './styles';


type Props = {
    text:string;
    shownIcon?: boolean;
}

export const Button = ({text, shownIcon}: Props) => {
    return(
        <Container>
            {shownIcon ? <AddIcon/> : ''}
            
            <TextButton>{text}</TextButton>
        </Container>
    )
}