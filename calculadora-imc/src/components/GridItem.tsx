import { Level } from "../helpers/imc"
import upImage from '../assets/up.png';
import downImage from '../assets/down.png';

type Props = {
    item: Level;
}

export const GridItem = ({item}:Props) => {
    return (
        <div className="rounded-3xl text-white flex flex-1 justify-center items-center flex-col" style={{backgroundColor: item.color}}>
            <div className='w-16 h-16 rounded-3xl flex justify-center items-center bg-slate-400 opacity-30'>
                <img src={item.icon === 'up' ? upImage : downImage} alt='up' width="30"/>
            </div>

            <div className="font-bold text-xl p-2">
                {item.title}
            </div>

            <div className="text-sm text-blue-200">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}