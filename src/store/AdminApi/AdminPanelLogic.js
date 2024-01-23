import {useEffect, useState} from "react";

const useAdminPanelLogic = () => {
    const [colors, setColors] = useState({
        primary: "",
        secondary: "",
        additional: "",
    });

    const updateData = async (newTitle) => {
        const url =
            "https://products-bb720-default-rtdb.firebaseio.com/uiConfiguration.json";

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const currentData = await response.json();

            currentData.primary = newTitle.primary;
            currentData.secondary = newTitle.secondary;
            currentData.additional = newTitle.additional;

            const updateResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                Accept: "application/json",
                body: JSON.stringify(currentData),
            });

            if (!updateResponse.ok) {
                throw new Error("Failed to update data");
            }

            console.log("Data updated successfully");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const fetchData = async () => {
        const url =
            "https://products-bb720-default-rtdb.firebaseio.com/uiConfiguration.json";

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    "Something went wrong with the UI Configuration API"
                );
            }

            const data = await response.json();

            setColors({
                primary: data.primary,
                secondary: data.secondary,
                additional: data.additional,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const getColor = (e) => {
        setColors((prevColors) => ({
            ...prevColors,
            [e.target.name]: `${e.target.value}`,
        }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        colors,
        updateData,
        fetchData,
        getColor,
    };
};

export default useAdminPanelLogic;
