import React, { useEffect, useState } from 'react';
import { Card, Container, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../../services/action/user.action';
import { useNavigate } from 'react-router';

const ViewData = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescriptionExpansion = (id) => {
        setExpandedDescriptions(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <Container>
            <h2>View User</h2>
            <Row>
                {users.map((user, index) => (
                    <OverlayTrigger
                        key={index}
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>Click to expand</Tooltip>}
                    >
                        <Card style={{ width: '18rem', margin: '0.5rem', maxWidth: '18rem' }} onClick={() => toggleDescriptionExpansion(user.id)}>
                            <Card.Img variant="top" src={user.image} alt="User Image" />
                            <Card.Body>
                                <Card.Title>{user.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">By {user.blogger_name}</Card.Subtitle>
                                <Card.Text>
                                    {expandedDescriptions[user.id] ? user.description : (
                                        <>
                                            {`${user.description.substring(0, 100)}... `}
                                        </>
                                    )}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </OverlayTrigger>
                ))}
            </Row>
        </Container>
    );
}

export default ViewData;
