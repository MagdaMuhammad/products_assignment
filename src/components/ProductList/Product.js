
const Product = props => {

    return(
        <li>
            <input type="checkbox" className='delete-checkbox checkbox' onChange={props.onCheck(props.product.id)}/>
            <br />

            <p>{props.product.SKU}</p>
            <p>{props.product.name}</p>
            <p>{props.product.price} $</p>
            { props.product.type === "Book"? <p>Weight: {props.product.weight} KG</p> : 
                (props.product.type === "Furniture"? <p>Dimension: {props.product.height} × {props.product.width} × {props.product.length} cm</p> : 
                <p>size: {props.product.size} MB</p>
                ) 
            }
        </li>
    )
}

export default Product;