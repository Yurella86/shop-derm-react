import React from "react";
import "../../style/extend.scss";
import {Link} from "react-router-dom";
import useAdminApi from "../../store/admin/adminApi";
import styled from "styled-components";

function Compare() {
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

    const Link = styled.a`
        text-decoration: ${dataConfig.headerTextDecoration};
    `;
    return (
        <div className="item compare-wrapper">
            <div className="compare">
                <Link to="/compare">
                    <HeaderLink>
                        <span className="icon icon-arrow-repeat"></span>
                    </HeaderLink>
                </Link>
            </div>
        </div>
    );
}

export default Compare;
