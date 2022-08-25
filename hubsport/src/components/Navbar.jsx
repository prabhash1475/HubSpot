import { Button, Flex, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <Flex justifyContent={"space-around"} alignItems={'center'}>
                <HStack gap={10}  >
                    <Image boxSize='120px' src="https://download.logo.wine/logo/HubSpot/HubSpot-Logo.wine.png" alt='hubsport' />
                    <Heading colorScheme='gray' fontSize={20}>Software</Heading>
                    <Heading colorScheme='gray' fontSize={20}>Pricing</Heading>
                    <Heading colorScheme='gray' fontSize={20}>Resourses</Heading>
                </HStack>
                <Button colorScheme='orange'>Start free or get a demo</Button>
            </Flex>
        </div>
    )
}
