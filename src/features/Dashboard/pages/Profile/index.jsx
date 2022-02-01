import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "assets/img/img-user.png";
import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row, Tooltip } from 'reactstrap';
import Home from '../Home';
import styles from "./Profile.module.scss";

function Profile() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(state => state.login);

  return (
    <Home name="Profile">
      <Container fluid className="px-3">
        <Col>
          <Row>
            <main className={styles.mainProfile}>
              <div className={styles.mainProfileBg}></div>
              <div className={styles.mainProfileBody}>
                <div className={styles.mainProfileBody__header}>
                  <img src={img} alt="" className={styles.mainProfileBody__avatar} />
                  <div>
                    <p>{user && user?.fullname}</p>
                    <p className="text-muted">{user && user?.role_id?.name}</p>
                  </div>
                </div>
                <div className={styles.mainProfileBody__main}>
                  <div className="main-profile--body__box">
                    <div className={styles.mainProfileBody__boxTitle}>
                      <span>Profile Information</span>
                      <FontAwesomeIcon icon={faPen} id="tooltip-edit-proifle" />
                      <Tooltip
                        placement="top"
                        isOpen={open}
                        flip
                        target="tooltip-edit-proifle"
                        toggle={() => setOpen(!open)}
                      >
                        Edit Profile
                      </Tooltip>
                    </div>
                    <div className={clsx("my-3", styles.mainProfileBody__boxDesc)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur qui distinctio officia sequi odit mollitia architecto, ullam dolor consequuntur eaque, impedit reiciendis dolore est sapiente blanditiis repellat veniam laboriosam.</div>
                    <div className="mt-3">
                      <span className="fw-bold me-3">Full Name:</span>
                      <span>{user && user?.fullname}</span>
                    </div>
                    <div className="mt-3">
                      <span className="fw-bold me-3">Mobile:</span>
                      <span>{user && user?.phone_number}</span>
                    </div>
                    <div className="mt-3">
                      <span className="fw-bold me-3">Email:</span>
                      <span>{user && user?.email}</span>
                    </div>
                    <div className="mt-3">
                      <span className="fw-bold me-3">Address:</span>
                      <span>{user && user?.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </Row>
        </Col>
      </Container>
    </Home>
  )
}

Profile.propTypes = {

}

export default Profile

