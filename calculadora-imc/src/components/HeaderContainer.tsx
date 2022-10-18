import poweredImage from '../assets/powered.png';


export const HeaderContainer = () => {
    return(
        <header>
            <div className="mx-auto max-w-4xl">
                <img className="my-8" src={poweredImage} alt="powered" width={150}/>
            </div>
        </header>
    )

}
