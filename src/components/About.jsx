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
                            {t("Нашата История")}
                        </Heading>
                        <Divider width="80px" borderColor="red.500" mb={6} />
                        <Text fontSize="lg" mb={4} 
                        dangerouslySetInnerHTML={{
                            __html: t("about_text1")
                        }}
                        />
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
