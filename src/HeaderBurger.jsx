import image from './assets/logo1-removebg-preview-smaller.png'
import burger from './assets/burger.png'
import BurgerMenu from './BurgerMenu'

function HeaderBurger(props){

    const showList = () => {
        const changeDisplay = document.querySelector(".BurgerMenu");
        if(changeDisplay.classList.contains("BurgerMenu_displayNone")){
            changeDisplay.classList.remove("BurgerMenu_displayNone");
        }
        else {
            changeDisplay.classList.add("BurgerMenu_displayNone");
        }
    }
    
    return (
        <>
            <div className="logo"><a href="index.html"><img className="logo_zdj" src={image} /></a></div>
    
            <div className="interactive">
                <div className="info"><a href="contact.html"><button>Contact</button></a></div>
                <div className="info"><a href="info.html"><button>Info</button></a></div>
                <div className="burger"><button onClick={showList}><img className="burgerIMG" src={burger}></img></button></div>
            </div>
            <BurgerMenu list={props.list}/>
        </>
    )

}

export default HeaderBurger