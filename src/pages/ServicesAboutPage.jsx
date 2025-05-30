import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceData } from '../data';
import { useTranslation } from 'react-i18next';

const ServicesAboutPage = () => {
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const aboutData = serviceData.find((item) => item?.id === id)
    return (
        <Box p={'18px 0'} pb={'108px'} >
            <Box className='container'>
                <Image
                    {...css.image}
                    src={aboutData?.image} />
                <Heading {...css.title}>{aboutData[`title_${i18n?.language}`]}</Heading>
                <Text
                    dangerouslySetInnerHTML={{
                        __html: aboutData[`description_${i18n?.language}`]
                    }}
                    {...css.text}
                />
            </Box>
        </Box>
    );
}

export default ServicesAboutPage;


const css = {
    image: {
        borderRadius: "12px",
        height: "500px",
        objectFit: "cover",
        width: "100%"
    },
    title: {
        fontSize: {
            base: "18px",
            lg: "28px"
        },
        lineHeight: {
            base: "25px",
            lg: "35px"
        },
        fontWeight: "600",
        margin: "24px 0",
        textAlign: "center"
    },
    text: {
        fontSize: {
            base: "14px",
            lg: "18px"
        },
        lineHeight: {
            base: "22px",
            lg: "32px"
        }
    }
}