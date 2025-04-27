import { Box, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import AboutImage from '../assets/company.jpg'

const About = () => {
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
                    <GridItem>
                        <Heading as="h3" size="lg" mb={4}>
                            Нашата История
                        </Heading>
                        <Divider width="80px" borderColor="red.500" mb={6} />
                        <Text fontSize="lg" mb={4}>
                            С над 25 години опит в областта на ремонта и поддръжката на
                            енергийно оборудване, нашата компания се утвърди като надежден
                            партньор за клиенти от целия енергиен сектор.
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            Основана през 1998 година, компанията започна своята дейност
                            с ремонт на силови трансформатори. През годините разширихме
                            нашата експертиза, за да предлагаме пълен спектър от услуги за
                            енергийния сектор.
                        </Text>
                        <Text fontSize="lg">
                            Нашият екип от висококвалифицирани специалисти гарантира
                            изпълнението на всеки проект с високо качество и в съответствие
                            с международните стандарти и изисквания.
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
