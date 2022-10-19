export type Level = {
    title: string;
    color: string;
    icon: string;
    imc: number[];
    yourImc?: number;
}

export const levels:Level[] = [
    {title: 'Magreza', color: '#cecece', icon: 'down', imc: [0, 18.5]},
    {title: 'Normal', color: '#86efac', icon: 'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso', color: '#eab308', icon: 'down', imc: [25, 30]},
    {title: 'Obesidade', color: '#f87171', icon: 'down', imc: [30.1, 99]},
];

export const calculateImc = (height: number, weight:number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            levels[i].yourImc = imc;
            return levels[i]
        }
    }
}