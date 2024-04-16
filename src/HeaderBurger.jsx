import image from './assets/logo1-removebg-preview-smaller.png'
import burger from './assets/burger.png'

function HeaderBurger(){
    
    return (
        <>
            <div className="logo"><a href="index.html"><img className="logo_zdj" src={image} /></a></div>
    
            <div className="interactive">
                <div className="info"><a href="info.html"><button>Contact</button></a></div>
                <div className="info"><a href="info.html"><button>Informations</button></a></div>
                <div className="burger"><button><img className="burgerIMG" src={burger}></img></button></div>
            </div>
        </>
    )

}

export default HeaderBurger