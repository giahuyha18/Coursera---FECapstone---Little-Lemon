
import { Box, HStack, VStack, Heading, Text, Image, Container } from '@chakra-ui/react'
function Hero(){
    return(
        <Box
        maxW = "100%"
        bg={'#495E57'}
        >
            <Container maxW = "1 rem" color='white' margin= 'auto' centerContent>
                <HStack spacing={50}>
                    <Box color={'#F4CE14'} maxW={'sm'}>
                        <VStack spacing={2} alignItems={'left'}>
                            <Heading>Little Lemon</Heading>
                            <Heading color={'white'}>Chicago</Heading>
                            <Text color={'white'}>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</Text>
                        </VStack>
                    </Box>
                    <Box>
                        <Image
                            height = "457px"
                            width = "375px"
                            objectFit='cover'
                            src={require('./heroImage.jpg')}
                            alt='hero image'
                            borderRadius={16}
                        />
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}

export default Hero