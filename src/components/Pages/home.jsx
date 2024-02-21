import React, {useState} from "react";
import ProductTubs from "../Mine/Home Tabs/productTubs";
import Banners from "../Mine/Banners/banners";
import styled from "styled-components";
import useAdminApi from "../../store/admin/adminApi";

const HomeContent = () => {
    const [stateTab, setStateTab] = useState("bestsellers");
    const {dataConfig} = useAdminApi();

    if (!dataConfig) {
        return <>loadding</>;
    }

    const HomeTabs = styled.li`
        background-color: ${dataConfig.homeTabsBackground};
        color: ${dataConfig.homeTabsColor};
        text-transform: ${dataConfig.homeTabsTextTransform};
        font-size: ${dataConfig.homeTabsFontSize};

        &:hover,
        &.active {
            background-color: ${dataConfig.homeTabsBackgroundHover};
            color: ${dataConfig.homeTabsColorHover};
        }
    `;

    return (
        <div>
            <Banners />
            <section className="main-container horizontal-tab">
                <ul className="tabs-nav">
                    <HomeTabs
                        className={
                            stateTab === "bestsellers"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("bestsellers")}
                    >
                        <span>Bestsellers</span>
                    </HomeTabs>
                    <HomeTabs
                        className={
                            stateTab === "monthsSpecials"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("monthsSpecials")}
                    >
                        <span>This Month's Specials</span>
                    </HomeTabs>
                    <HomeTabs
                        className={
                            stateTab === "staffFavorites"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("staffFavorites")}
                    >
                        <span>Staff Favorites</span>
                    </HomeTabs>
                </ul>
                <hr />
                {stateTab && <ProductTubs categoryTub={stateTab} />}
            </section>
        </div>
    );
};

export default HomeContent;
