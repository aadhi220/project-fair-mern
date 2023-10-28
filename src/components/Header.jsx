import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ContainerOutsideExample() {
  return (
    <Container >
      <Navbar fixed="top"  className="bg-success">
        <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>  <Navbar.Brand style={{fontSize:'1.5rem'}} className='text-white' ><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</Navbar.Brand></Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;