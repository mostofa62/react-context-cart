import { Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';
const Header  = (props)=>{

    return <Fragment>
        <header className={classes.header}>
            <h1>IEDCR MEALS</h1>
            <HeaderCardButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="One dish managment" />
        </div>
    </Fragment>;
};

export default Header; 