import React from "react";
import useAdminPanelLogic from "./../../store/AdminApi/AdminPanelLogic";

const AdminPanel = () => {
    const {colors, updateData, getColor} = useAdminPanelLogic();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.elements.primary.value);
        console.log(e.target.elements.secondary.value);
        console.log(e.target.elements.additional.value);

        updateData(colors);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="color"
                        id="primary"
                        name="primary"
                        onChange={getColor}
                        value={colors.primary}
                    />
                    <label htmlFor="primary">Primary</label>
                </div>
                <div>
                    <input
                        type="color"
                        id="secondary"
                        name="secondary"
                        onChange={getColor}
                        value={colors.secondary}
                    />
                    <label htmlFor="secondary">Secondary</label>
                </div>
                <div>
                    <input
                        type="color"
                        id="additional"
                        name="additional"
                        onChange={getColor}
                        value={colors.additional}
                    />
                    <label htmlFor="additional">Additional</label>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AdminPanel;
