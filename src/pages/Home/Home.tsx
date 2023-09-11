import { useState } from "react";
import fakeMessages from "./FakeMessages";
import { Button, Card } from "react-bootstrap";
import SendMessageForm from "./Form/SendMessageForm";
import AddPost from "../Posts/AddPost/AddPost";

const Home = () => {
  const [messages, setMessages] = useState(fakeMessages);
    const saveNewMessage = (newMessage) => {
        const copy = [newMessage, ...messages];
        setMessages(copy)
       
        
    }
  console.log(messages)
  
  const addPost = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className="container row">
        <div className=" mt-5 col-lg-8">
          <h2>Boite de reception</h2>
          {messages.map((message, index) => (
            <Card key={index}>
              <Card.Body className="row align-items-center">
                <Card.Text className="col-md-10 mr-4">
                  {message.content}
                 
                </Card.Text>
                <Card.Text className="col-md-10 mr-4 text-warning fst-italic">
                  
                  Crée le {message.date}
                </Card.Text>
                <Button variant="primary" className="col-md-2">
                  Voir
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="ml-5 col-lg-3 offset-md-1">
          <SendMessageForm saveNewMessage={saveNewMessage} />
        </div>
      </div>
      <AddPost addPost={ addPost } />
    </>
  );
};

export default Home;
