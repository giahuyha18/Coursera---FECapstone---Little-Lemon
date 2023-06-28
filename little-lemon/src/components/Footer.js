import { Box, HStack, VStack, Heading, Text, Image, Container, Button, ButtonGroup } from '@chakra-ui/react'
export default function Footer(){
    return(
        <>
            <div style={{backgroundColor: '#495E57'}}>
                Footer
                <Box display={'flex'} justifyContent={'center'} paddingBottom={10} bg={'#495E57'}>
                    <Box>
                        <HStack spacing={20}>
                            <Box display = {'flex'}  justifyContent={'center'} alignItems={'center'}>
                                <Image boxSize = {'150px'} src = {require('./bwmLogo.png')}/>
                            </Box>
                            <Box>
                                <ButtonGroup>
                                    <VStack align={'stretch'}>
                                        <Heading>Navigation</Heading>
                                        <Button>Home</Button>
                                        <Button>About</Button>
                                        <Button>Reservation</Button>
                                        <Button>Order Online</Button>
                                    </VStack>
                                </ButtonGroup>
                            </Box>
                            <Box>
                                <Heading>Contact</Heading>
                                <Text>
                                    Address <br></br>
                                    Phone Number <br></br>
                                    Email
                                </Text>
                            </Box>
                            <Box>
                                <Heading>Social Media Links</Heading>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </div>
        </>
    );
}