import { Box, HStack, Text, Image, } from '@chakra-ui/react'

function About(){
    return(
            <Box
            maxW='100%'
            bgColor={'white'}
                >
                <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems = {'center'}
                    >
                    <HStack spacing={20}>
                        <Box
                        boxSize={'xl'}
                        height={'fit-content'}
                        color={'black'}
                        fontFamily={'Georgia, Times New Roman, Times, serif'}
                        border={'solid'}
                        padding={5}
                        borderTopLeftRadius={55}
                        borderBottomRightRadius={55}
                        borderColor={'#495E57'}
                            >
                            <Text
                            color={'#F4CE14'}
                            fontSize={'2.5em'}
                            >Us, Little Lemon <br></br>in Chicago is:</Text>
                            <Text
                            marginTop={10}
                            fontSize={'1.3em'}
                                >
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </Text>
                        </Box>
                        <Box boxSize={'2xl'} bg ={'white'}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Box marginRight={-10} marginTop={200}>
                                    <Image boxSize={'sm'}  src = {require('./homepageAssets/chefs1.jpg')} borderRadius={50}/>
                                </Box>
                                <Box marginBottom={100}>
                                    <Image boxSize={'sm'} src = {require('./homepageAssets/chefs2.jpg')}  borderRadius={50}/>
                                </Box>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </Box>
    )
}

export default About