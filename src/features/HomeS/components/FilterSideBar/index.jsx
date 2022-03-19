import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterSideBar.module.scss';
import { FormGroup, Input, Label } from 'reactstrap';

function FilterSideBar(props) {
  return (
    <div className={styles.filterSideBar}>
      <div className={styles.filterSideBarHeader}>
        <p>Bộ lọc</p>
      </div>
      <div className={styles.filterSideBarContent}>
        <section>
          <p className="header text-dark">Giá</p>
          <FormGroup tag="fieldset">
            <ul>
              <li>
                <FormGroup check>
                  <Input name="price" type="radio" />
                  <Label className="mb-0" check>
                    Dưới 500.000đ
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="price" type="radio" />
                  <Label className="mb-0" check>
                    500.000đ - 1.000.000đ
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="price" type="radio" />
                  <Label className="mb-0" check>
                    1.000.000đ - 5.000.000đ
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="price" type="radio" />
                  <Label className="mb-0" check>
                    5.000.000đ - 10.000.000đ
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="price" type="radio" />
                  <Label className="mb-0" check>
                    Trên 10.000.000đ
                  </Label>
                </FormGroup>
              </li>
            </ul>
          </FormGroup>
        </section>
        <section>
          <p className="header text-dark">Hãng</p>
          <FormGroup tag="fieldset">
            <ul>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Acer
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Apple
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Hp
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Lenovo
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Samsung
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="firm" type="radio" />
                  <Label className="mb-0" check>
                    Toshiba
                  </Label>
                </FormGroup>
              </li>
            </ul>
          </FormGroup>
        </section>
        <section>
          <p className="header text-dark">Loại</p>
          <FormGroup tag="fieldset">
            <ul>
              <li>
                <FormGroup check>
                  <Input name="type-produce" type="radio" />
                  <Label className="mb-0" check>
                    Điện thoại
                  </Label>
                </FormGroup>
              </li>
              <li>
                <FormGroup check>
                  <Input name="type-produce" type="radio" />
                  <Label className="mb-0" check>
                    Laptop
                  </Label>
                </FormGroup>
              </li>
            </ul>
          </FormGroup>
        </section>
      </div>
    </div>
  );
}

FilterSideBar.propTypes = {};

export default FilterSideBar;
