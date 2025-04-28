import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../assets/banner.png";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";

function ContactPage() {
    const { t } = useTranslation()
    return (
        <>
            <Box {...css.contact}>
                <Box className="container">
                    <Heading {...css.title}>{t("Contact Us")}</Heading>
                </Box>
            </Box>
            <Form />
        </>
    );
}

export default ContactPage;

const css = {
    contact: {
        backgroundImage: `url(${ContactBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "112px 0",
        backgroundRepeat: "no-repeat"
    },
    title: {
        color: "#fff",
        fontSize: {
            base: "30px",
            lg: "48px"
        },
        lineHeight: "52px",
        fontWeight: "600",
        textAlign: "center",
        textTransform: "capitalize",
    },
};