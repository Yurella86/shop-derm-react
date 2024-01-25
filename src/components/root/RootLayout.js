import React from "react";
import {Outlet} from "react-router";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import useAdminApi from "../../store/admin/adminApi";
import styled from "styled-components";

const RootLayout = () => {
    const {dataConfig} = useAdminApi();

    const GeneralStyle = styled.div`
    color: ${dataConfig ? dataConfig.textColor : "#000000"}
    };
`;
    return (
        <GeneralStyle>
            <Header />
            <Outlet />
            <Footer />
        </GeneralStyle>
    );
};

export default RootLayout;
