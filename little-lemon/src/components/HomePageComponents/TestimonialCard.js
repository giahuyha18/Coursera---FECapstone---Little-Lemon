import {Avatar, Card, CardBody, CardHeader, CardFooter, Button, Text, Heading, HStack, Divider} from  '@chakra-ui/react'
const TestimonialsCard = ({avatarSrc, testimonialName, comment}) =>{
    return(
    <Card>
        <CardHeader>
          <HStack>
            <Avatar src= {avatarSrc}/>
            <Heading size='md'>{testimonialName}</Heading>
          </HStack>
        </CardHeader>
        <Divider/>
        <CardBody>
          <Text>{comment}</Text>
        </CardBody>
        <CardFooter>
          <Button>See More</Button>
        </CardFooter>
    </Card>
    );
}

export default TestimonialsCard;