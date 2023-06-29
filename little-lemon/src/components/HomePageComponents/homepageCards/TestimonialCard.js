import {Avatar, Box, Card, CardBody, CardHeader, CardFooter, Button, Text, Heading, HStack, Divider} from  '@chakra-ui/react'
const TestimonialsCard = ({avatarSrc, testimonialName, comment}) =>{
    return(
    <Card fontFamily={'Georgia, Times New Roman, Times, serif'}>
        <CardHeader>
          <Box>
            <HStack>
              <Avatar src= {avatarSrc}/>
              <Heading size='md'>{testimonialName}</Heading>
            </HStack>
          </Box>
        </CardHeader>
        <Divider/>
        <CardBody>
          <Text>{comment}</Text>
        </CardBody>
    </Card>
    );
}

export default TestimonialsCard;