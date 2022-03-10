import React from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import MainContent from 'features/HomeS/components/containers/MainContent';

function Contact(props) {
  return (
    <PageRoot>
      <Helmet>
        <title>Liên hệ</title>
      </Helmet>
      <MainContent>
        <h4 className="text-center text-primary">Liên hệ</h4>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="fullname">Họ và tên</Label>
              <Input id="fullname" name="fullname" type="text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" type="email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Số điện thoại</Label>
              <Input id="phoneNumber" name="phoneNumber" type="number" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Địa chỉ</Label>
              <Input id="address" name="address" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleText">Ý kiến</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>
        <Button size="md" color="primary" className="mb-3">
          Gửi phản hôi
        </Button>
      </MainContent>
    </PageRoot>
  );
}

Contact.propTypes = {};

export default Contact;
