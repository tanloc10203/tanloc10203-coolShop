import React from 'react';
import PropTypes from 'prop-types';
import Home from 'features/Dashboard/pages/Home';
import Markdown from '../../Markdown';
import { Col, Container, Row } from 'reactstrap';
import FormikForm from 'customs/customForm/FormikForm';

// name: { type: String, required: true, unique: true },
//   price: { type: Number, required: true, unique: true },
//   thumbnail: { type: String },
//   num: { type: Number },
//   key_product: String,
//   category_id: { type: ObjectId, ref: "Category" },

function NewProduct(props) {
  const isAddMode = true;
  const initialValues = {};
  const validationSchema = {};
  const handleOnSubmit = () => {};

  return (
    <Home name="Thêm sản phẩm">
      <Container>
        <Row>
          <Col md={12}>
            <FormikForm
              className="mt-5"
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleOnSubmit}
              action={isAddMode ? 'Thêm mới' : 'Chỉnh sửa'}
              isAddMode={isAddMode}
            >
              <Markdown />
            </FormikForm>
          </Col>
        </Row>
      </Container>
    </Home>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
