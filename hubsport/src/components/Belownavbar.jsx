


import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, Icon, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaCheckCircle } from "react-icons/fa";

export const Belownavbar = () => {
    return (
        <>
            <Flex alignItems={"center"} bg='#eb5833' >

                <VStack color={"white"} ml={'100px'} mt="100px" textAlign={"left"}>
                    <Stack spacing={10}>
                        <Text as='b' textAlign={"left"}>HUBSPOT CRM PLATFORM</Text>
                        <Heading fontSize='6xl' textAlign={"left"}>Powerful,</Heading>
                        <Heading fontSize='6xl' textAlign={"left"}>not overpowering</Heading>
                        <Text>Finally, a CRM platform that’s
                            both powerful and easy to use. Create delightful c
                            ustomer experiences. Have a delightful time doing it.</Text>
                        <Button p={7} color={"gray"}>Start free or get demo</Button>
                        <Text pb={30}>Get started with free tools, or get <br /> more with our premium software.</Text>
                    </Stack>

                </VStack>
                <Image mr={0} style={{ height: "500px", width: "800px" }} src='https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png' />

            </Flex>
            <Stack mt={35}>
                <VStack>

                    <Heading mb={30}>The CRM Platform Your Whole Business Will Love</Heading>
                    <Text lineHeight={8} m={"auto"} w={"800px"} align={"left"}>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.</Text>
                </VStack>
                <Flex justifyContent='center' gap='5' m={10}>
                    <Button borderRadius='md' color='white' p={5} bg="#eb5833" >Get free CRM</Button>
                    <Button borderRadius='md' border='1px' color='orange.600' p={5} borderColor="orange">Demo primium CRM</Button>
                </Flex>
            </Stack>
            {/* Card section */}
            <Grid p={10} templateRows="auto" templateColumns="repeat(3,1fr)" w={"80%"} m="auto" gap={10}>
                <GridItem p={5} boxShadow='md'>
                    <Flex mb={5}>
                        <Image gap={10} boxSize={9} src='https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg' />
                        <Heading size={"lg"} >Marketing Hub</Heading>
                    </Flex>
                    <Text mb={50} align={"left"}>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</Text>
                    {/* <Divider /> */}
                    <hr />
                    <Text mt={5} size={18} align={"left"} mb={5}>Popular Features</Text>
                    {/* <CheckCircleIcon /> */}
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Lead generation</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Marketing automation</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Analytics</Text>
                    </Flex>
                    <Button borderRadius={3} mt={5} p={7} pl={10} pr={10} colorScheme='orange'>Start free or get a demo</Button>
                </GridItem>
                <GridItem p={5} boxShadow='md'>
                    <Flex mb={5}>
                        <Image gap={10} boxSize={9} src='https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg' />
                        <Heading size={"lg"} >Sales Hub</Heading>
                    </Flex>
                    <Text mb={50} align={"left"}>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</Text>
                    {/* <Divider /> */}
                    <hr />
                    <Text mt={5} size={18} align={"left"} mb={5}>Popular Features</Text>
                    {/* <CheckCircleIcon /> */}
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Advanced CRM</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Meeting scheduling</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Payments</Text>
                    </Flex>
                    <Button borderRadius={3} mt={5} p={7} pl={10} pr={10} colorScheme='orange'>Start free or get a demo</Button>
                </GridItem>
                <GridItem p={5} boxShadow='md'>
                    <Flex mb={5}>
                        <Image gap={10} boxSize={9} src='https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg' />
                        <Heading size={"lg"} >Service Hub</Heading>
                    </Flex>
                    <Text mb={50} align={"left"}>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.</Text>
                    {/* <Divider /> */}
                    <hr />
                    <Text mt={5} size={18} align={"left"} mb={5}>Popular Features</Text>
                    {/* <CheckCircleIcon /> */}
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Tickets</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Customer feedback</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Knowledge base</Text>
                    </Flex>
                    <Button borderRadius={3} mt={5} p={7} pl={10} pr={10} colorScheme='orange'>Start free or get a demo</Button>
                </GridItem>
                <GridItem p={5} boxShadow='md'>
                    <Flex mb={5}>
                        <Image gap={10} boxSize={9} src='https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg' />
                        <Heading size={"lg"} >CMS Hub</Heading>
                    </Flex>
                    <Text mb={50} align={"left"}>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</Text>
                    {/* <Divider /> */}
                    <hr />
                    <Text mt={5} size={18} align={"left"} mb={5}>Popular Features</Text>
                    {/* <CheckCircleIcon /> */}
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px"> Drag-and-drop editor</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">SEO recommendations</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Website themes</Text>
                    </Flex>
                    <Button borderRadius={3} mt={5} p={7} pl={10} pr={10} colorScheme='orange'>Start free or get a demo</Button>
                </GridItem>
                <GridItem p={5} boxShadow='md'>
                    <Flex mb={5}>
                        <Image gap={10} boxSize={9} src='https://www.hubspot.com/hubfs/product_icons_2022/OperationsHub_Icon_Gradient_RGB_24px.svg' />
                        <Heading size={"lg"} >Operations Hub</Heading>
                    </Flex>
                    <Text mb={30} align={"left"}>Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.</Text>
                    {/* <Divider /> */}
                    <hr />
                    <Text mt={5} size={18} align={"left"} mb={5}>Popular Features</Text>
                    {/* <CheckCircleIcon /> */}
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Data sync</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Programmable automation</Text>
                    </Flex>
                    <Flex m={3} >
                        <FaCheckCircle color="red" />
                        <Text ml={5} fontSize="12px">Data quality automation</Text>
                    </Flex>
                    <Button borderRadius={3} mt={5} p={7} pl={10} pr={10} colorScheme='orange'>Start free or get a demo</Button>
                </GridItem>

            </Grid>

            {/*  */}

            {/* Green part */}
            <Box color={"whiteAlpha.900"} bg={"#59b588"} p={40} >
                <VStack m={"auto"} w={"65%"} >
                    <Heading>Learn and grow with award-winning support and a thriving community behind you.</Heading>
                    <Text lineHeight={8}>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</Text>
                </VStack >
            </Box>



        </>
    )
}
