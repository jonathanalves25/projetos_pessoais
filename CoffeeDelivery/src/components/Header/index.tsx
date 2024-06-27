import { HeaderContainer, Logo, ButtonArea, LocationButton, CartButton } from "./styles";
import logo from '../../assets/Logo.svg'
import locationIcon from '../../assets/locationIcon.svg'
import Cart from '../../assets/Cart.svg'

export function Header() {
    return(
        <nav>
            <HeaderContainer>
                <Logo src={logo}/>
                <ButtonArea>
                    <LocationButton>
                        <img src={locationIcon}/>
                        Camboriú, SC
                    </LocationButton>
                    <CartButton>
                        <img src={Cart}/>
                    </CartButton>

                </ButtonArea>
            </HeaderContainer>
        </nav>
    )
}