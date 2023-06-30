import Table from 'react-bootstrap/Table';
import { FaPen } from "react-icons/fa";
import './List.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BaseSingle from '../BaseSingle/BaseSingle';

const myList = [
    {
        id: 1,
        firstName: 'A',
        lastName: 'B',
        userName: '@AB'
    },
    {
        id: 2,
        firstName: 'A1',
        lastName: 'B1',
        userName: '@AB1'
    },
    {
        id: 3,
        firstName: 'C',
        lastName: 'V',
        userName: '@CV'
    },
]

function List() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setSelectedItem((prevSelectedItem) => ({
            ...prevSelectedItem,
            [id]: value,
        }));
    };
    return (
        <div>
            <BaseSingle />
            <div >
                <div className='header'></div>
                <div className='main'>
                    <div class="container">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>User Name</th>
                                    <th>orther</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myList.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.userName}</td>
                                        <td className='Pen' onClick={() => handleShow(item)}><FaPen /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row form-group">
                                    <label className="col-md-3 col-lg-3" htmlFor="firstName">First Name</label>
                                    <input type="text" className="col-md-6 col-lg-6 input-text" id="firstName" value={selectedItem?.firstName} onChange={handleInputChange} />
                                </div>
                                <div className="row form-group">
                                    <label className="col-md-3 col-lg-3" htmlFor="lastName">Last Name</label>
                                    <input type="text" className="col-md-6 col-lg-6 input-text" id="lastName" value={selectedItem?.lastName} onChange={handleInputChange} />
                                </div>
                                <div className="row form-group">
                                    <label className="col-md-3 col-lg-3" htmlFor="userName">User Name</label>
                                    <input type="text" className="col-md-6 col-lg-6 input-text" id="userName" value={selectedItem?.userName} onChange={handleInputChange} />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;