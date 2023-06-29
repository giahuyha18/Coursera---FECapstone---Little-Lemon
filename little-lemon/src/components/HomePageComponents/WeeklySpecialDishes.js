import { HStack, Box, Heading, Text } from '@chakra-ui/react'
import DishesCard from './DishesCard'
const weeklyDishesStyles =  {
    backgroundColor: 'white',
    color: 'black'
}
function WeeklySpecialDishes(){
    return(
        <div className="WeeklyDishes" style ={weeklyDishesStyles}>
        
        <Box
            marginTop={10}
            marginBottom={10}
            color={'black'}
            fontFamily={'Georgia, Times New Roman, Times, serif'}
            >
            <Box marginLeft={'12em'}>
                <Text fontSize={'3rem'}>Weekly Dishes</Text>
            </Box>
            <Box
                bg={'white'}
                maxW='70%'
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'auto'}
                padding={25}
                >
                <HStack spacing = {50}>
                    <DishesCard title = {'Calamari'} description = {'As iconic as usual fried squids'} imageSrc={require('./calamariDish.jpg')}/>
                    <DishesCard title = {'Moussaka'} description = {'An Greek eggplant-lamb-based dish.'} imageSrc={require('./moussakaDish.jpg')}/>
                    <DishesCard title = {'Calamari'} description = {'An Greek dessert!'} imageSrc={require('./baklavaDish2.jpg')}/>
                </HStack>
            </Box>
        </Box>
        </div>
    )
}

export default WeeklySpecialDishes