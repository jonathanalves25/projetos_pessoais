import styled from 'styled-components/native';
import {Plus} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity).attrs(({theme}) =>({
    
}))`
    height:50px;
    width:100%;
    border-radius:8px;
    margin-top:10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color:${({theme}) => theme.COLORS.GRAY_1};
`;

export const TextButton = styled.Text`
    color:${({theme}) => theme.COLORS.GRAY_7};
    font-size:${({theme}) => theme.FONT_SIZE.MD}px;
    font-family:${({theme}) => theme.FONT_FAMILY.REGULAR};
    padding-left:10px;
`;

export const AddIcon = styled(Plus).attrs(({theme}) => ({
    size: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_7
}))``;