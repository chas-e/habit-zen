import React, { Component } from 'react';
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';
import './NewToDoPage.css';

class NewToDoPage extends Component {

    render() {
        return (
            <div className="NewToDoPage">
                <h4> Enter A New To Do List Item</h4>
                <br />
                <NewToDoForm
                    {...this.props}
                    todos={this.props.todos}
                    handleUpdateToDos={this.props.handleUpdateToDos}
                    handleChangeToDo={this.props.handleChangeToDo}
                    updateToDo={this.updateToDo}
                />
            </div >
        );
    }
}

export default NewToDoPage;
