import TestimonialsCard from "./TestimonialCard"
import { HStack, Box, Heading } from "@chakra-ui/react";
const testimonialsStyles ={
    backgroundColor: 'white',
    color: 'white'
}
function Testimonials(){
    return(
        <div className="Testimonials" style={testimonialsStyles}>
            <Box 
            bg = {'#495E57'} 
            color={"black"} 
            borderRadius={36} 
            marginLeft={20} 
            marginRight={20}

            >
                <Box display={'flex'} justifyContent={'center'}>
                    <Heading>Testimonials</Heading>
                </Box>
                <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems = {'center'}
                padding={10}>
                    <HStack spacing = {5}>
                        <TestimonialsCard testimonialName = {'Dan Abrahmov'} avatarSrc = {require('./restaurantchefB.jpg')} comment = {'It was great'}
                        />
                        <TestimonialsCard testimonialName = {'Dan Abrahmov'} avatarSrc = {require('./restaurantchefB.jpg')} comment = {'It was great'}
                        />
                        <TestimonialsCard testimonialName = {'Dan Abrahmov'} avatarSrc = {require('./restaurantchefB.jpg')} comment = {'It was great'}
                        />
                    </HStack>
                </Box>
            </Box>
        </div>
    )
}

export default Testimonials;