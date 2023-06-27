function TableBookingForm(){
    return(
        <div className = "form" style={{backgroundColor: 'black', color: 'white'}}>
            <form>
                <input type="text" required placeholder={'number of people'}/>
            </form>
        </div>
    )
}

export default TableBookingForm