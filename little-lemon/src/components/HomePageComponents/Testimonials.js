import TestimonialsCard from "./homepageCards/TestimonialCard"
import { HStack, Box, Heading, Text } from "@chakra-ui/react";
const testimonialsStyles ={
    backgroundColor: 'white',
    color: 'white'
}
function Testimonials(){
    return(
        <div className="Testimonials" style={testimonialsStyles}>
            <Box
            maxW='100%'
            color={"black"}
            borderRadius={36}
            marginBottom={10}
            fontFamily={'Georgia, Times New Roman, Times, serif'}
            >
                <Box display={'flex'} justifyContent={'center'} paddingTop={10}>
                    <Text fontSize={'50px'}>Testimonials</Text>
                </Box>
                <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems = {'center'}
                padding={10}
                >
                    <HStack spacing = {50}>
                        <TestimonialsCard testimonialName = {'Dan Abrahmov'} avatarSrc = {require('./homepageAssets/restaurantchefB.jpg')} comment = {'It was great'}
                        />
                        <TestimonialsCard testimonialName = {'George Kim'} avatarSrc = {require('./homepageAssets/restaurantchefB.jpg')} comment = {'It was ok'}
                        />
                        <TestimonialsCard testimonialName = {'Donald Rosling'} avatarSrc = {require('./homepageAssets/restaurantchefB.jpg')} comment = {'It was comfortable'}
                        />
                    </HStack>
                </Box>
            </Box>
        </div>
    )
}

export default Testimonials;