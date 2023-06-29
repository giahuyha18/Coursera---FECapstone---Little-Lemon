import { Box, HStack, VStack, Heading, Text, Image, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Hero(){
    return(
        <Box
            display={'flex'}
            maxW = "100%"
            bg={'radial-gradient(circle, rgba(73,94,87,1) 0%, rgba(244,206,20,0.958420868347339) 100%)'}
            justifyContent={'center'}
            marginTop={25}
            borderRadius={25}
            >
            <Box
                padding={10}
                >
                <HStack
                    spacing={20}
                    alignItems={'start'}
                    >
                    <Box
                        color={'#ffffff'}
                        maxW={'md'}
                        fontFamily={'Georgia, Times New Roman, Times, serif'}
                        >
                        <Text color={'#F4CE14'} fontSize={'3em'}>Little Lemon</Text>
                        <Text fontSize={'2em'}>in Chicago</Text>
                        <Box
                            marginTop={10}
                            >
                            <Text fontSize={'1.3em'}>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                        </Box>
                        <Link to = "/reservetable">
                            <Box
                                as='button'
                                borderRadius='md'
                                bg='#F4CE14'
                                color='black'
                                px={12} h={16}
                                marginTop = {5}
                                >
                                Reserve a Table
                            </Box>
                        </Link>
                    </Box>
                    <Box maxW={'sm'}>
                        <Image
                            height = "457px"
                            width = "375px"
                            marginBottom={-40}
                            src={require('./homepageAssets/heroImage.jpg')}
                            alt='hero image'
                            borderRadius={16}
                        />
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}

export default Hero