import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function MyMain() {
  const [data, setData] = useState<boolean>(false);

  return (
    <Container>
      <Row>
        {data && (
          <Col xs={12} className=" d-flex justify-content-center">
            <div className=" fs-1 text-danger bg-darkgray">MEGA KEBAB</div>
          </Col>
        )}

        <Col xs={12} className=" d-flex justify-content-center mt-5">
          <Button onClick={() => setData(true)}>Change State</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyMain;
