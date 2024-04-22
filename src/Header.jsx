import image from './assets/logo1-removebg-preview-smaller.png'

function Header(){
    
    return (
        <>
            <div className="logo"><a href="index.html"><img className="logo_zdj" src={image} /></a></div>
    
            <div className="interactive">
                <div className="info"><a href="info.html"><button>Info</button></a></div>
            </div>
        </>
    )

}

export default Header