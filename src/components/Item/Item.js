import ItemCount from "../ItemCount/index"
import { Card, Button } from "react-bootstrap";
import {products} from "../../data/product";
export default function Item({ count  }) {
  
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title> {products.name} </Card.Title>
          <Card.Text>
          {products.id}
          </Card.Text>
          <h3>$ </h3>
          <ItemCount  count={count} initial={1} stock={5} />
        </Card.Body>
      </Card>
  );
}