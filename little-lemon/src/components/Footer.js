import { Box, HStack, VStack, Heading, Text, Image, Container, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <>
            <div style={{backgroundColor: '#495E57'}}>
                <Box display={'flex'} justifyContent={'center'} paddingBottom={10} bg={'#495E57'}>
                    <Box padding={10}>
                        <HStack spacing={20} alignItems={'-moz-initial'}>
                            <Box display = {'flex'}  justifyContent={'center'} alignItems={'center'}>
                                <Image boxSize = {'150px'} src = {require('./globalAssets/footerLogo.jpg')}/>
                            </Box>
                            <Box>
                                <ButtonGroup>
                                    <VStack align={'stretch'}>
                                        <Heading>Navigation</Heading>
                                        <Link to="">Home</Link>
                                        <Link to="/reservetable">Reserve Table</Link>
                                        <Link to = "/orderonline"> Order Online</Link>
                                        <Link></Link>
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