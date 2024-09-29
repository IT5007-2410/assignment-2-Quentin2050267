/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
    {
        id: 1,
        name: 'Jack',
        phone: '88885555',
        email: 'jack@example.com',
        seatNumber: '01A',
        bookingTime: 'Sun Sep 28 2024',
    },
    {
        id: 2,
        name: 'Rose',
        phone: '88884444',
        email: 'rose@example.com',
        seatNumber: '02B',
        bookingTime: 'Sun Sep 29 2024',
    },
    {
        id: 3,
        name: 'John',
        phone: '88883333',
        email: 'john@example.com',
        seatNumber: '04A',
        bookingTime: 'Sun Sep 29 2024',
    },
    {
        id: 4,
        name: 'Doe',
        phone: '88882222',
        email: 'doe@example.com',
        seatNumber: '05B',
        bookingTime: 'Sun Sep 29 1900',
    },
];

let idCounter = initialTravellers.length + 1;

function TravellerRow(props) {
    {/*Q3. Placeholder to initialize local variable based on traveller prop.*/ }
    const { traveller, deleteTraveller } = props;
    return (
        <tr>
            {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
            <td>{traveller.id}</td>
            <td>{traveller.name}</td>
            <td>{traveller.phone}</td>
            <td>{traveller.email}</td>
            <td>{traveller.seatNumber}</td>
            <td>{traveller.bookingTime}</td>
            <td><button onClick={() => deleteTraveller(traveller)}>Delete</button></td>
        </tr>
    );
}

function Display(props) {
    const { travellers, deleteTraveller } = props;
    /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/

    const travellerRows = travellers.map(traveller => (
        <TravellerRow traveller={traveller} deleteTraveller={deleteTraveller} key={traveller.id} />
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
                    <th>Action</th>
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
        const form = document.forms.addTraveller;
        const seatPattern = /^[0][0-5][A-B]$/;
        if (!seatPattern.test(form.travellerseatnumber.value)) {
            alert('Invalid Seat Number');
            return;
        }
        const isSeatTaken = this.props.travellers.some(traveller => traveller.seatNumber === form.travellerseatnumber.value);
        if (isSeatTaken) {
            alert('Seat is already taken');
            return;
        }
        this.props.bookTraveller({
            name: form.travellername.value,
            phone: form.travellerphone.value,
            email: form.travelleremail.value,
            seatNumber: form.travellerseatnumber.value,
            bookingTime: new Date().toDateString(),
            id: idCounter,
        });
        form.travellername.value = '';
        form.travellerphone.value = '';
        form.travelleremail.value = '';
        form.travellerseatnumber.value = '';
        idCounter++;
        alert('Add Success!');
    }

    render() {
        return (
            <form name="addTraveller" onSubmit={this.handleSubmit} className="form">
                {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
                <input type="text" name="travellername" placeholder="Name" required />
                <input type="text" name="travellerphone" placeholder="Phone" required />
                <input type="email" name="travelleremail" placeholder="Email" required />
                <input type="text" name="travellerseatnumber" placeholder="Seat Number" required />
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
            <form name="deleteTraveller" onSubmit={this.handleSubmit} className="form">
                {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
                <input type="text" name="travellerid" placeholder="ID" required />
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
        const rows = 5;
        const cols = ['A', 'B'];
        const freeSeats = rows * cols.length - reservedSeats.length;

        seats.push(
            <div key="header" className="table-header">
                <span></span> {/* 空白占位符 */}
                {cols.map(col => (
                    <span key={col} className="col">{col}</span>
                ))}
            </div>);

        for (let i = 1; i <= rows; i++) {
            const rowNumber = i.toString().padStart(2, '0');
            seats.push(<span className="table-row" style={{ width: '20px' }}>{rowNumber} </span>);
            for (const col of cols) {
                const seatNumber = `${rowNumber}${col}`;
                const isReserved = reservedSeats.includes(seatNumber);
                seats.push(
                    <button
                        key={seatNumber}
                        className={`seat ${isReserved ? 'reservedSeat' : 'freeSeat'}`}
                    >
                        {/* {seatNumber} */}
                    </button>
                );
            }
            seats.push(<br />);
        }

        return (
            <div>
                <h2 className="free-seats-header">Free Seats Left: {freeSeats}</h2>
                <div className="seatingChart">
                    {seats}
                </div>
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
                {/* Q2. Placeholder for Homepage code that shows free seats visually. */}
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
        setTimeout(() => {
            this.setState({ travellers: initialTravellers });
        }, 50);
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
                <h1 className='title'>Ticket To Ride</h1>
                <div className="navbar">
                    { /*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}

                    <button onClick={() => this.setSelector(1)}>Homepage</button>
                    <button onClick={() => this.setSelector(2)}>Display</button>
                    <button onClick={() => this.setSelector(3)}>Add</button>
                    <button onClick={() => this.setSelector(4)}>Delete</button>
                </div>
                <div className='mainContainer'>
                    {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
                    {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
                    {this.state.selector === 1 && <Homepage travellers={this.state.travellers} />}
                    {/*Q3. Code to call component that Displays Travellers.*/}
                    {this.state.selector === 2 && <Display travellers={this.state.travellers} deleteTraveller={this.deleteTraveller} />}
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