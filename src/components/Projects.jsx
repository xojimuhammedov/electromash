import React from "react";
import { Box, Image, Text, Heading, SimpleGrid, Button, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const projects = [
    {
        title: "Планови ремонти на територията на АЕЦ Козлодуй ЕАД",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/3ba7dbaca56c0e255eb533eaf5d4b916-720x560.jpg",
        description: "Energiya ishlab chiqarish loyihasi, zamonaviy texnologiyalar asosida qurilgan."
    },
    {
        title: "Ретрофит на прекъсвачи в ТЕЦ “Захарни заводи”",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/fb25f8b7e02d43d7ca79e36b9bad2fe6-720x560.jpg",
        description: "Elektr tarmoqlari uchun xavfsizlik paneli va monitoring tizimi."
    },
    {
        title: "Регенерация на отработено турбинно масло ТП 32",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/20d3020c4869ae63f550404baae96711-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Авариен ремонт в „Ей И Ес – 3С Марица изток 1“ ЕООД",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/33de834a3ad59860e098b52824a8fe6b-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Ремонт на генератор в „КонтурГлобал Марица Изток 3“ АД",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/72c5621f055f3adae2774b2645c0d7c2-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Демонтаж и монтаж в ТЕЦ „Марица Изток 2” ЕАД",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/3a5ab9b9506d0b230a0b9b5c44c9f910-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Основен ремонт на трансформатор тип: УТМРУ 6300 / 35 ф.№ 17842 – КЦМ АД гр. Пловдив",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/8ed23687e832f8e0b2fe8cf74bd0e4c4-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Подмяна на пет броя електродвигатели на поз. 321 – Цех 608 „НЕОХИМ” АД – Димитровград",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/IMG_0060-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    },
    {
        title: "Доставка, демонтаж и монтаж на апаратура в ТЕЦ „Горна Оряховица“",
        image: "https://enimex-bg.com/wp-content/uploads/2020/12/1d2fe922ab67371b6d2c9c76274c06ca-720x560.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    }
];

export default function ProjectCards() {
    const { t } = useTranslation()
    return (
        <Box p={6} maxW="1200px" pb={'72px'} mx="auto">
            <Heading size="xl" textAlign="center" mb={2}>{t("Реализирани Проекти")}</Heading>
            <Text fontStyle="italic" textAlign="center" mb={6}>{t("По-значими изпълнени проекти")}</Text>

            <Tabs width={'600px'} variant="unstyled" m={'auto'} mb={8} isFitted>
                <TabList justifyContent="center" gap={4}>
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
                            <Heading {...css.title} mb={2}>{project.title}</Heading>
                            <Button mt={'24px'} {...css.button} variant="outline" size="sm">{t("Batafsil")}</Button>
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