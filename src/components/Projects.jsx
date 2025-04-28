import React from "react";
import { Box, Image, Text, Heading, SimpleGrid, Button, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const projects = [
    {
        title_uz: "AEK Kozloduy hududida rejali ta'mir ishlari",
        title_ru: "Плановые ремонты на территории АЭС Козлодуй ЕАД",
        title_en: "Scheduled Repairs at Kozloduy NPP",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/3ba7dbaca56c0e255eb533eaf5d4b916-720x560.jpg",
        description: "Energiya ishlab chiqarish loyihasi, zamonaviy texnologiyalar asosida qurilgan."
    },
    {
        title_uz: "Zavodlarda avtomat o'chirgichlarni modernizatsiya qilish",
        title_ru: "Ретрофит на выключатели в ТЭЦ «Захарни заводи»",
        title_en: "Retrofit of Circuit Breakers at 'Zaharni Zavodi' TPP",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/fb25f8b7e02d43d7ca79e36b9bad2fe6-720x560.jpg",
        description: "Elektr tarmoqlari uchun xavfsizlik paneli va monitoring tizimi."
    },
    {
        title_uz: "TP 32 turbina moyini regeneratsiya qilish",
        title_ru: "Регенерация отработанного турбинного масла ТП 32",
        title_en: "Regeneration of Used Turbine Oil TP 32",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/20d3020c4869ae63f550404baae96711-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "AES-3C Maritsa East 1 da favqulodda ta'mir",
        title_ru: "Аварийный ремонт в «ЕЙ И ЕС – 3С Марица изток 1» ЕООД",
        title_en: "Emergency Repair at 'AES-3C Maritsa East 1' Ltd",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/33de834a3ad59860e098b52824a8fe6b-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "KonturGlobal Maritsa East 3 da generator ta'miri",
        title_ru: "Ремонт генератора в «КонтурГлобал Марица Изток 3» АД",
        title_en: "Generator Repair at 'ContourGlobal Maritsa East 3'",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/72c5621f055f3adae2774b2645c0d7c2-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "TEC Maritsa East 2 da demontaj va montaj ishlari",
        title_ru: "Демонтаж и монтаж в ТЭЦ «Марица Изток 2» ЕАД",
        title_en: "Dismantling and Installation at TPP 'Maritsa East 2'",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/3a5ab9b9506d0b230a0b9b5c44c9f910-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "KCM Plovdivda UTMRU 6300/35 tipidagi transformatorning kapital ta'miri",
        title_ru: "Капитальный ремонт трансформатора тип: УТМРУ 6300/35 ф.№ 17842 – КЦМ АД г. Пловдив",
        title_en: "Major Overhaul of Transformer Type: UTMRU 6300/35 No. 17842 – KCM Plc Plovdiv",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/8ed23687e832f8e0b2fe8cf74bd0e4c4-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "NEOHIM zavodida 321-pozitsiyadagi beshta elektr dvigatelini almashtirish",
        title_ru: "Замена пяти электродвигателей на поз. 321 – Цех 608 «НЕОХИМ» АД – Димитровград",
        title_en: "Replacement of Five Electric Motors at Position 321 – Workshop 608 'NEOHIM' Plc – Dimitrovgrad",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/IMG_0060-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title_uz: "TEC Gorna Oryaxovitsada uskunalarni yetkazib berish, demontaj va montaj",
        title_ru: "Поставка, демонтаж и монтаж аппаратуры в ТЭЦ «Горна Оряховица»",
        title_en: "Supply, Dismantling, and Installation of Equipment at TPP 'Gorna Oryahovitsa'",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/1d2fe922ab67371b6d2c9c76274c06ca-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    }
];


export default function ProjectCards() {
    const { t, i18n } = useTranslation()
    return (
        <Box p={6} maxW="1200px" pb={'72px'} mx="auto">
            <Heading size="xl" textAlign="center" mb={2}>{t("Реализирани Проекти")}</Heading>
            <Text fontStyle="italic" textAlign="center" mb={6}>{t("По-значими изпълнени проекти")}</Text>
            <Tabs width={{ base: "100%", lg: '600px' }} variant="unstyled" m={'auto'} mb={8} isFitted>
                <TabList flexWrap={'wrap'} justifyContent="center" gap={4}>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>{t("ВСИЧКИ ПРОЕКТИ")}</Tab>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>{t("МОНТАЖ")}</Tab>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>{t("РЕМОНТ")}</Tab>
                </TabList>
            </Tabs>

            <SimpleGrid columns={{ base: 1, md: 3 }} mt={'60px'} spacing={6}>
                {projects.map((project, index) => (
                    <Box key={index} boxShadow="md" borderRadius="xl" overflow="hidden" _hover={{ transform: "scale(1.02)", boxShadow: "lg" }} transition="all 0.3s">
                        <Image src={project.image} alt={project.title} objectFit="cover" w="100%" h="200px" />
                        <Box p={4}>
                            <Heading {...css.title} mb={2}>{project[`title_${i18n?.language}`]}</Heading>
                            {/* <Button mt={'24px'} {...css.button} variant="outline" size="sm">{t("Batafsil")}</Button> */}
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}


const css = {
    button: {
        height: "45px",
        width: "150px",
        fontSize: "16px",
        lineHeight: "24px",
        transition: "0.3s",

        _hover: {
            backgroundColor: "#E53E3E",
            color: "#fff"
        }
    },
    title: {
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "500"
    }
}