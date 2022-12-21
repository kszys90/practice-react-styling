import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    const variant = 'primary'
    return (
        <Row>
            <Col>
                <RBAlert variant={variant}>Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <Alert variant={variant}>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
            </Col>
        </Row>
    )
}

export default Task01;

