function BurgerMenu(props){

    const functcions = props.list;
    
    const list = functcions.map(fun => <a href={fun.name} target={fun.target}><li>{fun.display}</li></a>)
    return (
        <ul className="BurgerMenu BurgerMenu_displayNone">
            {list}
        </ul>
    )

}

export default BurgerMenu