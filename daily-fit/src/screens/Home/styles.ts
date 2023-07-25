import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex:1;
    padding:18px;
    margin-top: 30px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const TextLight = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_2};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}
`;

export const HeaderAreaIcons = styled.View`
    height:50px;
    justify-content:space-between;
    align-items:center;
    flex-direction: row;
`;

export const HeaderIcon = styled.View`
    width:100px;
    height:50px;
    border-radius:10px;
    justify-self:center;
`;

export const HeaderIconImg = styled.Image`
    height:50px;
    width:100%;
`;

export const HeaderIconAvatar = styled.Image`
    height:50px;
    width:50px;
`;

export const SnackPercentageArea = styled.TouchableOpacity`
    height:100px;
    margin:50px 0;
    border-radius:8px;
    justify-content:center;
    align-items:center;

    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;

export const FoodItensArea = styled.View`
    flex:1;
    margin-top:20px;
`;