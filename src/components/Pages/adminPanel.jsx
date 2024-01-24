import React from "react";
import useAdminApi from "../../store/admin/adminApi";

const AdminPanel = () => {
    const {dataConfig, updateData, updateDataAccent, updateDataHeader} =
        useAdminApi();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData();
    };

    const updateAccent = (e) => {
        const element = e.target.name;
        const newValue = e.target.value;
        updateDataAccent(element, newValue);
    };

    const updateHeader = (e) => {
        const element = e.target.name;
        const newValue = e.target.value;
        console.log("element" + element);
        console.log("newValue" + newValue);
        updateDataHeader(element, newValue);
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
                                    id="primary"
                                    name="primary"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.primary}
                                />
                                <input
                                    type="text"
                                    name="primary"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.primary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="secondary">Secondary</label>
                                <input
                                    type="color"
                                    id="secondary"
                                    name="secondary"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.secondary}
                                />
                                <input
                                    type="text"
                                    name="secondary"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.secondary}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="additional">Additional</label>
                                <input
                                    type="color"
                                    id="additional"
                                    name="additional"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.additional}
                                />
                                <input
                                    type="text"
                                    name="additional"
                                    onChange={updateAccent}
                                    value={dataConfig.accentColor.additional}
                                />
                            </div>
                        </section>
                    </li>
                    <li>
                        Header configuration:
                        <section className="header-configuration">
                            <div>
                                <strong>
                                    background-color:
                                    <input
                                        type="text"
                                        name="backgroundColor"
                                        onChange={updateHeader}
                                        value={
                                            dataConfig.header.backgroundColor
                                        }
                                    />
                                </strong>
                            </div>
                            <div>
                                color:<span> #333</span>
                            </div>
                            <div>
                                font-size:<span>12px</span>
                            </div>
                            <div>
                                font-weight:<span>600</span>
                            </div>
                            <div>
                                text-decoration:<span>underline</span>
                            </div>
                        </section>
                    </li>
                    <li>
                        Text configuration:
                        <section className="text-configuration"></section>
                    </li>
                    <li>
                        Buttons configuration:
                        <section className="buttons-configuration"></section>
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
