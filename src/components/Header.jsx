import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import HeaderBanner from "../assets/header-banner.png";

function Header() {
    return (
        <Box {...css.header}>
            <div class="overlay"></div>
            <Box className="container">
                <Heading {...css.title}>
                    ПОВЕЧЕ ОТ 25 ГОДИНИ
                </Heading>
                <Text {...css.text}>КАЧЕСТВО И КОРЕКТНОСТ</Text>
            </Box>
        </Box>
    );
}

export default Header;

const css = {
    header: {
        backgroundImage: `url(${HeaderBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: {
            base: "80vh",
            lg: "90vh",
        },
    },
    title: {
        color: "#fff",
        fontSize: {
            base: "32px",
            lg: "76px",
        },
        lineHeight: {
            base: "40px",
            lg: "88px",
        },
        fontWeight: "700",
        textAlign: "center",
        textTransform: "capitalize",
        position: "relative",
        zIndex: "999",
        width: {
            base: "100%",
            lg: "1050px",
        },
        margin: "auto",
        paddingTop: "150px",
    },
    text: {
        color: "#fff",
        fontSize: {
            base: "38px",
        },
        lineHeight: {
            base: "40px",
            lg: "68px",
        },
        fontWeight: "600",
        textAlign: "center",
        margin: "12px 0",
        position: "relative",
        zIndex: "999",
    },
    button: {
        backgroundColor: "#27ac5e",
        color: "#fff",
        marginTop: "18px",
        height: "45px",
        width: "180px",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
        margin: "15px auto",
        borderRadius: "20px",

        _hover: {
            textDecoration: "none",
        },
    },
};