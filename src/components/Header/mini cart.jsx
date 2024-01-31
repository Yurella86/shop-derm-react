import React, {useContext, useEffect, useState} from "react";
import "../../style/extend.scss";
import CartPopup from "./Mini Cart/cartPopup";
import CartContext from "../../store/cartContext";
import useAdminApi from "../../store/admin/adminApi";
import styled from "styled-components";

function MiniCart() {
    const [dropdown, setDropdown] = useState(false);
    const [isItem, setIsItem] = useState(false);
    const [counterOfItems, setCounterOfItems] = useState(0);
    const cartCtx = useContext(CartContext);
    const {dataConfig} = useAdminApi();

    useEffect(() => {
        setIsItem(cartCtx.items.length > 0);
        setCounterOfItems(cartCtx.items.length);
    }, [cartCtx]);

    if (!dataConfig) {
        return <>loadding</>;
    }

    const HeaderLink = styled.span`
        color: ${dataConfig.headerLinkColor};
        &:hover,
        &.active {
            color: ${dataConfig.headerLinkColorHover};
        }
    `;

    return (
        <div
            className="mini-cart-wrapper"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            <div
                className={`mini-cart-icon ${
                    dropdown === true ? "active" : ""
                }`}
            >
                <div
                    className={`mini-cart-dropdown ${
                        dropdown === true ? "active" : ""
                    }`}
                >
                    <div className="mini-cart-dropdown-content">
                        {!isItem && <span>You have no items in cart</span>}
                        {isItem && <CartPopup />}
                    </div>
                </div>
                <HeaderLink>
                    <div className={`icon icon-shopping-cart`}></div>
                </HeaderLink>
                {counterOfItems > 0 && (
                    <div className="counter-cart">
                        <span>{counterOfItems}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MiniCart;
