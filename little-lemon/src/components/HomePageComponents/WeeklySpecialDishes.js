import { HStack, Box, Heading } from '@chakra-ui/react'
import DishesCard from './DishesCard'
const weeklyDishesStyles =  {
    backgroundColor: 'white',
    color: 'black'
}
function WeeklySpecialDishes(){
    return(
        <div className="WeeklyDishes" style ={weeklyDishesStyles}>
        <Box marginTop={20}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Heading paddingBottom={5}>Weekly Dishes</Heading>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'auto'}
                padding={25}>
                <HStack spacing = {6}>
                    <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                    <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                    <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                </HStack>
            </Box>
        </Box>
        </div>
    )
}

export default WeeklySpecialDishes