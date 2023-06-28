import { useState } from "react";
import CustomerInfoForm from "./ReserveTaleComponents/CustomerInfo"
import TableBookingForm from "./ReserveTaleComponents/TableBooking"
import useSubmit from "./hooks/useSubmit";
import Alert from "./Alert";

export default function ReserveTable(){
    return(
            <div className = "container-form">
                <TableBookingForm/>
            </div>
    )
}