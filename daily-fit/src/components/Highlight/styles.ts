import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_2};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;