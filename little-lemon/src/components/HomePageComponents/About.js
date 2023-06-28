import { Box, HStack, VStack, Heading, Text, Image, Container, Flex, Center } from '@chakra-ui/react'

const AboutStyles ={
    backgroundColor: 'black',
    color: 'white'
}
function About(){
    return(
        <div className="About" style={AboutStyles}>
            <h1>About Us</h1>
            <Box margin={5} padding={5}>
                <Box display={'flex'} 
                justifyContent={'center'}
                alignItems = {'center'}>
                    <HStack>
                        <Box boxSize={'md'}>
                            <Heading>Little Lemon <br></br>Chicago</Heading>
                            <Text margin={10}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </Text>
                        </Box>
                        <Box boxSize={'lg'} bg ={'white'}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Box margin={5}>
                                    <Image src = {require('./chefs1.jpg')}/>
                                </Box>
                                <Box margin={5}>
                                    <Image src = {require('./chefs2.jpg')}/>
                                </Box>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </div>
    )
}

export default About