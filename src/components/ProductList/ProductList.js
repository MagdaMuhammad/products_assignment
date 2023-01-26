import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as ProductAPI from '../ProductAPI';

import Header from '../UI/Header';
import Product from './Product';
import './ProductList.css';


class ProductList extends Component {

    state = {
        products: [],
        selected: []
    }

    componentDidMount(){
        ProductAPI.getAll()
        .then((products)=>{
            this.setState(()=>({
                products: products.data,
                selected: []
            }))
        })
    }

    MassDeleteHandler = () => {

    }

    checkboxChangeHandler = (id) => {

    }


    render(){
        const buttons = [
            {button: <Link to="/add-product"><button type="button"> ADD</button></Link>},
            {button: <button onClick={this.MassDeleteHandler} type="button"> MASS DELETE</button>}
        ]

        return(
            <>
                <Header title="Products List" buttons={buttons} />
                <div className='productContainer'>
                    <ul>
                        { this.state.products.map( product => <Product key={product.SKU} product={product} onCheck={this.checkboxChangeHandler} /> ) }
                    </ul>
                </div>
            </>
        )    
    }
}

export default ProductList;