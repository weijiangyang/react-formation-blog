import { useEffect, useState } from "react";

import { getOnePost } from "../../../services/api/posts";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const UpdatePost = (props) => {
  const { updatePost, id } = props;
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const findPost = async () => {
      const response = await getOnePost(id);
      setPost(response);
    };
    findPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const copy = { ...post, [name]: value };
    setPost(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost(post);
  };
  return (
    <div>
      <>
        <h2>Modify un article</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              placeholder=" titre"
              name="title"
              value={post.title}
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
              value={post.body}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
};

export default UpdatePost;
