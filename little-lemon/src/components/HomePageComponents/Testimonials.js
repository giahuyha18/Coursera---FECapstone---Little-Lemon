import TestimonialsCard from "./TestimonialCard"
import { HStack, Box } from "@chakra-ui/react";
const testimonialsStyles ={
    backgroundColor: 'black',
    color: 'white'
}
function Testimonials(){
    return(
        <div className="Testimonials" style={testimonialsStyles}>
            <h1>Testimonial Section</h1>
            <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems = {'center'}
            bg={"white"}
            padding={10}>
                <HStack spacing = {5}>
                    <TestimonialsCard name = {'Dan Abrahmov'} avatarSrc = {require('https://bit.ly/dan-abramov')} comment = {'It was great'}
                    />
                    <TestimonialsCard name = {'Dan Abrahmov'} avatarSrc = {require('https://bit.ly/dan-abramov')} comment = {'It was great'}
                    />
                    <TestimonialsCard name = {'Dan Abrahmov'} avatarSrc = {require('https://bit.ly/dan-abramov')} comment = {'It was great'}
                    />
                </HStack>
            </Box>
        </div>
    )
}

export default Testimonials;