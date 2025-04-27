import React from "react";
import { Box, Image, Text, Heading, SimpleGrid, Button, Tabs, TabList, Tab } from "@chakra-ui/react";

const projects = [
    {
        title: "Atom Elektr Stansiyasi",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Kozloduy_NPP.jpg",
        description: "Energiya ishlab chiqarish loyihasi, zamonaviy texnologiyalar asosida qurilgan."
    },
    {
        title: "Siemens Panel",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Siemens_Electrical_Breaker_Panel.jpg",
        description: "Elektr tarmoqlari uchun xavfsizlik paneli va monitoring tizimi."
    },
    {
        title: "Havo Tizimi",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Industrial_Air_Compressor_System.jpg",
        description: "Sanoat uchun havo kompressorlari va filtratsiya tizimi."
    }
];

export default function ProjectCards() {
    return (
        <Box p={6} maxW="1200px" mx="auto">
            <Heading size="xl" textAlign="center" mb={2}>Реализирани Проекти</Heading>
            <Text fontStyle="italic" textAlign="center" mb={6}>По-значими изпълнени проекти</Text>

            <Tabs width={'600px'} variant="unstyled" m={'auto'} mb={8} isFitted>
                <TabList justifyContent="center" gap={4}>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>ВСИЧКИ ПРОЕКТИ</Tab>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>МОНТАЖ</Tab>
                    <Tab _selected={{ borderBottom: "2px solid red", color: "red.500" }}>РЕМОНТ</Tab>
                </TabList>
            </Tabs>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {projects.map((project, index) => (
                    <Box key={index} boxShadow="md" borderRadius="xl" overflow="hidden" _hover={{ transform: "scale(1.02)", boxShadow: "lg" }} transition="all 0.3s">
                        <Image src={project.image} alt={project.title} objectFit="cover" w="100%" h="200px" />
                        <Box p={4}>
                            <Heading size="md" mb={2}>{project.title}</Heading>
                            <Text fontSize="sm" mb={3}>{project.description}</Text>
                            <Button {...css.button} variant="outline" size="sm">Batafsil</Button>
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
            color:"#fff"
        }
    }
}