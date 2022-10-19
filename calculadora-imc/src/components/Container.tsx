import { useState } from 'react';
import {levels, calculateImc} from '../helpers/imc'
import {GridItem} from './GridItem'

export const Container = () => {

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if(heightField && weightField) {
            
        } else {
            alert('digite todos os campos')
        }
    }


    return (
   
        <div className="mx-auto flex max-w-4xl">
            <div className="flex-1 mr-8">
                <h1 className='text-3xl font-bold text-gray-800 mb-8'>Calcule o seu IMC.</h1>
                <p className='text-base mb-10 text-gray-400'>IMC é a sigla para Índice de Massa Corpórea, parametro adotado pela Organizacao Mundial de Saúde para calcular
                    o peso ideal de cada pessoa.
                </p>

                <input className='w-full mb-8 p-4 border-0 border-blue-200 outline-none border-b-2' type="number" value={heightField > 0 ? heightField : ''} placeholder="Digite a sua altura. Ex: 1.5 em metros" onChange={e => setHeightField(parseFloat(e.target.value))}   /> 
                <input className='w-full mb-8 p-4 border-0 border-blue-200 outline-none border-b-2' type="number" value={weightField > 0 ? weightField : ''} placeholder="Digite o seu peso. Ex: 75.3 em quilos" onChange={e => setWeightField(parseFloat(e.target.value))}   /> 
                
                <button className='bg-blue-200 w-full mt-4 p-2 rounded text-white hover:bg-opacity-80 hover:ease-in' onClick={handleCalculateButton}>Calcular</button>
            </div>
            <div className="flex flex-1 ml-8">
                <div className='flex-1 grid grid-cols-2 gap-5'>
                    {levels.map((item, index) => (
                        <GridItem key={index} item={item}/>
                            
                    ))}
                </div>

            </div>
        </div>
    )
}