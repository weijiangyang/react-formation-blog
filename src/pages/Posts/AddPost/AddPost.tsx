import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddPost = (props) => {
  const { addPost } = props;
  const [post, setPost] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value,id:11 });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(post);
  };

  return (
    <>
      <h2>Ajout d'un article</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            type="text"
            placeholder=" titre"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Post</Form.Label>
          <Form.Control
            type="textarea"
            placeholder=" titre"
            height="40px"
            name="body"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddPost;
