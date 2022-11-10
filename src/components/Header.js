import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="/"> Flomarkt</Link>
            countProducts ={12}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
