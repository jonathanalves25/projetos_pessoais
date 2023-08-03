import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import {Center, ScrollView, VStack, Skeleton, Text, Heading, useToast} from 'native-base';
import {useState} from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FileInfo } from "expo-file-system";

const PHOTO_SIZE = 33;

export const Profile = () => {

    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/jonathanalves25.png');
    const toast = useToast();

    const handleUserPhotoSelect = async () => {
        setPhotoIsLoading(true)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
                selectionLimit:1,
            });
            if (photoSelected.canceled) return;
            
            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo
                if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        title: 'Essa imagem é muito grande, Escolhe uma de até 5MB.',
                        placement: 'top',
                        bgColor: 'red.500',
                    })
                }
                setUserPhoto(photoSelected.assets[0].uri);
            }
            
        } catch(error) {

        } finally {
            setPhotoIsLoading(false);
        }

    }
    return(
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
            <ScrollView contentContainerStyle={{ paddingBottom: 36}}>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton 
                                w={PHOTO_SIZE} 
                                h={PHOTO_SIZE} 
                                rounded="full"
                                startColor="gray.500"
                                endColor="gray.400"
                            />
                        :
                            <UserPhoto
                                source={{uri: userPhoto}}
                                alt="foto do usuario"
                                size={PHOTO_SIZE}
                            />

                    }
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar foto    
                        </Text>    
                    </TouchableOpacity> 

                    <Input 
                        placeholder='Nome'
                        bg="gray.600"
                    /> 
                    <Input 
                        placeholder='E-mail'
                        bg="gray.600"
                        isDisabled
                    />     
                

                    <Heading color="gray.200" fontFamily="heading" fontSize="md" alignSelf="flex-start" mb={2} mt={12}>
                        Alterar senha
                    </Heading>
                    <Input
                        bg="gray.600"
                        placeholder='Senha antiga'
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder='Nova senha'
                        secureTextEntry
                    />

                    <Input
                        bg="gray.600"
                        placeholder='Confirme a nova senha'
                        secureTextEntry
                    />

                    <Button 
                        title="Atualizar"
                        mb={4}
                    />
                </Center>

            </ScrollView>
        </VStack>
    )
}