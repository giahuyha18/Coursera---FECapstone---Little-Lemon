import {Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button} from  '@chakra-ui/react'

const DishesCard = ({title, description, imageSrc}) => {
    return(
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={imageSrc}
            borderRadius='lg'
            border={'solid'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
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