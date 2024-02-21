import React from "react";
import "../../../style/extend.scss";
import {Link} from "react-router-dom";
import styled from "styled-components";
import useAdminApi from "../../../store/admin/adminApi";

function HeaderNavMenu() {
    const {dataConfig} = useAdminApi();
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
        <div className="hd-nav-menu">
            <ul>
                <li>
                    <Link to="/account">
                        <HeaderLink>
                            <span>Account</span>
                        </HeaderLink>
                    </Link>
                </li>
                <li>
                    <Link to="/wish_list">
                        <HeaderLink>
                            <span>Wish List</span>
                        </HeaderLink>
                    </Link>
                </li>
                <li>
                    <Link to="/auth">
                        <HeaderLink>
                            <span>Sign In</span>
                        </HeaderLink>
                    </Link>
                </li>
                {/* <li><Link to='/sign_up'><span>Sign Up</span></Link></li> */}
                <li>
                    <Link to="/back_to_website">
                        <HeaderLink>
                            <span>Back to Website</span>
                        </HeaderLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderNavMenu;
