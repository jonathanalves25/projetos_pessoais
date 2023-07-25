import { Button } from '../../components/Button';
import { Highlight } from '../../components/Highlight';
import {Container, HeaderAreaIcons, HeaderIcon, HeaderIconImg, HeaderIconAvatar, SnackPercentageArea, TextLight, FoodItensArea} from './styles';
import logo from '../../assets/Logo.png'
import avatar from '../../assets/avatar.png'
import { useState } from 'react';
import { FlatList } from 'react-native';
import { DailySnacksItem } from '../../components/DailySnacksItem';

export const Home = () => {

    const [dailySnacks, setDailySnacks] = useState<string[]>(['07/07/23']);

    return(
        <Container>
            <HeaderAreaIcons>
                <HeaderIcon>
                    <HeaderIconImg source={logo}/>
                </HeaderIcon>
                
                <HeaderIconAvatar source={avatar}/>     
            </HeaderAreaIcons>

            <SnackPercentageArea>
                <Highlight title="90,86%" subtitle="das refeições dentro da dieta"/>
            </SnackPercentageArea>
            <TextLight>Refeições</TextLight>
            <Button text="Nova refeição" shownIcon={true}/>

            <FoodItensArea>
                <FlatList
                    data={dailySnacks}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <DailySnacksItem daily={item}/>
                    )}
                />
            </FoodItensArea>
        </Container>
    )
}