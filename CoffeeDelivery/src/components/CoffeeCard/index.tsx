import { CoffeeCardArea, CoffeeCardAreaButton, CoffeeCardButtonCart, CoffeeCardImg, CoffeeCardInput, CoffeeCardLabel, CoffeeCardPrice, CoffeeCardText, CoffeeCardTitle } from "./styles";


export function CoffeeCard() {
    return(
        <CoffeeCardArea>
            <CoffeeCardImg/>
            <CoffeeCardLabel>
                Tradicional
            </CoffeeCardLabel>
            <CoffeeCardTitle>
                Expresso Tradicional
            </CoffeeCardTitle>
            <CoffeeCardText>
                O tradicional café feito com água quente e graos moídos
            </CoffeeCardText>

            <CoffeeCardAreaButton>
                <CoffeeCardPrice>
                    R$ 9,90
                </CoffeeCardPrice>

                <CoffeeCardInput type="number" value={0}/>

                <CoffeeCardButtonCart>
                    <img src="" alt="" />
                </CoffeeCardButtonCart>
            </CoffeeCardAreaButton>
        </CoffeeCardArea>
    )
}