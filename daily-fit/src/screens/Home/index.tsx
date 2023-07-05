import { Button } from '../../components/Button';
import { Highlight } from '../../components/Highlight';
import {Container, HeaderAreaIcons, HeaderIcon, SnackPercentageArea, TextLight} from './styles';

export const Home = () => {
    return(
        <Container>
            <HeaderAreaIcons>
                <HeaderIcon/>
                <HeaderIcon/>
            </HeaderAreaIcons>
            <SnackPercentageArea>
                <Highlight title="90,86%" subtitle="das refeições dentro da dieta"/>
            </SnackPercentageArea>
            <TextLight>Refeições</TextLight>
            <Button text="Nova refeição" shownIcon={true}/>
        </Container>
    )
}