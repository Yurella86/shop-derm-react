import React, {useState} from "react";
import ProductTubs from "../Mine/Home Tabs/productTubs";
import Banners from "../Mine/Banners/banners";
import styled from "styled-components";
import useAdminApi from "../../store/admin/adminApi";

const HomeContent = () => {
    const [stateTab, setStateTab] = useState("bestsellers");
    const {dataConfig} = useAdminApi();

    const TabsNav = styled.li`
        background-color: ${dataConfig ? dataConfig.accentPrimary : "#e60000"}
        };

        &:hover,
        &.active {
            background-color: ${
                dataConfig ? dataConfig.accentSecondary : "#e60000"
            };
        }
    `;

    return (
        <div>
            <Banners />
            <section className="main-container horizontal-tab">
                <ul className="tabs-nav">
                    <TabsNav
                        className={
                            stateTab === "bestsellers"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("bestsellers")}
                    >
                        <span>Bestsellers</span>
                    </TabsNav>
                    <TabsNav
                        className={
                            stateTab === "monthsSpecials"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("monthsSpecials")}
                    >
                        <span>This Month's Specials</span>
                    </TabsNav>
                    <TabsNav
                        className={
                            stateTab === "staffFavorites"
                                ? "tabs-state active"
                                : "tabs-state"
                        }
                        onClick={() => setStateTab("staffFavorites")}
                    >
                        <span>Staff Favorites</span>
                    </TabsNav>
                </ul>
                <hr />
                {stateTab && <ProductTubs categoryTub={stateTab} />}
            </section>
        </div>
    );
};

export default HomeContent;
