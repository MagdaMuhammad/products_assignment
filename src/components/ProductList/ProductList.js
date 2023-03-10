import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as ProductAPI from '../ProductAPI';

// import Header from '../UI/Header';
import Product from './Product';
import './ProductList.css';


class ProductList extends Component {

    state = {
        products: [],
        skus: [],
        selected: []
    }

    componentDidMount(){
        ProductAPI.getAll()
        .then((products)=>{
            this.setState(()=>({
                products: products.data,
                skus: products.data.map(pro => pro.SKU),
                selected: []
            }))
        })
    }

    checkboxChangeHandler = (id) => {
        let selectedArr = this.state.selected;
        selectedArr.includes(id) ? selectedArr = selectedArr.filter( item => item !== id ) : selectedArr.push(id) ;

        this.setState(()=>({
            selected: selectedArr
        }))
    }

    MassDeleteHandler = e => {
        e.preventDefault();
        let deletedList = this.state.selected;

        if(deletedList.length === 0) return;

        ProductAPI.massDelete(deletedList.join())
        .then(()=>{
            let products = this.state.products;
            let newProducts = products.filter( product => ! deletedList.includes(product.id) );
            let newskus     = products.map( product => product.SKU );

            this.setState(()=>({
                products: newProducts,
                skus: newskus,
                selected: []
            }))
        })
    }


    render(){

        return(
            <>
                <div className='header'>
                    <h2>Products List</h2>
                    <div className="buttonSet">
                        <Link to="/products_assignment/add-product" state={{ skus: this.state.skus }}>
                            <button type="button"> 
                                ADD 
                            </button>
                        </Link>
                        <button onClick={this.MassDeleteHandler} type="button" id="delete-product-btn">
                            MASS DELETE 
                        </button>
                    </div>
                </div>
                <div className='productContainer'>
                    <ul>
                        { this.state.products.length !==0 ? 
                            this.state.products.map( product => <Product key={product.SKU} product={product} onCheck={this.checkboxChangeHandler} /> ) :
                            <p className='empty'> There are no products to show </p>
                        }
                    </ul>
                </div>
            </>
        )    
    }
}

export default ProductList;