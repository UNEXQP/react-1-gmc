import React from "react";
import 'bootstrap';
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import ProductData from "./components/Product";
import { Card } from 'react-bootstrap';
import './App.css'





const firstName = "rotimi";

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Img
          variant="top"
          src={ProductData.imageUrl }// Add your product image URL here
          alt="Product Image"
        />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Text>
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? (
          <>
            <h3>Hello, {firstName}!</h3>
            <img src={ProductData.imageUrl} alt="Hello" width="100" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}


export default App;
