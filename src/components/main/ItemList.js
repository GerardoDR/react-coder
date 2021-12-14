import Item from "./Item.js"

const ItemList = (props) => {
    

    return (
    <>
        <Item listProds={props.prop1} onAdd={props.onAdd}/>
    </>
    )
}

export default ItemList