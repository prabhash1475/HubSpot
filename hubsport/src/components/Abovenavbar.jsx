import { Flex, Select, Option, Text, Container, HStack } from '@chakra-ui/react'
import React from 'react'

export const Abovenavbar = () => {
    return (
        <div>

            <Flex mr={20} ml={20} justifyContent='space-between'>
                <Flex>
                    <HStack>
                        <Select border="none" borde>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Arebic</option>
                            <option>Spanice</option>
                            <option>Germen</option>
                        </Select>
                        <Text>Contace Sales</Text>
                    </HStack>
                </Flex>
                <Flex>
                    <HStack>
                        <Text mr={10}>Login</Text>
                        <Text>Customer Support</Text>
                    </HStack>
                </Flex>
            </Flex>

        </div>
    )
}
