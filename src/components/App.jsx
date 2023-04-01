import { Component } from "react";
import { nanoid } from "nanoid";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleSubmit = ({ name, number }) => {
    this.state.contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(name + " is already in your contacts.")
      : this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name, number: number },
          ],
        }));
  };

  filterNames = (e) => {
    const filterValue = e.target.value;
    this.setState({ filter: filterValue });
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const loverCaseFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(loverCaseFilter)
    );

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeName={this.filterNames} />
        <Contacts contacts={filteredContacts} onDeleteContact={this.handleDelete} />
      </div>
    );
  }
}

export default App;