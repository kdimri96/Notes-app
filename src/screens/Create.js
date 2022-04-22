import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import uniqid from 'uniqid';

const Create = ({setNotes}) => {
  const [form, setForm] = useState({ title: '', text: '' });
  const [id, setId] = useState(uniqid());

  function handleChange(event) {
     const {value, name} = event.target;
     setForm({...form, [name]: value, id});
     
  }
  
  function addNote(){
     
      setNotes(note => [...note, form]);
      setId(uniqid());
      setForm({title: '', text: ''});
     
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} value={form.title} name="title" type="text" placeholder="Please enter a title for the Notes" />
            
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Note</Form.Label>
            <Form.Control onChange={handleChange} value={form.text} name="text" type="text" placeholder="Start writing" />
          </Form.Group>
        </Form>
        <button onClick={addNote} className='btn btn-dark'>Add Note</button>
      </Container>
    </div>
  )
}

export default Create