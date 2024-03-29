import {useEffect, useState} from "react";
import {baseUrl, config} from "./configApi";

const useAdminApi = () => {
    const urlConfiguration = `${baseUrl}${config}`;

    const [dataConfig, setDataConfig] = useState();

    const getData = async () => {
        try {
            const response = await fetch(`${urlConfiguration}.json`);

            if (!response.ok) {
                throw new Error(
                    "Something went wrong with the UI Configuration API"
                );
            }

            const data = await response.json();
            setDataConfig(data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateData = async () => {
        try {
            const updateResponse = await fetch(`${urlConfiguration}.json`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                Accept: "application/json",
                body: JSON.stringify(dataConfig),
            });

            if (!updateResponse.ok) {
                throw new Error("Failed to update data");
            }

            console.log("Data updated successfully");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const handleUpdateState = (element, newValue) => {
        setDataConfig((prevConfig) => ({
            ...prevConfig,
            [element]: newValue,
        }));
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        dataConfig,
        updateData,
        handleUpdateState,
    };
};

export default useAdminApi;
