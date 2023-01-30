import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import * as ProductAPI from '../ProductAPI';

import './NewProduct.css';
import Header from '../UI/Header';
import Error from '../UI/Error';


const NewProduct = props => {

    const [type, setType] = useState();
    const [error, setError] = useState();   
    
    const navigate = useNavigate();
    const location = useLocation()
    const { skus } = location.state
  
    const SKURef   = useRef();
    const nameRef  = useRef();
    const priceRef = useRef();
    const typeRef  = useRef();
    const sizeRef  = useRef();
    const heightRef  = useRef();
    const widthRef   = useRef();
    const lengthRef  = useRef();
    const weightRef  = useRef();

    const typeSwitchHandler = e => {
        setType(e.target.value);
    }
    
    const saveNewProductHandler = e => {
        e.preventDefault();

        const SKUInput   = SKURef.current.value;
        const nameInput  = nameRef.current.value;
        const priceInput = priceRef.current.value;
        const typeInput  = typeRef.current.value;

        const sizeInput   = typeInput === "DVD" ? sizeRef.current.value : null;
        const heightInput = typeInput === "Furniture"? heightRef.current.value : null;
        const widthInput  = typeInput === "Furniture"? widthRef.current.value  : null;
        const lengthInput = typeInput === "Furniture"? lengthRef.current.value : null;
        const weightInput = typeInput === "Book"? weightRef.current.value : null;

        if(SKUInput.trim().length === 0 || nameInput.trim().length === 0 || priceInput.trim().length === 0 || 
        (typeInput === "DVD" && sizeInput.trim().length === 0) || 
        (typeInput === "Book" && weightInput.trim().length === 0) || 
        (typeInput === "Furniture" && (heightInput.trim().length === 0 || widthInput.trim().length === 0 || lengthInput.trim().length === 0)) ){
            setError(() => ({
                title: 'All fields are mandatory for submission!',
                msg: 'Please, submit required data',
            }))
            return;
        }

        //check on unique SKU
        if( skus.includes(SKUInput) ){
            console.log("not unique")
            setError(() => ({
                title: 'SKU Must be unique!',
                msg: 'Please, submit a unique SKU for your product',
            }))
            return;
        }

        let newProduct = {
            SKU: SKUInput,
            name: nameInput, 
            price: priceInput,
            type: typeInput,
            size: sizeInput,
            height: heightInput,
            width: widthInput,
            length: lengthInput,
            weight: weightInput
        };

        ProductAPI.addProduct(newProduct)
        .then((res) => {
            if(res.data)
            {
                navigate('/products_assignment');
            }
        })
    }

    const errorHandler = () =>{
        setError(null);
    }

    const buttons = [
        {button: <button onClick={saveNewProductHandler} type="submit" value="save"> Save</button>},
        {button: <Link to="/products_assignment"><button type="button" className='cancelBtn' value="cancel"> Cancel</button></Link>}
    ]    

    return(
        <>
            { error && <Error title={error.title} errorMSG={error.msg} clickHandler={errorHandler} />}

            <form id="product_form">
                <Header title="Add New Product" buttons={buttons} />
                <div className='form-container'>
                    <div className='form-section-input'>
                        <label>SKU</label>
                        <input type='text' id="sku" ref={SKURef} />
                    </div>
                    <div className='form-section-input'>
                        <label>Name</label>
                        <input type='text' id="name" ref={nameRef} />
                    </div>                
                    <div className='form-section-input'>
                        <label>Price ($)</label>
                        <input type='number' id="price" ref={priceRef} />
                    </div>
                    <div className='form-section-input'>
                        <label>Type Switcher </label>
                        <select id="productType" ref={typeRef} onChange={typeSwitchHandler}>
                            <option value="DVD" id="DVD">DVD</option>
                            <option value="Furniture" id="Furniture">Furniture</option>
                            <option value="Book" id="Book">Book</option>
                        </select>
                    </div>
                    { type === "Book" ? 
                        <div className='form-section-input'>
                            <label>Weight (KG)</label>
                            <input type="number" id="weight" ref={weightRef} />
                            <span className='desc'>*Please provide book weight in kilograms</span>
                        </div> :
                    ( type === "Furniture" ? 
                        <div>
                            <div className='form-section-input'>
                                <label>Height (CM)</label>
                                <input type="number" id="height" ref={heightRef} />
                            </div>
                            <div className='form-section-input'>
                                <label>Width (CM)</label>
                                <input type="number" id="width" ref={widthRef} />
                            </div>
                            <div className='form-section-input'>
                                <label>Length (CM)</label>
                                <input type="number" id="length" ref={lengthRef} />
                            </div>
                            <span className='desc'>*Please provide dimentions in H×W×L format</span>
                        </div> :
                        <div className='form-section-input'>
                            <label>size (MB)</label>
                            <input type="number" id="size" ref={sizeRef} />
                            <span className='desc'>*Please provide DVD size in MBytes</span>
                        </div> 
                    )}
                </div>
            </form>
        </>
    )
}

export default NewProduct;
