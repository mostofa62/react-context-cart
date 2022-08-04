import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCardButton = props =>{
    const [btnIsHighLighted, setBtnIsHighlighted ] = useState(false);

    const cartCtx =   useContext(CartContext);

    
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump: ''}`;
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        };
    },[items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCardButton;