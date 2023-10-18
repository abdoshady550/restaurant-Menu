import React from 'react'
import { Row,Col } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
        <Col sm='12' className='justify-content-center text-center' >
            <div className='title'>Food Menu</div>
            
            <div className=' justify-content-center text-center d-flex'>
                <p className='under-line'></p>
            </div>

        </Col>

    </Row>
  )
}

export default Header