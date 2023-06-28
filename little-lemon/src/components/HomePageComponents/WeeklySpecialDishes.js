import { HStack, Box, Heading } from '@chakra-ui/react'
import DishesCard from './DishesCard'
const weeklyDishesStyles =  {
    backgroundColor: 'black',
    color: 'white'
}
function WeeklySpecialDishes(){
    return(
        <div className="WeeklyDishes" style ={weeklyDishesStyles}>
            <Box margin={'auto'} padding={50}>
                <Heading paddingBottom={5}>Weekly Dishes</Heading>
                <HStack spacing = {6}>
                <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                <DishesCard title = {'Calamari'} description = {'Delicious'} imageSrc={require('./lemondessert.jpg')}/>
                </HStack>
            </Box>
        </div>
    )
}

export default WeeklySpecialDishes