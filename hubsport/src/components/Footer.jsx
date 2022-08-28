import React from 'react'
import { Box, Container, Divider, Flex, Grid, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaMaxcdn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <Box p={50} color={"whiteAlpha.600"} mt={20} bg={"#213343"}>
                <Flex fontSize={13} m="auto" w="90%">


                    <Flex gap={20}>
                        <Box gap={10}>
                            <Text p="10px" fontWeight="bold" color="White" >Popular Features</Text>
                            <Text p="10px">Free Meeting Scheduler App</Text>
                            <Text p="10px">Social Media Tools</Text>
                            <Text p="10px">Email Tracking Software</Text>
                            <Text p="10px">Sales Email Automation</Text>
                            <Text p="10px">Ads Software</Text>
                            <Text p="10px">Email Marketing Software</Text>
                            <Text p="10px">Lead Management Software</Text>
                            <Text p="10px">Pipeline Management Tools</Text>

                        </Box>
                        <Box>
                            <Text p="10px" fontWeight="bold" size={20} color="White" >Sales Email Templates</Text>
                            <Text p="10px">Sales Email Templates</Text>
                            <Text p="10px">Help Desk Software</Text>
                            <Text p="10px">Free Online Form Builder</Text>
                            <Text p="10px">Free Landing Page Builder</Text>
                            <Text p="10px">Marketing Analytics</Text>
                            <Text p="10px">Marketing Analytics</Text>
                            <Text p="10px">Lead Management Software</Text>
                            <Text p="10px">Free Chatbot Builder</Text>
                        </Box>
                        <Box borderRight={"1px solid white"}></Box>
                    </Flex>

                    <Flex gap={20}>
                        <Box ml="20px" gap={10}>
                            <Text p="10px" fontWeight="bold" size={20} color="White" >Free Tools</Text>
                            <Text p="10px">Website Grader</Text>
                            <Text p="10px">Make My Persona</Text>
                            <Text p="10px">Email Signature Generator</Text>
                            <Text p="10px">Blog Ideas Generator</Text>
                            <Text p="10px">Invoice Template Generator</Text>
                            <Text p="10px">Marketing Plan Generator</Text>
                            <Text p="10px">Free Business Templates</Text>
                            <Text p="10px">Industry Benchmark Data</Text>
                            <Text p="10px">Software Comparisons</Text>
                            <Text p="10px">Library</Text>
                            <Text p="10px">Website Themes & Templates</Text>
                        </Box>
                        <Box>
                            <Text p="10px" fontWeight="bold" size={20} color="White">Company</Text>
                            <Text p="10px">About Us</Text>
                            <Text p="10px">careers</Text>
                            <Text p="10px">Managment team</Text>
                            <Text p="10px">Bord of directors</Text>
                            <Text p="10px">Invester Relation</Text>
                            <Text p="10px">Blog</Text>
                            <Text p="10px">Contact Us</Text>

                        </Box>
                        <Box>
                            <Text p="10px" fontWeight="bold" size={20} color="White" >Customers</Text>
                            <Text p="10px">Customer Support</Text>
                            <Text p="10px">Join a local group</Text>
                            <Text mt={30} fontWeight="bold" size={20} color="White" p="10px">Partners</Text>
                            <Text p="10px">All Partner Programs</Text>
                            <Text p="10px">Solutions Partner Program</Text>
                            <Text p="10px">App Partner Program</Text>
                            <Text p="10px">Website Themes & Templates</Text>
                            <Text p="10px">HubSpot for Startups</Text>
                            <Text p="10px">Affiliate Program</Text>

                        </Box>
                    </Flex>
                </Flex>
                <Box mt={100}>
                    <Grid m={"auto"} templateColumns={"repeat(3,1fr)"} w="90%" gap="10px">
                        <Stack mt="10px" borderTop={"1px solid white"}></Stack>
                        <HStack gap="30px">

                            <FaFacebookF size={"30px"} />
                            <FaInstagram size={" 30px"} />
                            <FaLinkedin size={" 30px"} />
                            <FaTwitter size={" 30px"} />
                            <FaYoutube size={" 30px"} />
                            <FaTiktok size={"30px"} />
                            <FaMaxcdn size="30px" />
                        </HStack>
                        <Stack mt="10px" borderTop={"1px solid white"}></Stack>
                    </Grid>
                </Box>

                <Text fontSize={"12px"} mt={5}>Copyright © 2022 HubSpot, Inc.</Text>
                <Flex fontSize={"12px"} justifyContent={"center"} >
                    <HStack >
                        <Text textDecor={"underline"}>Legal Stuff</Text>

                        <Text textDecor={"underline"}>Privacy Policy</Text>

                        <Text textDecor={"underline"}>Security</Text>
                    </HStack>
                </Flex>

            </Box>
        </>
    )
}
