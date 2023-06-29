import {Card,CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, CardHeader, Box} from  '@chakra-ui/react'

const DishesCard = ({title, description, imageSrc}) => {
    return(
        <Card maxW='sm' borderRadius={26} bg = 'white' border={'2px'}>
          <CardHeader>
              <Image
                boxSize = {'sm'}
                src={imageSrc}
                objectFit='cover'
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