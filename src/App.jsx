/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1,
    name: 'Jack',
    phone: 88885555,
    bookingTime: new Date(),
  },
  {
    id: 2,
    name: 'Rose',
    phone: 88884444,
    bookingTime: new Date(),
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
      <td>{traveller.bookingTime.toDateString()}</td>
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
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Add</button>
      </form>
    );
  }
}







class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}



function DisplayFreeSeats(props) {
  const { totalSeats, travellers } = props;
  const freeSeats = totalSeats - travellers.length;
  return (
    <div>
      <h3>Free Seats: {freeSeats}</h3>
    </div>
  );
}



class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
        <h2>Homepage</h2>
        <DisplayFreeSeats totalSeats={10} travellers={initialTravellers} />
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
    }, 500);
  }

  bookTraveller(passenger) {
    /*Q4. Write code to add a passenger to the traveller state variable.*/
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
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
          {this.state.selector === 1 && <Homepage />}          

          {/*Q3. Code to call component that Displays Travellers.*/}
          {this.state.selector === 2 && <Display travellers={this.state.travellers} />}

          {/*Q4. Code to call the component that adds a traveller.*/}
          {this.state.selector === 3 && <Add />}
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {this.state.selector === 4 && <Delete />}
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
