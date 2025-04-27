import { Box, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
                    <GridItem>
                        <Heading as="h3" size="lg" mb={4}>
                            {t("Нашата История")}
                        </Heading>
                        <Divider width="80px" borderColor="red.500" mb={6} />
                        <Text fontSize="lg" mb={4}>
                            {t("about_text1")}
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            {t("about_text2")}
                        </Text>
                        <Text fontSize="lg">
                            {t("about_text3")}
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Image
                            src={'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://enimex-bg.com/wp-content/uploads/2020/12/3acfca8ba8df51bd525ba06350121d2eqcb.jpg'}
                            alt="Нашата компания"
                            width="100%"
                            height="100%"
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
