import {Avatar, Card, CardBody, CardHeader, CardFooter, Button, Text, Heading} from  '@chakra-ui/react'
const TestimonialsCard = ({avatarSrc, testimonialName, comment}) =>{
    return(
    <Card>
        <CardHeader>
            <Avatar src= {avatarSrc}/>
            <Heading size='md'>{testimonialName}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{comment}</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
    </Card>
    );
}

export default TestimonialsCard;