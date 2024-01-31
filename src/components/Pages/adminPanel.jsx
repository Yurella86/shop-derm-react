import React, {useState} from "react";
import useAdminApi from "../../store/admin/adminApi";

const AdminPanel = () => {
    const {dataConfig, updateData, handleUpdateState} = useAdminApi();
    const [isHoveredButton, setIsHoveredButton] = useState(false);

    if (!dataConfig) {
        return <div>loading...</div>;
    }

    const handleMouseEnter = () => {
        setIsHoveredButton(true);
    };

    const handleMouseLeave = () => {
        setIsHoveredButton(false);
    };

    const defaultStyle = {
        color: `${dataConfig.footerButton}`,
        backgroundColor: `${dataConfig.footerButtonBackground}`,
    };

    const hoverStyle = {
        color: `${dataConfig.footerButtonHover}`,
        backgroundColor: `${dataConfig.footerButtonBackgroundHover}`,
    };

    const combinedStyle = isHoveredButton
        ? {...defaultStyle, ...hoverStyle}
        : defaultStyle;

    const inputWidth = 10;

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData();
    };

    const handleUpdateData = (e) => {
        handleUpdateState(e.target.name, e.target.value);
    };

    return (
        <div className="wrapper-admin">
            <form onSubmit={handleSubmit}>
                <h1>Admin panel Configuration</h1>
                <ol>
                    <li className="accent-config">
                        Accent colors:
                        <section className="accent-colors">
                            <div className="box">
                                <label htmlFor="primary">Primary</label>
                                <input
                                    type="color"
                                    id="accentPrimary"
                                    name="accentPrimary"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentPrimary}
                                />
                                <input
                                    type="text"
                                    name="accentPrimary"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentPrimary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="secondary">Secondary</label>
                                <input
                                    type="color"
                                    id="accentSecondary"
                                    name="accentSecondary"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentSecondary}
                                />
                                <input
                                    type="text"
                                    name="accentSecondary"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentSecondary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="additional">Additional</label>
                                <input
                                    type="color"
                                    id="accentAdditional"
                                    name="accentAdditional"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentAdditional}
                                />
                                <input
                                    type="text"
                                    name="accentAdditional"
                                    onChange={handleUpdateData}
                                    value={dataConfig.accentAdditional}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="customColor1">Custom 1</label>
                                <input
                                    type="color"
                                    id="customColor1"
                                    name="customColor1"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor1}
                                />
                                <input
                                    type="text"
                                    name="customColor1"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor1}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="customColor2">Custom 2</label>
                                <input
                                    type="color"
                                    id="customColor2"
                                    name="customColor2"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor2}
                                />
                                <input
                                    type="text"
                                    name="customColor2"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor2}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="customColor3">Custom 3</label>
                                <input
                                    type="color"
                                    id="customColor3"
                                    name="customColor3"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor3}
                                />
                                <input
                                    type="text"
                                    name="customColor3"
                                    onChange={handleUpdateData}
                                    value={dataConfig.customColor3}
                                />
                            </div>
                        </section>
                    </li>
                    <li className="heading-config">
                        Heading Text:
                        <section className="heading-configuration">
                            <h1
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h1headingColor}`,
                                    fontSize: `${dataConfig.h1headingFontSize}`,
                                    fontWeight: `${dataConfig.h1headingFontWeight}`,
                                    fontFamily: `${dataConfig.h1headingFontFamily}`,
                                    textTransform: `${dataConfig.h1headingTextTransform}`,
                                    lineHeight: `${dataConfig.h1headingLineHeight}`,
                                }}
                            >
                                {"<h1> "}heading
                            </h1>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h1headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h1headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h1headingColor"
                                            name="h1headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h1headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h1headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h1headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h1headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h1headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h1headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h1headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h1headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h1headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h1headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h1headingLineHeight}
                                    />
                                </strong>
                            </div>
                            <h2
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h2headingColor}`,
                                    fontSize: `${dataConfig.h2headingFontSize}`,
                                    fontWeight: `${dataConfig.h2headingFontWeight}`,
                                    fontFamily: `${dataConfig.h2headingFontFamily}`,
                                    textTransform: `${dataConfig.h2headingTextTransform}`,
                                    lineHeight: `${dataConfig.h2headingLineHeight}`,
                                }}
                            >
                                {"<h2> "} heading
                            </h2>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h2headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h2headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h2headingColor"
                                            name="h2headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h2headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h2headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h2headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h2headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h2headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h2headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h2headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h2headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h2headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h2headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h2headingLineHeight}
                                    />
                                </strong>
                            </div>
                            <h3
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h3headingColor}`,
                                    fontSize: `${dataConfig.h3headingFontSize}`,
                                    fontWeight: `${dataConfig.h3headingFontWeight}`,
                                    fontFamily: `${dataConfig.h3headingFontFamily}`,
                                    textTransform: `${dataConfig.h3headingTextTransform}`,
                                    lineHeight: `${dataConfig.h3headingLineHeight}`,
                                }}
                            >
                                {"<h3> "} heading
                            </h3>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h3headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h3headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h3headingColor"
                                            name="h3headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h3headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h3headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h3headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h3headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h3headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h3headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h3headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h3headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h3headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h3headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h3headingLineHeight}
                                    />
                                </strong>
                            </div>
                            <h4
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h4headingColor}`,
                                    fontSize: `${dataConfig.h4headingFontSize}`,
                                    fontWeight: `${dataConfig.h4headingFontWeight}`,
                                    fontFamily: `${dataConfig.h4headingFontFamily}`,
                                    textTransform: `${dataConfig.h4headingTextTransform}`,
                                    lineHeight: `${dataConfig.h4headingLineHeight}`,
                                }}
                            >
                                {"<h4> "} heading
                            </h4>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h4headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h4headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h4headingColor"
                                            name="h4headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h4headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h4headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h4headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h4headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h4headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h4headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h4headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h4headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h4headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h4headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h4headingLineHeight}
                                    />
                                </strong>
                            </div>
                            <h5
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h5headingColor}`,
                                    fontSize: `${dataConfig.h5headingFontSize}`,
                                    fontWeight: `${dataConfig.h5headingFontWeight}`,
                                    fontFamily: `${dataConfig.h5headingFontFamily}`,
                                    textTransform: `${dataConfig.h5headingTextTransform}`,
                                    lineHeight: `${dataConfig.h5headingLineHeight}`,
                                }}
                            >
                                {"<h5> "} heading
                            </h5>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h5headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h5headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h5headingColor"
                                            name="h5headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h5headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h5headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h5headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h5headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h5headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h5headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h5headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h5headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h5headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h5headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h5headingLineHeight}
                                    />
                                </strong>
                            </div>
                            <h6
                                className="heading-text"
                                style={{
                                    color: `${dataConfig.h6headingColor}`,
                                    fontSize: `${dataConfig.h6headingFontSize}`,
                                    fontWeight: `${dataConfig.h6headingFontWeight}`,
                                    fontFamily: `${dataConfig.h6headingFontFamily}`,
                                    textTransform: `${dataConfig.h6headingTextTransform}`,
                                    lineHeight: `${dataConfig.h6headingLineHeight}`,
                                }}
                            >
                                {"<h6> "} text example
                            </h6>
                            <div className="config">
                                <strong>
                                    color:
                                    <div>
                                        <input
                                            type="text"
                                            size={inputWidth}
                                            name="h6headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h6headingColor}
                                        />
                                        <input
                                            type="color"
                                            id="h6headingColor"
                                            name="h6headingColor"
                                            onChange={handleUpdateData}
                                            value={dataConfig.h6headingColor}
                                        />
                                    </div>
                                </strong>
                                <strong>
                                    font-size:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h6headingFontSize"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h6headingFontSize}
                                    />
                                </strong>
                                <strong>
                                    font-weight:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h6headingFontWeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h6headingFontWeight}
                                    />
                                </strong>
                                <strong>
                                    font-family:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h6headingFontFamily"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h6headingFontFamily}
                                    />
                                </strong>
                                <strong>
                                    text-transform:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h6headingTextTransform"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.h6headingTextTransform
                                        }
                                    />
                                </strong>
                                <strong>
                                    line-height:
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="h6headingLineHeight"
                                        onChange={handleUpdateData}
                                        value={dataConfig.h6headingLineHeight}
                                    />
                                </strong>
                            </div>
                        </section>
                    </li>
                    <li className="general-config">
                        General <b>text</b>, link<strong>{`<a>`}</strong>, and
                        list
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
                                color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="textColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.textColor}
                                    />
                                    <input
                                        type="color"
                                        id="textColor"
                                        name="textColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.textColor}
                                    />
                                </div>
                            </strong>
                            <br />
                            <strong>
                                link-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerLinkColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColor}
                                    />
                                    <input
                                        type="color"
                                        id="headerLinkColor"
                                        name="headerLinkColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                link-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerLinkColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="headerLinkColorHover"
                                        name="headerLinkColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColorHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                link-font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="linkFontWeight"
                                    onChange={handleUpdateData}
                                    value={dataConfig.linkFontWeight}
                                />
                            </strong>
                            <strong>
                                link-font-weight-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="linkFontWeightHover"
                                    onChange={handleUpdateData}
                                    value={dataConfig.linkFontWeightHover}
                                />
                            </strong>
                            <strong>
                                link-text-decoration:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkDecoration"
                                    onChange={handleUpdateData}
                                    value={dataConfig.headerLinkDecoration}
                                />
                            </strong>
                            <strong>
                                link-text-decoration-hover:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerLinkDecorationHover"
                                    onChange={handleUpdateData}
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
                                    onChange={handleUpdateData}
                                    value={dataConfig.listStyle}
                                />
                            </strong>
                        </section>
                    </li>
                    <li className="header-config">
                        Header configuration:
                        <section className="header-configuration">
                            <strong>
                                background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerBackground}
                                    />
                                    <input
                                        type="color"
                                        id="headerBackground"
                                        name="headerBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerBackground}
                                    />
                                </div>
                            </strong>
                            <strong>
                                text-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerTxtColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerTxtColor}
                                    />
                                    <input
                                        type="color"
                                        id="headerTxtColor"
                                        name="headerTxtColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerTxtColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                link-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerLinkColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColor}
                                    />
                                    <input
                                        type="color"
                                        id="headerLinkColor"
                                        name="headerLinkColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                link-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="headerLinkColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="headerLinkColorHover"
                                        name="headerLinkColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.headerLinkColorHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerFontSize"
                                    onChange={handleUpdateData}
                                    value={dataConfig.headerFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerFontWeight"
                                    onChange={handleUpdateData}
                                    value={dataConfig.headerFontWeight}
                                />
                            </strong>
                            <strong>
                                text-decoration:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="headerTextDecoration"
                                    onChange={handleUpdateData}
                                    value={dataConfig.headerTextDecoration}
                                />
                            </strong>
                        </section>
                    </li>
                    <li className="mine-menu-config">
                        Mine menu configuration:
                        <section className="menu-configuration">
                            <div
                                className="example-mine-menu"
                                style={{
                                    backgroundColor: `${dataConfig.mineMenuBackground}`,
                                    fontSize: `${dataConfig.categoryFontSize}`,
                                    fontWeight: `${dataConfig.categoryFontWeight}`,
                                    // fontFamily: `${dataConfig.h1headingFontFamily}`,
                                    textTransform: `${dataConfig.categoryTextDecoration}`,
                                    // lineHeight: `${dataConfig.h1headingLineHeight}`,
                                }}
                            >
                                <div
                                    className="example-category"
                                    style={{
                                        backgroundColor: `${dataConfig.categoryBackground}`,
                                        color: `${dataConfig.categoryColor}`,
                                    }}
                                >
                                    Services
                                </div>
                                <div
                                    className="example-category"
                                    style={{
                                        backgroundColor: `${dataConfig.categoryBackground}`,
                                        color: `${dataConfig.categoryColor}`,
                                    }}
                                >
                                    Products
                                </div>
                                <div
                                    className="example-category"
                                    style={{
                                        backgroundColor: `${dataConfig.categoryBackground}`,
                                        color: `${dataConfig.categoryColor}`,
                                    }}
                                >
                                    GiftCard
                                </div>
                            </div>
                            <br />
                            <strong>
                                menu-background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="mineMenuBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.mineMenuBackground}
                                    />
                                    <input
                                        type="color"
                                        id="mineMenuBackground"
                                        name="mineMenuBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.mineMenuBackground}
                                    />
                                </div>
                            </strong>
                            <br />
                            <strong>
                                color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="categoryColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryColor}
                                    />
                                    <input
                                        type="color"
                                        id="categoryColor"
                                        name="categoryColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="categoryBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryBackground}
                                    />
                                    <input
                                        type="color"
                                        id="categoryBackground"
                                        name="categoryBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryBackground}
                                    />
                                </div>
                            </strong>
                            <br />
                            <div>Hover / Active</div>
                            <strong>
                                color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="categoryColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="categoryColorHover"
                                        name="categoryColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.categoryColorHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                background-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="categoryBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.categoryBackgroundHover
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="categoryBackgroundHover"
                                        name="categoryBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.categoryBackgroundHover
                                        }
                                    />
                                </div>
                            </strong>

                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="categoryFontSize"
                                    onChange={handleUpdateData}
                                    value={dataConfig.categoryFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="categoryFontWeight"
                                    onChange={handleUpdateData}
                                    value={dataConfig.categoryFontWeight}
                                />
                            </strong>
                            <strong>
                                text-transform:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="categoryTextDecoration"
                                    onChange={handleUpdateData}
                                    value={dataConfig.categoryTextDecoration}
                                />
                            </strong>
                        </section>
                    </li>
                    <li className="button-config">
                        Buttons configuration:
                        <section className="buttons-configuration">
                            <strong>
                                padding:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnPadding"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnPadding}
                                />
                            </strong>
                            <strong>
                                color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="btnColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnColor}
                                    />
                                    <input
                                        type="color"
                                        id="btnColor"
                                        name="btnColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="btnBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnBackground}
                                    />
                                    <input
                                        type="color"
                                        id="btnBackground"
                                        name="btnBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnBackground}
                                    />
                                </div>
                            </strong>
                            <strong>
                                color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="btnColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="btnColorHover"
                                        name="btnColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnColorHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                background-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="btnBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnBackgroundHover}
                                    />
                                    <input
                                        type="color"
                                        id="btnBackgroundHover"
                                        name="btnBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.btnBackgroundHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnFontSize"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnFontWeight"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnFontWeight}
                                />
                            </strong>
                            <strong>
                                text-transform:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnTextTransform"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnTextTransform}
                                />
                            </strong>
                            <strong>
                                border:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBorder"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnBorder}
                                />
                            </strong>
                            <strong>
                                border-radius:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="btnBorderRadius"
                                    onChange={handleUpdateData}
                                    value={dataConfig.btnBorderRadius}
                                />
                            </strong>
                            <br />
                            <div className="example-buttons">
                                <button
                                    style={{
                                        padding: `${dataConfig.btnPadding}`,
                                        color: `${dataConfig.btnColor}`,
                                        backgroundColor: `${dataConfig.btnBackground}`,
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
                    <li className="home-tabs-config">
                        Home page tabs:
                        <div className="example-tabs">
                            <span
                                style={{
                                    color: `${dataConfig.homeTabsColorHover}`,
                                    backgroundColor: `${dataConfig.homeTabsBackgroundHover}`,
                                    textTransform: `${dataConfig.homeTabsTextTransform}`,
                                    fontSize: `${dataConfig.homeTabsFontSize}`,
                                }}
                            >
                                active
                            </span>
                            <span
                                style={{
                                    color: `${dataConfig.homeTabsColor}`,
                                    backgroundColor: `${dataConfig.homeTabsBackground}`,
                                    textTransform: `${dataConfig.homeTabsTextTransform}`,
                                    fontSize: `${dataConfig.homeTabsFontSize}`,
                                }}
                            >
                                static
                            </span>
                            <span
                                style={{
                                    color: `${dataConfig.homeTabsColorHover}`,
                                    backgroundColor: `${dataConfig.homeTabsBackgroundHover}`,
                                    textTransform: `${dataConfig.homeTabsTextTransform}`,
                                    fontSize: `${dataConfig.homeTabsFontSize}`,
                                }}
                            >
                                hover
                            </span>
                        </div>
                        <section className="home-tabs-configuration">
                            <strong>
                                background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="homeTabsBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsBackground}
                                    />
                                    <input
                                        type="color"
                                        id="homeTabsBackground"
                                        name="homeTabsBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsBackground}
                                    />
                                </div>
                            </strong>
                            <strong>
                                color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="homeTabsColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsColor}
                                    />
                                    <input
                                        type="color"
                                        id="homeTabsColor"
                                        name="homeTabsColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="homeTabsFontSize"
                                    onChange={handleUpdateData}
                                    value={dataConfig.homeTabsFontSize}
                                />
                            </strong>
                            <strong>
                                text-transform:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="homeTabsTextTransform"
                                    onChange={handleUpdateData}
                                    value={dataConfig.homeTabsTextTransform}
                                />
                            </strong>
                            <br />
                            <div>Hover / Active:</div>
                            <strong>
                                background-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="homeTabsBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.homeTabsBackgroundHover
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="homeTabsBackgroundHover"
                                        name="homeTabsBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.homeTabsBackgroundHover
                                        }
                                    />
                                </div>
                            </strong>
                            <strong>
                                color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="homeTabsColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="homeTabsColorHover"
                                        name="homeTabsColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.homeTabsColorHover}
                                    />
                                </div>
                            </strong>
                        </section>
                    </li>
                    <li className="footer-config">
                        Footer:
                        <div className="example-footer-wrapper">
                            <div
                                className="example-tagline"
                                style={{
                                    color: `${dataConfig.footerTaglineColor}`,
                                    backgroundColor: `${dataConfig.footerTaglineBackground}`,
                                }}
                            >
                                <div
                                    className="example-nav"
                                    style={{
                                        fontSize: `${dataConfig.taglineFontSizeBottom}`,
                                    }}
                                >
                                    <div>first</div>
                                    <div>second</div>
                                    <div>Third</div>
                                </div>
                                <div className="tagline">tag line</div>
                            </div>
                            <div
                                className="example-mine"
                                style={{
                                    color: `${dataConfig.footerTxtColor}`,
                                    backgroundColor: `${dataConfig.footerBackground}`,
                                }}
                            >
                                <div className="icons">
                                    <span
                                        className="icon icon-social-facebook"
                                        style={{
                                            color: `${dataConfig.footerIconColor}`,
                                            backgroundColor: `${dataConfig.footerIconBackground}`,
                                        }}
                                    ></span>
                                    <span
                                        className="icon icon-social-facebook"
                                        style={{
                                            color: `${dataConfig.footerIconColorHover}`,
                                            backgroundColor: `${dataConfig.footerIconBackgroundHover}`,
                                        }}
                                    ></span>
                                </div>
                                <div className="footer-btn">
                                    <button
                                        style={combinedStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        subscribe
                                    </button>
                                </div>
                            </div>
                            <div
                                className="example-bottom"
                                style={{
                                    color: `${dataConfig.footerBottomColor}`,
                                    backgroundColor: `${dataConfig.footerBottomBackground}`,
                                    fontSize: `${dataConfig.footerFontSizeBottom}`,
                                }}
                            >
                                © 2023 All rights reserved.
                            </div>
                        </div>
                        <br />
                        <section className="footer-configuration">
                            <strong>
                                tagline-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerTaglineColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerTaglineColor}
                                    />
                                    <input
                                        type="color"
                                        id="footerTaglineColor"
                                        name="footerTaglineColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerTaglineColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                tagline-background:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerTaglineBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerTaglineBackground
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="footerTaglineBackground"
                                        name="footerTaglineBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerTaglineBackground
                                        }
                                    />
                                </div>
                            </strong>
                            <strong>
                                tagline-font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="taglineFontSizeBottom"
                                    onChange={handleUpdateData}
                                    value={dataConfig.taglineFontSizeBottom}
                                />
                            </strong>
                            <br />
                            <strong>
                                footer-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerTxtColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerTxtColor}
                                    />
                                    <input
                                        type="color"
                                        id="footerTxtColor"
                                        name="footerTxtColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerTxtColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                footer-background:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerBackground}
                                    />
                                    <input
                                        type="color"
                                        id="footerBackground"
                                        name="footerBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerBackground}
                                    />
                                </div>
                            </strong>
                            <br />
                            <strong>
                                icon-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerIconColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconColor}
                                    />
                                    <input
                                        type="color"
                                        id="footerIconColor"
                                        name="footerIconColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                icon-background:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerIconBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconBackground}
                                    />
                                    <input
                                        type="color"
                                        id="footerIconBackground"
                                        name="footerIconBackground"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconBackground}
                                    />
                                </div>
                            </strong>
                            <strong>
                                icon-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerIconColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconColorHover}
                                    />
                                    <input
                                        type="color"
                                        id="footerIconColorHover"
                                        name="footerIconColorHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerIconColorHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                icon-background-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerIconBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerIconBackgroundHover
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="footerIconBackgroundHover"
                                        name="footerIconBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerIconBackgroundHover
                                        }
                                    />
                                </div>
                            </strong>
                            <br />
                            <strong>
                                button-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerButton"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerButton}
                                    />
                                    <input
                                        type="color"
                                        id="footerButton"
                                        name="footerButton"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerButton}
                                    />
                                </div>
                            </strong>
                            <strong>
                                button-background:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerButtonBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerButtonBackground
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="footerButtonBackground"
                                        name="footerButtonBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerButtonBackground
                                        }
                                    />
                                </div>
                            </strong>
                            <strong>
                                button-color-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerButtonHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerButtonHover}
                                    />
                                    <input
                                        type="color"
                                        id="footerButtonHover"
                                        name="footerButtonHover"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerButtonHover}
                                    />
                                </div>
                            </strong>
                            <strong>
                                button-background-hover:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerButtonBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerButtonBackgroundHover
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="footerButtonBackgroundHover"
                                        name="footerButtonBackgroundHover"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerButtonBackgroundHover
                                        }
                                    />
                                </div>
                            </strong>
                            <br />
                            <strong>
                                font-size:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="footerFontSize"
                                    onChange={handleUpdateData}
                                    value={dataConfig.footerFontSize}
                                />
                            </strong>
                            <strong>
                                font-weight:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="footerFontWeight"
                                    onChange={handleUpdateData}
                                    value={dataConfig.footerFontWeight}
                                />
                            </strong>
                            <strong>
                                text-decoration:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="footerTextDecoration"
                                    onChange={handleUpdateData}
                                    value={dataConfig.footerTextDecoration}
                                />
                            </strong>
                            <br />
                            <strong>
                                footer-bottom-color:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerBottomColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerBottomColor}
                                    />
                                    <input
                                        type="color"
                                        id="footerBottomColor"
                                        name="footerBottomColor"
                                        onChange={handleUpdateData}
                                        value={dataConfig.footerBottomColor}
                                    />
                                </div>
                            </strong>
                            <strong>
                                footer-bottom-background:
                                <div>
                                    <input
                                        type="text"
                                        size={inputWidth}
                                        name="footerBottomBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerBottomBackground
                                        }
                                    />
                                    <input
                                        type="color"
                                        id="footerBottomBackground"
                                        name="footerBottomBackground"
                                        onChange={handleUpdateData}
                                        value={
                                            dataConfig.footerBottomBackground
                                        }
                                    />
                                </div>
                            </strong>
                            <strong>
                                font-size-bottom:
                                <input
                                    type="text"
                                    size={inputWidth}
                                    name="footerFontSizeBottom"
                                    onChange={handleUpdateData}
                                    value={dataConfig.footerFontSizeBottom}
                                />
                            </strong>
                        </section>
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
