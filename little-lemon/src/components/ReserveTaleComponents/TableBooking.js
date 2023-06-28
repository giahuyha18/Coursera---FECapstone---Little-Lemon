import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import * as Yup from 'yup';
import {
    Box,
    Button,
    Radio, RadioGroup,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    HStack,
  } from "@chakra-ui/react";
import "./formStyles.css";
import CustomerInfoForm from './CustomerInfo';

function InOutDiningOnly() {
    const [value, setValue] = React.useState('Both')
    return (
      <RadioGroup onChange={setValue} value={value} size = 'sm' >
        <VStack direction='row' spacing={2} margin={2}>
          <Radio w = '100%' value='Indoor Only' borderColor={'green'} >Indoor Only</Radio>
          <Radio w = '100%' value='Outdoor Only' borderColor={'green'}>Outdoor Only</Radio>
          <Radio w = '100%' value='Both' borderColor={'green'}>Both</Radio>
        </VStack>
      </RadioGroup>
    )
  }

export const TableBookingForm = () =>{
    const { isLoading, isTableFormDone, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        // Form validation
        initialValues: {
          numDiners: "",
          dateTime: "",
          seatingRequest: "Both"
        },
        onSubmit: (values) => {
          submit("", values);
        },
        validationSchema: Yup.object({
          dateTime: Yup.string().required("Required"),
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
    const displayCusInfo = isTableFormDone ? <CustomerInfoForm/> : "";
    return(
        <ChakraProvider>
            <VStack className ="container-form" spacing = "7">
                <Heading as='h2' size='xl'>Table Details</Heading>
                <Box>
                    <form onSubmit={formik.handleSubmit}>
                        <Box w = '100%'>
                            <FormControl>
                                <FormLabel>Number of Diners</FormLabel>
                                <Select
                                id = "numDiners"
                                size = 'md'
                                bg = "white"
                                className = "selectNumDiners"
                                {...formik.getFieldProps("numDiners")}>
                                    <option value='1-2'>1-2</option>
                                    <option value='3-4'>3-4</option>
                                    <option value='5-6'>5-6</option>
                                    <option value='7-8'>7-8</option>
                                    <option value='More than 8'>More than 8</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w='100%'>
                            <FormControl isInvalid={!!formik.errors.dateTime && formik.touched.dateTime}>
                                <FormLabel>Date and Time</FormLabel>
                                <Input
                                id='dateTime'
                                type = "datetime-local"
                                bg = 'white' size = 'sm' placeholder='Select Date and Time'
                                {...formik.getFieldProps("dateTime")}
                                />
                                <FormErrorMessage>{formik.errors.dateTime}</FormErrorMessage>
                            </FormControl>
                        </Box>
                        {InOutDiningOnly()}
                        <Button type = "submit" colorScheme='orange' size='sm' isLoading={isLoading}>Check Availability</Button>
                    </form>
                </Box>
                <Box>
                  {displayCusInfo}
                </Box>
            </VStack>
        </ChakraProvider>
    )
}

export default TableBookingForm;