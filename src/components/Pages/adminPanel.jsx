import React from "react";

const AdminPanel = () => {
    return (
        <div>
            <div>
                <input type="color" id="head" name="head" placeholder="#fff" />
                <label for="head">Primary</label>
            </div>

            <div>
                <input type="color" id="body" name="body" />
                <label for="body">Secondary</label>
            </div>
        </div>
    );
};

export default AdminPanel;
