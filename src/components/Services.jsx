import { Box, Divider, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { serviceData } from '../data';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Services = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'24px 0'} pb={'72px'}>
            <Box className='container'>
                <Heading {...css.title}>{t("Дейности")}</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
                    {serviceData?.map((service) => (
                        <Box
                            key={service.id}
                            borderRadius="lg"
                            overflow="hidden"
                            bg="white"
                            boxShadow="md"
                            transition="all 0.3s"
                            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                        >
                            <Box position="relative" height="250px">
                                <Image
                                    src={service?.image}
                                    alt={service?.title}
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                            <Box p={5}>
                                <Heading as="h3" size="md" mb={2}>
                                    {service[`title_${i18n?.language}`]}
                                </Heading>
                                <Divider borderColor="red.500" width="50px" mb={4} />
                                <Link to={`/services/${service?.id}`}>
                                    <Text {...css.link}>{t("Learn More")}</Text>
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Services;

const css = {
    title: {
        color: "#000",
        fontSize: {
            base: "32px",
            lg: "46px",
        },
        lineHeight: {
            base: "40px",
            lg: "58px",
        },
        fontWeight: "600",
        textAlign: "center"
    },
    link: {
        margin: "12px 0",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "600",
        transition: "0.3s",

        _hover: {
            color: "red"
        }
    }
}