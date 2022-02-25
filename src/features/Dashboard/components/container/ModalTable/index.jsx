import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { PropTypes } from 'prop-types';

function ModalTable({ toggle, isOpen, item, name, close }) {
  return (
    <div>
      <Modal fade size="md" centered isOpen={isOpen} toggle={toggle} className={''}>
        <ModalHeader toggle={toggle}>Nếu bạn muốn xóa</ModalHeader>
        <ModalBody>
          Bạn có chắc muốn xóa <b className="text-danger">{item?.name || name}</b>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => close(item)}>
            Xóa
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalTable.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  item: PropTypes.object,
  closeL: PropTypes.func,
  name: PropTypes.string,
};

ModalTable.defaultProps = {
  toggle: null,
  isOpen: false,
  name: '',
};

export default ModalTable;
