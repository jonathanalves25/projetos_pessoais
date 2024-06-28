import { CoffeeIntroArea, CoffeeIntroImg, CoffeeIntroItem, CoffeeIntroItemArea, CoffeeIntroText } from "./styles";
import coffeeIntroImg from '../../assets/coffeIntro.png'
import CartIntro from '../../assets/CartIntro.svg'
import BoxIcon from '../../assets/BoxIcon.svg'
import ClockIcon from '../../assets/ClockIcon.svg'
import CoffeeIcon from '../../assets/CoffeeIcon.svg'

export function Home() {
    return(
        <CoffeeIntroArea>
            <CoffeeIntroText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h2>

                <CoffeeIntroItemArea>
                    <CoffeeIntroItem>
                        <img src={CartIntro} />
                        <p>Compra simples e segura</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src={BoxIcon}/>
                        <p>Embalagem mantém o café intacto</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src={ClockIcon}/>
                        <p>Entrega rápida e rastreada</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src={CoffeeIcon}/>
                        <p>O café chega fresquinho até você</p>
                    </CoffeeIntroItem>
                </CoffeeIntroItemArea>
            </CoffeeIntroText>
            <CoffeeIntroImg>
                <img src={coffeeIntroImg} alt="imagem de um copo de café" />
            </CoffeeIntroImg>
        </CoffeeIntroArea>
    )
}