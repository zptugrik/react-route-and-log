import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function ModalDialog(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = (signOut) => {
        setShow(false);
        if(signOut) props.userSignOut();
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Link to={"/"} className="nav-link">
                <li className="nav-item" onClick={handleShow}>LogOut</li>
            </Link>
            <Modal show={show} onHide={() => handleClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title >Log Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(true)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDialog;