import './Header.css';

const Header = props => {

    return(
        <div className='header'>
            <h2>{props.title}</h2>
            <div className="buttonSet">
                {props.buttons.map( button => button.button )}
            </div>
        </div>
    ) 
}

export default Header;
