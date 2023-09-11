import React, { useEffect, useState } from "react";
import {
  getAllPosts,
  getOnePost,
  updateOnePost,
} from "../../../services/api/posts";
import { Button, Card } from "react-bootstrap";
import AddPost from "../AddPost/AddPost";
import UpdatePost from "../UpdatePost/UpdatePost";

const PosteListe = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadAllPosts = async () => {
      const response = await getAllPosts();
      setPosts(response.data.slice(0, 10));
    };
    loadAllPosts();
  }, []);
  const [modifyId, setModifyId] = useState(0);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };
  const [isUpdate, setUpdate] = useState(false);
  const handleUpdate = (id) => {
    setUpdate(true);
    setModifyId(id);
    console.log(id);
    
  };
  const addForm = () => {
    setUpdate(false);
  }
  const updatePost = async (updatedPost) => {
    const response = await updateOnePost(updatedPost.id, updatedPost);
    if (response.status === 200) {
      const postsCopy = [...posts];
      const index = postsCopy.findIndex((el) => el.id == updatedPost.id);
      postsCopy.splice(index, 1, response.data);
      setPosts(postsCopy);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-7">
            <div className="row d-flex ">
              <h2 className="col-8">Liste des articles</h2>
            <Button variant="outline-secondary" className="col-2" onClick={addForm}>
              Ajouter
            </Button>
            </div>
            
            {posts.map((post, index) => (
              <Card key={index}>
                <Card.Body>
                  <div className="row align-items-start">
                    <div className="col-9">
                      <Card.Title>
                        {post.id} : {post.title}{" "}
                      </Card.Title>

                      <Card.Text>{post.body}</Card.Text>
                    </div>
                    <div className="col-3 d-flex gap-2">
                      <Button variant="outline-secondary">
                        <a href={`posts/${post.id}`}>Voir</a>
                      </Button>{" "}
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleUpdate(post.id)}
                      >
                        Modifier
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="col-5">
            {isUpdate ? (
              <UpdatePost updatePost={updatePost} id={modifyId} />
            ) : (
              <AddPost addPost={addPost} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PosteListe;
