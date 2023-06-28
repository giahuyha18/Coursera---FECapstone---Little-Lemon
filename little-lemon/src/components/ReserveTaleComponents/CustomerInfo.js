import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import useSubmitCusInfo from '../hooks/useSubmitCusInfo';
import { useAlertContext } from "../context/alertContext";
import * as Yup from 'yup';
import {
    Box,
    Button,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
    HStack,
  } from "@chakra-ui/react";
import "./formStyles.css";

export const CustomerInfoForm = () =>{
    const { isLoading, response, submit} = useSubmitCusInfo();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        // Form validation
        initialValues: {
            reservationName: "",
            email:"",
            specialRequest: "",
        },
        onSubmit: (values) => {
          submit("", values);
        },
        validationSchema: Yup.object({
          reservationName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
        })
      });

    // Show an alert when the form is submitted successfully
    useEffect(() => {
      if (response) {
        onOpen(response.type, response.message);
        // Reset the form if the response is successful
        if (response.type === "error")
          formik.resetForm();
      }
    }, [response]);
    return(
        <ChakraProvider>
            <VStack>
                <Heading>Your Contact Info</Heading>
                <Box>
                <form onSubmit={formik.handleSubmit}>
                    <Box>
                        <FormControl isInvalid={!!formik.errors.reservationName && formik.touched.reservationName}>
                            <FormLabel htmlFor="reservationName">Reservation Name</FormLabel>
                                <Input
                                    bg = 'white'
                                    id="reservationName"
                                    name="reservationName"
                                    {...formik.getFieldProps("reservationName")} // Make the Input components from Chakra UI controlled components
                                    />
                                    {/* Show the error messages for each field when the field is touched and the validation fails */}
                                <FormErrorMessage>{formik.errors.reservationName}</FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                            {/* Show the error messages for each field when the field is touched and the validation fails */}
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                bg = 'white'
                                id="email"
                                name="email"
                                type="email"
                                {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                            />
                            {/* Show the error messages for each field when the field is touched and the validation fails */}
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                            <FormLabel>Your special request(Optional)</FormLabel>
                            <Textarea
                                bg = 'white'
                                id="specialRequest"
                                name="specialRequest"
                                height={250}
                                {...formik.getFieldProps("specialRequest")}
                            />
                            {/* Show the error messages for each field when the field is touched and the validation fails */}
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                        Reserve Your Table
                    </Button>
                </form>
                </Box>
            </VStack>
        </ChakraProvider>
    )
}

export default CustomerInfoForm;