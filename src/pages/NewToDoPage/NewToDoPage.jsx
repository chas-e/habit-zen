import React, { Component } from 'react';
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';
import './NewToDoPage.css';

class NewToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="NewToDoPage">
                <h1> Enter A New ToDo: </h1>
                <NewToDoForm />
            </div>
        );
    }
}

export default NewToDoPage;
