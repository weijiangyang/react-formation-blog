import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOnePost, getOnePosts } from '../../../services/api/posts';
import { Button, Card } from 'react-bootstrap';

const InfoPost = () => {
    const [post, setPost] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const findPost = async () => {
            const response = await getOnePost(id)
            setPost(response)
            
        }
        findPost()
    },[])
    
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">
            <a href="/posts" className="text-decoration-none text-white">
              Retour
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoPost
