import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";


const Header = () => {


  return (
    <Navbar bg="secondary" variant="dark" className="mb-3" style={{ height: 80 ,position: "fixed",
      top: 0,
      width: "100%",
      left: 0,
      right:0, zIndex : 1000}}>
      <Container>
        <Navbar.Brand>
          <a to="/">Shopping Cart</a>
        </Navbar.Brand>
        
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              
            />
          </Navbar.Text>
        
        
          

      </Container>
    </Navbar>
  );
};

export default Header;