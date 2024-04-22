function Panels(){
    
    const games = ["DND", "PathFinder", "StarFinder", "ZewCthulhu"];
    const list = games.map(game => <li><a href={game+".html"}><img src={"src/assets/"+game+"LOGO.png"}/><img className="displayOnBigScreen" src={"src/assets/"+game+"IMG.png"}/></a></li>);
    
    return (
        <ul className="panels">{list}</ul>
    )

}

export default Panels