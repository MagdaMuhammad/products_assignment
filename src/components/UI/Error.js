import ReactDOM from "react-dom" ;
import './Error.css';


const BackDrop = props => {
    return <div className='frame'  onClick={props.clickHandler}></div>
}


const ModalOverlay = props => {
    return (
        <div className="modal">
            <div className='modal-header'>{props.title}</div>
            <p>{props.errorMSG}</p>
            <div className="button" onClick={props.clickHandler} >Dismiss</div>
        </div>
    )
}

const Error = props => {

    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop clickHandler={props.clickHandler} /> ,
                document.getElementById('overlay-modals')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} errorMSG={props.errorMSG} clickHandler={props.clickHandler} />,
                document.getElementById('overlay-modals')
            )}
            
        </>   
    )

}

export default Error;