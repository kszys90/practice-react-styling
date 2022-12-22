import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {

    const variant = 'primary'
    const size = 'lg'
    return (
        <Row>
            <Col>
                <RBButton variant={variant} size={size}>Button!</RBButton>
            </Col>
            <Col>
                <Button variant={variant} size={size}>Button!</Button>
            </Col>
        </Row>
    )
}

export default Task02;

