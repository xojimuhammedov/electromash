import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../assets/banner.png";
import { useTranslation } from "react-i18next";
import ProjectCards from "../components/Projects";

const ProjectsPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <Box mb={'48px'} {...css.contact}>
                <Box className="container">
                    <Heading {...css.title}>{t("projects")}</Heading>
                </Box>
            </Box>
            {/* <ProjectCards /> */}
        </>
    );
}

export default ProjectsPage;

const css = {
    contact: {
        backgroundImage: `url(${ContactBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "84px 0",
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