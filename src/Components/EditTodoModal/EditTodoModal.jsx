import React, { useState }from 'react';
import { Modal, Button } from 'react-bootstrap'

const EditTodoModal = (props) => {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
            <span role="img" aria-label="edit">✏️</span>
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <input className="form-control" name="text" placeholder="New ToDo"  required />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button  onClick={this.props.handleEditToDo(todo)} variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    //   onClick={this.props.handleEditToDo}
    //   value={this.props.todo.text} onChange={this.handleChange}


export default EditTodoModal;