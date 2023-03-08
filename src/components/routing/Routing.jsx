import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Calculator from '../calculator/Calculator';
import Home from '../pages/navbar/Home';
// import NavBar from '../pages/navbar/NavBar';
import Todo from '../todo/Todo';
import Weather from '../weather/Weather';
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom'

function Routing() {
  return (
    <div>
        <Nav>
        <Nav.Item>
          <Nav.Link href="/">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to='/Todo'> Todo </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
          <Link to='/Calculator'> Calculator </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link >
          <Link to='/Weather'> Weather </Link>
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Todo' element={<Todo/>} />
        <Route path='/Calculator' element={<Calculator/>} />
        <Route path='/Weather' element={<Weather/>} />        
      </Routes>
     
    </div>
  )
}

export default Routing