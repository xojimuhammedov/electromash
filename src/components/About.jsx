import { Box, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CompanyBanner from '../assets/company-banner.jpg'

const About = () => {
    const { t } = useTranslation()
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
                    <GridItem>
                        <Heading as="h3" size={{ base: "md", lg: "lg" }} mb={4}>
                            {t("ООО <<ELECTROMASH SERVICE>> оказывают спектр услуг:")}
                        </Heading>
                        <Divider width="80px" borderColor="red.500" mb={6} />
                        <Text fontSize="lg" mb={4}>
                            * Монтаж и капитальный ремонт высоковольтных трансформаторов
                            от 35 кВ до 500 кВ <br />
                            * Строительство распределительных сетей напряжением от 0,4 кВ до
                            500 KB <br />
                            * Такелажный работе: перемещения крупно габаритный и тяжелей
                            оборудования <br />
                            * Дегазация и очистка трансформаторного масло <br />
                            * Вакуумирования трансформаторов <br />
                            * Регенерация трансформаторного масло <br />
                        </Text>
                        {/* <Text fontSize="lg" mb={4}>
                            {t("about_text2")}
                        </Text>
                        <Text fontSize="lg">
                            {t("about_text3")}
                        </Text> */}
                    </GridItem>
                    <GridItem>
                        <Image
                            alt="Нашата компания"
                            src={CompanyBanner}
                            width="100%"
                            height={{ base: "260px", lg: "90%" }}
                            objectFit="cover"
                            borderRadius="md"
                        />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default About;
