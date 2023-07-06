import { Container, DayText, DailySnacksArea, DailySnackHour, 
    DailySnackName, DailySnackStatus, DailySnackSeparator } from "./styles";

type Props = {
    daily: string;
}

export const DailySnacksItem = ({daily}:Props) => { 
    return(
        <Container>
            <DayText>{daily}</DayText>
            <DailySnacksArea>
                <DailySnackHour>
                    18:00
                </DailySnackHour>
                <DailySnackSeparator/>
                <DailySnackName>Sushi e bebida</DailySnackName>
                <DailySnackStatus/>
            </DailySnacksArea>

        </Container>
    )
}