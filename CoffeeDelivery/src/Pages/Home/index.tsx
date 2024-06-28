import { CoffeeIntroArea, CoffeeIntroImg, CoffeeIntroItem, CoffeeIntroItemArea, CoffeeIntroText } from "./styles";
import coffeeIntroImg from '../../assets/coffeIntro.png'

export function Home() {
    return(
        <CoffeeIntroArea>
            <CoffeeIntroText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h2>

                <CoffeeIntroItemArea>
                    <CoffeeIntroItem>
                        <img src="" alt="" />
                        <p>Compra simples e segura</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src="" alt="" />
                        <p>Embalagem mantém o café intacto</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src="" alt="" />
                        <p>Entrega rápida e rastreada</p>
                    </CoffeeIntroItem>
                    <CoffeeIntroItem>
                        <img src="" alt="" />
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