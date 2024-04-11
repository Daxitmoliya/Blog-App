import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateUser } from '../../services/action/user.action';

const UpdateData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.usersReducer);
    const [inputData, setInputData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateUser(inputData.id, inputData));
        navigate('/viewData');
    }

    return (
        <Container>
        <h2 className='text-center mt-5'>Form</h2>
        <Row>
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" name='category' value={inputData.category} onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Technology">Technology</option>
                            <option value="Sports">Sports</option>
                            <option value="Business">Business</option>
                            <option value="Health">Health</option>
                            <option value="Science">Science</option>
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter Title" value={inputData.title} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Blogger Name</Form.Label>
                        <Form.Control type="text" name='blogger_name' placeholder="Enter Blogger Name" value={inputData.blogger_name} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name='image' placeholder="Enter Image URL" value={inputData.image} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description' placeholder="Enter Description" value={inputData.description} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Row>
    </Container>
    );
}

export default UpdateData;
