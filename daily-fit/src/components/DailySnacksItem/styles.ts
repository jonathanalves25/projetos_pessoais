import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex:1;
    width:100%;
    margin-bottom:20px;
`;

export const DayText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const DailySnacksArea = styled.TouchableOpacity`
    height:50px;
    width:100%;
    margin: 5px 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    flex-direction: row;

    border-radius:5px;
    border:2px solid;
    border-color:${({theme}) => theme.COLORS.GRAY_5};
`;

export const DailySnackSeparator = styled.View`
    width:2px;
    height:30px;
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
`;

export const DailySnackHour = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XSM}px;
    padding-right: 8px;
`;

export const DailySnackName = styled.Text`
    flex:1;
    padding: 0 14px;
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_2};
`;

export const DailySnackStatus = styled.View`
    height:15px;
    width:15px;
    border-radius:8px;
    background-color:${({theme}) => theme.COLORS.GREEN_DARK};
`;