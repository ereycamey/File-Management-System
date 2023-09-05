import React from "react";
import NavigationComponent from "../../components/HomePageComponents/Navigation";
import cover from "../../pages/HomePage/cover.png"; // Update the path

const HomePage = () => {
    const containerStyles = {
        marginBottom: "50px", // Add the margin-top to the container
    };

    const backgroundStyles = {
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Ensure the component covers the whole viewport height
    };

    return (
        <div style={containerStyles}>
            <div style={backgroundStyles}>
                <NavigationComponent />
            </div>
        </div>
    );
};

export default HomePage;
