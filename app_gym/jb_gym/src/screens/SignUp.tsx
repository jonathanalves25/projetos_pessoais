import {VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';
import {useState} from 'react';
import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import {useForm, Controller} from 'react-hook-form';
import { api } from '@services/api';

import {useNavigation} from '@react-navigation/native';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

export const SignUp = () => {

    const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>();
    const toast = useToast();
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleSignUp = async ({name, email, password}: FormDataProps) => {
        try {
            const response = await api.post('/users', {name, email, password})
        } catch(error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possivel criar a conta. Tente novamente mais tarde.'

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            })
        }
       
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10}>
                <Image 
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando na bicicleta"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSvg/>
                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e o seu corpo
                    </Text>
                </Center>
                <Center>
                    <Heading color="gray.100" mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        rules={{
                            required:'Informe o nome.'
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input 
                                placeholder='Nome'
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required:'Informe o e-mail.',
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                message: 'E-mail inválido'
                            }
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input 
                                placeholder='E-mail'
                                onChangeText={onChange}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required:'Informe a senha.'
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input 
                                placeholder='Senha'
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry
                            />
                        )}
                    />                     

                    <Controller
                        control={control}
                        name="password_confirm"
                        rules={{
                            required:'Confirme a senha.'                            
                        }}
                        render={({field: {onChange, value}}) => (
                            <Input 
                                placeholder='Confirmar a Senha'
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType='send'
                            />
                        )}
                    />

                    <Button 
                        title="Criar e acessar" 
                        onPress={handleSubmit(handleSignUp)}
                    />
                    
                </Center>


                <Button 
                    title="Voltar para o login" 
                    variant="outline"
                    mt={12}
                    onPress={handleGoBack}
                />

            </VStack>
        </ScrollView>
    );
}