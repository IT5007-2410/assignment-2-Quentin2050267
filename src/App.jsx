const styles = {
    seatingChart: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    },
    seat: {
        width: '50px',
        height: '50px',
        border: 'none',
        // cursor: 'pointer',
    },
    freeSeat: {
        backgroundColor: 'green',
    },
    reservedSeat: {
        backgroundColor: 'grey',
    },
};

/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
    {
        id: 1,
        name: 'Jack',
        phone: '88885555',
        email: 'jack@example.com',
        seatNumber: '12A',
        bookingTime: 'Sun Sep 28 2024',
    },
    {
        id: 2,
        name: 'Rose',
        phone: '88884444',
        email: 'rose@example.com',
        seatNumber: '12B',
        bookingTime: 'Sun Sep 29 2024',
    },
    {
        id: 3,
        name: 'John',
        phone: '88883333',
        email: 'john@example.com',
        seatNumber: '14C',
        bookingTime: 'Sun Sep 29 2024',
    },
    {
        id: 4,
        name: 'Doe',
        phone: '88882222',
        email: 'doe@example.com',
        seatNumber: '14D',
        bookingTime: 'Sun Sep 29 1900',
    },
];





function TravellerRow(props) {
    {/*Q3. Placeholder to initialize local variable based on traveller prop.*/ }
    const { traveller } = props;
    return (
        <tr>
            {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
            <td>{traveller.id}</td>
            <td>{traveller.name}</td>
            <td>{traveller.phone}</td>
            <td>{traveller.email}</td>
            <td>{traveller.seatNumber}</td>
            <td>{traveller.bookingTime}</td>
        </tr>
    );
}






function Display(props) {

    /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
    const travellerRows = props.travellers.map(traveller => (
        <TravellerRow traveller={traveller} />
    ));

    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Seat Number</th>
                    <th>Booking Time</th>
                </tr>
            </thead>
            <tbody>
                {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
                {travellerRows}
            </tbody>
        </table>
    );
}





class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nextId: this.props.travellers.length + 1 };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
        const form = document.forms.addTraveller;
        this.props.bookTraveller({
            name: form.travellername.value,
            phone: form.travellerphone.value,
            email: form.travelleremail.value,
            seatNumber: form.travellerseatnumber.value,
            bookingTime: new Date().toDateString(),
            id: this.state.nextId,
        });
        form.travellername.value = '';
        form.travellerphone.value = '';
        form.travelleremail.value = '';
        form.travellerseatnumber.value = '';
        // form.travellerbookingtime.value = '';
        // form.travellerid.value = '';
        this.setState({ nextId: this.state.nextId + 1 });
        alert('Add Success!');
    }

    render() {
        return (
            <form name="addTraveller" onSubmit={this.handleSubmit}>
                {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
                <input type="text" name="travellername" placeholder="Name" />
                <input type="text" name="travellerphone" placeholder="Phone" />
                <input type="text" name="travelleremail" placeholder="Email" />
                <input type="text" name="travellerseatnumber" placeholder="Seat Number" />
                {/* <input type="text" name="travellerbookingtime" placeholder="Booking Time" /> */}
                {/* <input type="text" name="travellerid" placeholder="ID" /> */}
                <button>Add</button>
            </form>
        );
    }
}







class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
        const form = document.forms.deleteTraveller;
        const id = parseInt(form.travellerid.value, 10);
        this.props.deleteTraveller({
            id: id,
        });
        form.travellerid.value = '';
        alert('Delete Success!');
    }

    render() {
        return (
            <form name="deleteTraveller" onSubmit={this.handleSubmit}>
                {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
                {/* <input type="text" name="travellername" placeholder="Name" /> */}
                <input type="text" name="travellerid" placeholder="ID" />
                <button>Delete</button>
            </form>
        );
    }
}



class DisplayFreeSeats extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { travellers } = this.props;
        const reservedSeats = travellers.map(traveller => traveller.seatNumber);

        const seats = [];
        const rows = 20;
        const cols = ['A', 'B', 'C', 'D', 'E', 'F'];
        const freeSeats = rows * cols.length - reservedSeats.length;

        for (let i = 1; i <= rows; i++) {
            const rowNumber = i.toString().padStart(2, '0');
            for (const col of cols) {
                const seatNumber = `${rowNumber}${col}`;
                const isReserved = reservedSeats.includes(seatNumber);
                seats.push(
                    <button
                        key={seatNumber}
                        className={`seat ${isReserved ? 'reserved' : 'free'}`}
                        style={{
                            ...styles.seat,
                            ...(isReserved ? styles.reservedSeat : styles.freeSeat),
                        }}
                    >
                        {/* {seatNumber} */}
                    </button>
                );
            }
        }

        return (
            <div style={styles.seatingChart}>
                <h2>Free Seats: {freeSeats}</h2>
                {seats}
            </div>
        );
    }
}



class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { travellers: [], isLoading: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ travellers: this.props.travellers, isLoading: false });
        }, 100);
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
                <DisplayFreeSeats travellers={this.state.travellers} />
            </div>);
    }
}



class TicketToRide extends React.Component {
    constructor() {
        super();
        this.state = { travellers: [], selector: 1 };
        this.bookTraveller = this.bookTraveller.bind(this);
        this.deleteTraveller = this.deleteTraveller.bind(this);
    }

    setSelector(value) {
        /*Q2. Function to set the value of component selector variable based on user's button click.*/
        this.setState({ selector: value });
    }
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        // setTimeout(() => {
        this.setState({ travellers: initialTravellers });
        // }, 500);
    }

    bookTraveller(passenger) {
        /*Q4. Write code to add a passenger to the traveller state variable.*/
        this.setState({ travellers: this.state.travellers.concat(passenger) });
    }

    deleteTraveller(passenger) {
        /*Q5. Write code to delete a passenger from the traveller state variable.*/
        this.setState({ travellers: this.state.travellers.filter(traveller => traveller.id !== passenger.id) });
    }
    render() {
        return (
            <div>
                <h1>Ticket To Ride</h1>
                <div>
                    { /*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
                    <button onClick={() => this.setSelector(1)}>Homepage</button>
                    <button onClick={() => this.setSelector(2)}>Display</button>
                    <button onClick={() => this.setSelector(3)}>Add</button>
                    <button onClick={() => this.setSelector(4)}>Delete</button>

                </div>
                <div>
                    {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
                    {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
                    {this.state.selector === 1 && <Homepage travellers={this.state.travellers} />}
                    {/*Q3. Code to call component that Displays Travellers.*/}
                    {this.state.selector === 2 && <Display travellers={this.state.travellers} />}
                    {/*Q4. Code to call the component that adds a traveller.*/}
                    {this.state.selector === 3 && <Add bookTraveller={this.bookTraveller} travellers={this.state.travellers} />}
                    {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
                    {this.state.selector === 4 && <Delete deleteTraveller={this.deleteTraveller} />}
                </div>
            </div>
        );
    }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
