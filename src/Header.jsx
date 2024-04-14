import image from './assets/images.png'

function Header(){
    
    return (
        <div className="header">
            <div className="logo"><a href="index.html"><img className="logo_zdj" src={image} /></a></div>
    
            <div className="interactive">
                <div className="about"><a href="about.html"><button>about</button></a></div>

                <div className="info"><a href="info.html"><button>info</button></a></div>
            </div>
        </div>
    )

}

export default Header