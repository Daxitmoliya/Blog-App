
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createUser } from '../../services/action/user.action';
import { useNavigate } from 'react-router';

const CreateData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        category: '',
        title: '',
        blogger_name: '',
        image: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(inputData));
        navigate('/viewData');
    }

    return (
       <center>
         <Container>
            <h2 className='form-title'>Form</h2>
            <Row className="form-container">
                <Form onSubmit={handleSubmit} className='mt-4'>
                    <Row className="mb-3 form-group">
                        <Form.Group as={Col}>
                            <Form.Label className="form-label">Category</Form.Label>
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
                    <Button variant="primary" type="submit" className="submit-button">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
       </center>
    );
}

export default CreateData;
