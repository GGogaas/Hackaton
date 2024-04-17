function Panels(){
    
    const games = ["DND", "PathFinder", "StarFinder", "ZewCthulhu"];
    const list = games.map(game => <li><a href={game+".html"}><img src={"src/assets/"+game+"LOGO.jpg"}/><img src={"src/assets/"+game+"IMG.jpg"}/></a></li>);
    
    return (
        <ul className="panels">{list}</ul>
    )

}

export default Panels