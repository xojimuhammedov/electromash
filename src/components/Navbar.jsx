import { Box, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { Link as Alink, useNavigate } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { serviceData } from "../data";
import LogoIcon from '../assets/logo.svg'

function Navbar() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    return (
        <Box p={"12px 0"}>
            <Box className="container">
                <Flex {...css.list}>
                    <Alink to="/">
                        <Image w={{ base: "200px", lg: '280px' }} src={LogoIcon} />
                    </Alink>
                    <Flex alignItems={"center"} gap={{ base: 0, lg: "36px" }}>
                        <Alink to="/">
                            <Text {...css.link}>{t("home")}</Text>
                        </Alink>
                        <Link {...css.link} href="#about">
                            {t("about")}
                        </Link>
                        <Menu isLazy>
                            <MenuButton {...css.link}>{t("activities")}</MenuButton>
                            <MenuList maxW={'380px'}>
                                {
                                    serviceData?.map((item) => (
                                        <MenuItem textTransform={'uppercase'} onClick={() => navigate(`/services/${item?.id}`)} {...css.name}>{item[`title_${i18n?.language}`]}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </Menu>
                        <Alink to="/project">
                            <Text {...css.link}>{t("projects")}</Text>
                        </Alink>
                        <Alink to="/contact">
                            <Text {...css.link}>{t("contacts")}</Text>
                        </Alink>
                        <Language />
                        <NavbarMenu />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    image: {
        width: {
            base: "120px",
            lg: "180px",
        },
    },
    link: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "#171717",
        textTransform: "uppercase",
        transition: "0.3s",
        display: {
            base: "none",
            md: "block",
        },

        _hover: {
            color: "red",
            textDecoration: "none",
        },
    },
    list: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    name: {
        fontSize: "12px",
        lineHeight: "20px",
        fontWeight: "600"
    }
};