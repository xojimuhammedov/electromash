import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function Form() {
    const { t } = useTranslation()
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    function changeText(item) {
        setTextValue(item);
    }
    function changeEmail(item) {
        setEmailValue(item);
    }

    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
        setTextValue("");
        setEmailValue("");
    };

    let bot = {
        TOKEN: "7387858859:AAFc_blnJnd64JG3OcUQHjz4BkYyv3OQPiA",
        chatID: "-1002325832754",
        message: `
          Assalomu alaykum sizga yangi xabar!%0A
          %0AIsmi 👤: ${nameValue}; 
          %0ATelefon raqami ☎: ${numberValue};
          %0AE-mail 📧: ${emailValue};
          %0ASizga xabar ☎: ${textValue};`,
    };

    function sendMessage(e) {
        e.preventDefault();
        if (nameValue === "") {
        } else {
            fetch(
                `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
                {
                    method: "GET",
                }
            ).then(
                (success) => {
                    if (success.status === 200) {
                        handleClear();
                    }
                    toast.success("Your message has been sent successfully!");
                },
                (error) => { }
            );
        }
    }
    return (
        <Box p={"36px 0"}>
            <Box className="container">
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={"space-between"}
                    align={"center"}>
                    <Box>
                        <Heading {...css.name}>{t("Contact")} </Heading>
                        <Heading {...css.title}>
                            {t("Have questions? feel free to write us")}
                        </Heading>
                        <Text {...css.text}>
                            {t("If you have any questions or need assistance, please feel free to contact us. We are here to help and ready to respond promptly to your inquiries.")}
                        </Text>
                    </Box>
                    <Box width={{ base: "100%", md: "560px" }}>
                        <Input
                            value={nameValue}
                            onChange={(e) => changeName(e.target.value)}
                            {...css.input}
                            placeholder={t("Name")}
                        />
                        <Input
                            value={emailValue}
                            onChange={(e) => changeEmail(e.target.value)}
                            {...css.input}
                            placeholder={t("Email")}
                        />
                        <Input
                            value={numberValue}
                            onChange={(e) => changeNumber(e.target.value)}
                            {...css.input}
                            placeholder={t("Phone")}
                        />
                        <Textarea
                            value={textValue}
                            onChange={(e) => changeText(e.target.value)}
                            {...css.textarea}
                            placeholder={t("Message")}
                        />
                        <Button type="submit" onClick={sendMessage} {...css.button}>
                            {t("Submit")}
                        </Button>
                    </Box>
                </Flex>
                <Heading {...css.subname}>{t("Find Us on Map")}</Heading>
                <Text {...css.texts}>
                    {t("text")}
                </Text>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2995.320591454007!2d69.30613207605755!3d41.34538497130517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzQzLjQiTiA2OcKwMTgnMzEuNCJF!5e0!3m2!1sen!2s!4v1746208424855!5m2!1sen!2s"
                    className="form-map"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Box>
    );
}

export default Form;

const css = {
    name: {
        color: "#2f2f2f",
        fontSize: "18px",
        lineHeight: "25px",
        fontWeight: "500",
    },
    title: {
        color: "#171717",
        fontSize: {
            base: "28px",
            lg: "42px",
        },
        lineHeight: {
            base: "40px",
            lg: "38px",
        },
        fontWeight: "600",
        width: {
            base: "100%",
            lg: "560px",
        },
        textTransform: "capitalize",
    },
    text: {
        fontSize: {
            base: "14px",
            md: "16px",
        },
        lineHeight: "24px",
        fontWeight: "400",
        width: {
            base: "100%",
            lg: "550px",
        },
        marginTop: "18px",
    },
    button: {
        backgroundColor: "#2f2f2f",
        color: "#fff",
        marginTop: "18px",
        height: "45px",
        width: "100%",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        transition: "0.3s",

        _hover: {
            backgroundColor: "#2f2f2f",
        },
    },
    input: {
        width: "100%",
        height: "45px",
        margin: "10px 0",
        borderRadius: "8px",

        _focus: {
            borderColor: "#2f2f2f",
        },
    },
    textarea: {
        width: "100%",
        margin: "10px 0",
        borderRadius: "8px",
        resize: "none",

        _focus: {
            borderColor: "#2f2f2f",
        },
    },
    subname: {
        fontSize: {
            base: "32px",
            lg: "42px",
        },
        lineHeight: {
            base: "40px",
            lg: "58px",
        },
        fontWeight: "600",
        color: "#171717",
        marginTop: "72px",
        textAlign: "center",
        textTransform: "capitalize",
    },
    texts: {
        fontSize: {
            base: "14px",
            md: "16px",
        },
        lineHeight: "24px",
        fontWeight: "400",
        color: "rgb(162, 162, 162)",
        textAlign: "center",
        width: {
            base: "100%",
            lg: "850px",
        },
        margin: "18px auto",
    },
};