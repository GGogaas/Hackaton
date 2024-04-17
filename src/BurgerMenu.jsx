function BurgerMenu(props){

    const functcions = props.list;
    
    const list = functcions.map(fun => <a href={fun.name}><li>{fun.display}</li></a>)

    return (
        <ul className="BurgerMenu BurgerMenu_displayNone">
            {list}
        </ul>
    )

}

export default BurgerMenu