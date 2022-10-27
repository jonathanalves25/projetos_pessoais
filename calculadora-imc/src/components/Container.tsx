import { useState } from 'react';
import tw from 'tailwind-styled-components'
import {levels, calculateImc, Level} from '../helpers/imc'
import {GridItem} from './GridItem'
import TextPrimary from './TextPrimary'
import TextSecondary from './TextSecondary'
import Button from './Button'


export const Container = () => {

    const ContainerInside:any = tw.div`
        mx-auto
        flex 
        max-w-4xl
    `

    const LeftSide:any = tw.div`
        flex-1 
        mr-8
    `

    const ContainerGrid:any = tw.div`
        flex-1 
        grid
        grid-cols-2 
        gap-5
    `

    const RightSide:any = tw.div`
        flex 
        flex-1 
        ml-8
    `

    const InputField:any = tw.input`
        w-full 
        mb-8 
        p-4 
        border-0 
        border-blue-200 
        outline-none 
        border-b-2
    `

    const RightBig:any = tw.div`

    `

    const RightArrow:any = tw.div`

    `

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = () => {
        if(heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('digite todos os campos')
        }
    }

    return (
   
        <ContainerInside>
            <LeftSide>
                <TextPrimary text="Calcule o seu IMC."/>
                <TextSecondary text="
                    IMC é a sigla para Índice de Massa Corpórea, parametro adotado pela Organizacao Mundial de Saúde para calcular
                    o peso ideal de cada pessoa.
                "/>

                <InputField type="number" value={heightField > 0 ? heightField : ''} placeholder="Digite a sua altura. Ex: 1.5 em metros" onChange={(e: { target: { value: string; }; }) => setHeightField(parseFloat(e.target.value))} /> 
                <InputField type="number" value={weightField > 0 ? weightField : ''} placeholder="Digite o seu peso. Ex: 75.3 em quilos" onChange={(e: { target: { value: string; }; }) => setWeightField(parseFloat(e.target.value))} /> 
                
                <Button onClick={handleCalculateButton} text="Calcular"/>
            </LeftSide>
            <RightSide>
                {!toShow &&
                    <ContainerGrid>
                        {levels.map((item, index) => (
                            <GridItem key={index} item={item}/>
                            
                        ))}
                    </ContainerGrid>
                }

                {toShow &&
                    <RightBig>
                        <RightArrow>
                        </RightArrow>
                        <GridItem item={toShow}/>
                    </RightBig>
                }
            </RightSide>
        </ContainerInside>
    )
}