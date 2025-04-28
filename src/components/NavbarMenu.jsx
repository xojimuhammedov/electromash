import { Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MenuButtonOne from "../assets/MenuButton";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { serviceData } from "../data";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation()
  return (
    <>
      <Button {...css.button} onClick={onOpen}>
        <MenuButtonOne />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.menuList}>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              pt={"48px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"36px"}>
              <Alink onClick={onClose} to="/">
                <Text {...css.link}>{t("home")}</Text>
              </Alink>
              <Link onClick={onClose} {...css.link} href="#about">
                {t("about")}
              </Link>
              <Menu isLazy>
                <MenuButton {...css.link}>{t("activities")}</MenuButton>
                <MenuList maxW={'380px'}>
                  {
                    serviceData?.map((item) => (
                      <MenuItem onClick={() => { navigate(`/services/${item?.id}`), onClose }} {...css.name}>{item[`title_${i18n?.language}`]}</MenuItem>
                    ))
                  }
                </MenuList>
              </Menu>
              <Alink onClick={onClose} to="/project">
                <Text {...css.link}>{t("projects")}</Text>
              </Alink>
              <Alink onClick={onClose} to="/contact">
                <Text {...css.link}>{t("contacts")}</Text>
              </Alink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarMenu;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#171717",
    transition: "0.3s",

    _hover: {
      color: "#27ac5e",
      textDecoration: "none",
    },
  },
  menuList: {
    borderRadius: "0",
    margin: "0",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent",
    width: "55px",
    display: {
      base: "block",
      md: "none",
    },
  },
};