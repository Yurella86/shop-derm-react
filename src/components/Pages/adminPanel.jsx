import React from "react";
import useAdminApi from "../../store/admin/adminApi";

const AdminPanel = () => {
    const {dataConfig, updateData, handleUpdateState} = useAdminApi();

    const inputWidth = 10;

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData();
    };

    const handleApdateData = (e) => {
        handleUpdateState(e.target.name, e.target.value);
    };

    if (!dataConfig) {
        return <div>loading...</div>;
    }

    return (
        <div className="wrapper-admin">
            <form onSubmit={handleSubmit}>
                <h1>Admin panel</h1>
                <ol>
                    <li>
                        Accent colors:
                        <section className="accent-colors">
                            <div className="box">
                                <label htmlFor="primary">Primary</label>
                                <input
                                    type="color"
                                    id="accentPrimary"
                                    name="accentPrimary"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentPrimary}
                                />
                                <input
                                    type="text"
                                    name="accentPrimary"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentPrimary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="secondary">Secondary</label>
                                <input
                                    type="color"
                                    id="accentSecondary"
                                    name="accentSecondary"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentSecondary}
                                />
                                <input
                                    type="text"
                                    name="accentSecondary"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentSecondary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="additional">Additional</label>
                                <input
                                    type="color"
                                    id="accentAdditional"
                                    name="accentAdditional"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentAdditional}
                                />
                                <input
                                    type="text"
                                    name="accentAdditional"
                                    onChange={handleApdateData}
                                    value={dataConfig.accentAdditional}
                                />
                            </div>
                        </section>
                    </li>
                    <li>
                        General text, link<strong>{`<a>`}</strong>, and list
                        <strong>{`<li>`}</strong> configuration
                        <section className="link-configuration">
                            <div
                                style={{
                                    color: `${dataConfig.textColor}`,
                                }}
                            >
                                Lorem ipsum{" "}
                                <b
                                    style={{
                                        color: `${dataConfig.headerLinkColor}`,
                                        textDecoration: `${dataConfig.headerLinkDecoration}`,
                                        fontWeight: `${dataConfig.linkFontWeight}`,
                                    }}
                                >
                                    link
                                </b>
                                , and{" "}
                                <b
                                    style={{
                                        color: `${dataConfig.headerLinkColorHover}`,
                                        textDecoration: `${dataConfig.headerLinkDecorationHover}`,
                                        fontWeight: `${dataConfig.linkFontWeightHover}`,
                                    }}
                                >
                                    link hover
                                </b>{" "}
                                dolor
                            </div>
                            <br />
                            <strong>
                                text-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="textColor"
                                    onChange={handleApdateData}
                                    value={dataConfig.textColor}
                                />
                            </strong>
                            <br />
                            <strong>
                                link-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkColor"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkColor}
                                />
                            </strong>
                            <strong>
                                link-color-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkColorHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkColorHover}
                                />
                            </strong>
                            <strong>
                                link-font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="linkFontWeight"
                                    onChange={handleApdateData}
                                    value={dataConfig.linkFontWeight}
                                />
                            </strong>
                            <strong>
                                link-font-weight-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="linkFontWeightHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.linkFontWeightHover}
                                />
                            </strong>
                            <strong>
                                link-text-decoration:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkDecoration"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkDecoration}
                                />
                            </strong>
                            <strong>
                                link-text-decoration-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkDecorationHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkDecorationHover}
                                />
                            </strong>
                            <br />
                            <strong>
                                list-style:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="listStyle"
                                    onChange={handleApdateData}
                                    value={dataConfig.listStyle}
                                />
                            </strong>
                        </section>
                    </li>
                    <li>
                        Header configuration:
                        <section className="header-configuration">
                            <strong>
                                background-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerBackground"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerBackground}
                                />
                            </strong>
                            <strong>
                                text-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerTxtColor"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerTxtColor}
                                />
                            </strong>
                            <strong>
                                link-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkColor"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkColor}
                                />
                            </strong>
                            <strong>
                                link-color-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkColorHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerLinkColorHover}
                                />
                            </strong>
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerFontSize"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerFontWeight"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerFontWeight}
                                />
                            </strong>
                            <strong>
                                text-decoration:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerTextDecoration"
                                    onChange={handleApdateData}
                                    value={dataConfig.headerTextDecoration}
                                />
                            </strong>
                        </section>
                    </li>
                    <li>
                        Buttons configuration:
                        <section className="buttons-configuration">
                            <strong>
                                padding:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnPadding"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnPadding}
                                />
                            </strong>
                            <strong>
                                color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnColor"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnColor}
                                />
                            </strong>
                            <strong>
                                background-color:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBackground"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnBackground}
                                />
                            </strong>
                            <strong>
                                color-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnColorHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnColorHover}
                                />
                            </strong>
                            <strong>
                                background-color-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBackgroundHover"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnBackgroundHover}
                                />
                            </strong>
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnFontSize"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnFontWeight"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnFontWeight}
                                />
                            </strong>
                            <strong>
                                text-transform:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnTextTransform"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnTextTransform}
                                />
                            </strong>
                            <strong>
                                border:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBorder"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnBorder}
                                />
                            </strong>
                            <strong>
                                border-radius:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBorderRadius"
                                    onChange={handleApdateData}
                                    value={dataConfig.btnBorderRadius}
                                />
                            </strong>
                            <br />
                            <div className="example-buttons">
                                <button
                                    style={{
                                        padding: `${dataConfig.btnPadding}`,
                                        color: `${dataConfig.btnColor}`,
                                        backgroundColor: `${dataConfig.btnBackgroundColor}`,
                                        fontSize: `${dataConfig.btnFontSize}`,
                                        fontWeight: `${dataConfig.btnFontWeight}`,
                                        textTransform: `${dataConfig.btnTextTransform}`,
                                        border: `${dataConfig.btnBorder}`,
                                        borderRadius: `${dataConfig.btnBorderRadius}`,
                                    }}
                                >
                                    button
                                </button>
                                <button
                                    style={{
                                        padding: `${dataConfig.btnPadding}`,
                                        color: `${dataConfig.btnColorHover}`,
                                        backgroundColor: `${dataConfig.btnBackgroundHover}`,
                                        fontSize: `${dataConfig.btnFontSize}`,
                                        fontWeight: `${dataConfig.btnFontWeight}`,
                                        textTransform: `${dataConfig.btnTextTransform}`,
                                        border: `${dataConfig.btnBorder}`,
                                        borderRadius: `${dataConfig.btnBorderRadius}`,
                                    }}
                                >
                                    button hover
                                </button>
                            </div>
                        </section>
                    </li>
                    <li>
                        Backgrounds configuration:
                        <section className="backgrounds-configuration"></section>
                    </li>
                    <li>
                        Footer:
                        <section className="footer-configuration"></section>
                    </li>
                </ol>
                <div className="buttons">
                    <button className="btn btn-admin" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPanel;
