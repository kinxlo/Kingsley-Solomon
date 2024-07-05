import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectBox from "../components/drawer/ProjectBox";
import Nav from "../components/startMenu/Nav";
import { AppContext } from "../context/AppContext";
import Profile from "../components/startMenu/Profile";
import DigitalResume from "../components/resume/DigitalResume";
import Hero from "../components/startMenu/Hero";
import ContactMenu from "../components/startMenu/ContactMenu";
import ProductivityLayout from "../components/startMenu/ProductivityLayout";
import ProjectScreen from "../components/startMenu/ProjectScreen";
import { profileAnimation } from "../gsap";
import { tools, languages } from "../public/tools";
import Map from "../components/startMenu/Map";

const imageUrls = [
    // "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720194103/portfolio/qi1qbonhxjwxa567llhd.jpg",
    "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720194103/portfolio/ohibyxwfhootgzsmsl0k.jpg",
    // Add more image URLs here
];

const MobileLayout = () => {
    const { switchView } = useContext(AppContext);
    const { colorMode, toggleColorMode } = useColorMode();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const image = (
        <Box display={switchView !== `profile` && switchView !== `resume` ? `none` : `block`} bg={``} height={`100%`} pos='relative'>
            {/* <AnimatePresence> */}
            {/* <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ height: "100%" }}
                > */}
            <Image loading='eager' width={`100%`} height={`100%`} objectFit={`cover`} src={imageUrls[currentImageIndex]} alt={`profile-pic`} />
            <Box pos='absolute' top={0} left={0} width='100%' height='100%' bg='crimson' opacity={0.2} mixBlendMode={`multiply`} />
            <Flex
                px={`1.5em`}
                width={`100%`}
                pos={`absolute`}
                bottom={`1.5em`}
                zIndex={999}
                as={`span`}
                letterSpacing={`1px`}
                justifyContent={{ base: `center`, lg: `start` }}
            >
                <Text color={`lightBg`} fontSize={`xs`}>
                    Photo Credit: @kinxlo
                </Text>
            </Flex>
            {/* </motion.div> */}
            {/* </AnimatePresence> */}
        </Box>
    );

    const display = () => {
        switch (switchView) {
            case `profile`:
                return <Profile />;
            // case `resume`:
            //   return <DigitalResume />;
            case `projects`:
                return <ProjectBox />;
            case `tools`:
                return <ProductivityLayout title={`Languages`} tools={tools} languages={languages} />;
            default:
                return <Profile />;
        }
    };

    const screen = () => {
        switch (switchView) {
            case `profile`:
                return image;
            case `resume`:
                return image;
            case `projects`:
                return <ProjectScreen />;
            case `tools`:
                return <Map />;
            default:
                return image;
        }
    };

    useEffect(() => {
        profileAnimation();
    }, []);

    return (
        // !isLoading &&
        <>
            {/* <div className='cursor'></div> */}
            <Nav />
            <ContactMenu />
            <Button
                borderRadius={`100%`}
                boxSize={`3em`}
                backgroundColor={`rgba(0,0,0,0.5)`}
                color={`lightBg`}
                p={0}
                pos={`fixed`}
                top={`1.5em`}
                zIndex={999}
                right={`1.5em`}
                onClick={toggleColorMode}
                className={`action-btn`}
            >
                <Image
                    src={colorMode === `light` ? `https://img.icons8.com/officel/20/000000/moon.png` : `https://img.icons8.com/officel/20/000000/sun.png`}
                    alt='img'
                />
            </Button>
            <Box
                display={{ base: `none`, lg: `block` }}
                id='profileBox'
                width={`100vw`}
                height={`100vh`}
                zIndex={500}
                pos={`fixed`}
                top={0}
                left={{ lg: `60%`, xl: `50%` }}
                bg={colorMode == `light` ? `lightBg` : `darkBg`}
            ></Box>
            {display()}
            <Hero>{screen()}</Hero>
        </>
    );
};

export default MobileLayout;
