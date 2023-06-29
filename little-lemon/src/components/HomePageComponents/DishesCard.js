import {Card,CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, CardHeader} from  '@chakra-ui/react'

const DishesCard = ({title, description, imageSrc}) => {
    return(
        <Card maxW='md' borderRadius={26} bg = 'white' border={'2px'}>
          <CardHeader padding={-5}>
            <Image
                src={imageSrc}
                borderRadius='26'
              />
          </CardHeader>
          <CardBody>
            <Stack mt='6' spacing='2'>
              <Heading size='md'>{title}</Heading>
              <Text>
                {description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $26
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                See More
              </Button>
          </CardFooter>
        </Card>
    );
}

export default DishesCard;