import CustomerInfoForm from "./ReserveTaleComponents/CustomerInfo"
import TableBookingForm from "./ReserveTaleComponents/TableBooking"

export default function ReserveTable(){
    let tableFormDone = false;
    let formDisplay;
    tableFormDone ? formDisplay = <CustomerInfoForm/>: formDisplay = <TableBookingForm/>;
    return(
        <div className = "container-form">
            {formDisplay}
        </div>
    )
}