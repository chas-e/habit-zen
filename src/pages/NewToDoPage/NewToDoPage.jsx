import React, { Component } from 'react';
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';
import './NewToDoPage.css';

class NewToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = { newTodo: '', done: false }
    }
    


   
    // getInitialState = () => {
    //       return {checked: true}
    //     }
        // handleCheck= () => {
        //   this.setState({checked: !this.state.checked});
        // }
        // render = () => {
        //   var msg;
        //   if (this.state.checked) {
        //     msg = "Checked";
        //   } else {
        //     msg = "Un-checked";
        //   }
        //   return (
        //     <div>
        //       <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
        //       <p>Checkbox: {msg}</p>
        //     </div>
        //   );
        // );

    // }

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

// }

export default NewToDoPage;
