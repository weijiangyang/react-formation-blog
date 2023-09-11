import { Button, Form } from "react-bootstrap";
import "../../../App.css";
import { FormEvent, useState } from "react";
const SendMessageForm = (props) => {
  const { saveNewMessage } = props;
  const [newMessage, setNewMessage] = useState({});
  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
      setNewMessage({ ...newMessage, [name]: value, date: new Date().toLocaleDateString() });
     
  };
    const handleSubmit = (event) => {
      event.preventDefault();
      saveNewMessage(newMessage);
     
      
  };
  return (
    <>
      <div className="formAddMessage mt-5">
        <h2>Nous contacter</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom de contact</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Nom de contact"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sujet</Form.Label>
            <Form.Control
              type="text"
              name="sujet"
              placeholder="Sujet"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="textarea"
              name="content"
              placeholder="message"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyez
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SendMessageForm;
