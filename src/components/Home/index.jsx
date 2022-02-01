import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { toast } from 'utils';


function HomePage(props) {
  const notify = () => toast.success("Wow so easy !");
  const notify2 = () => toast.warning("Wow so easy !");
  const notify3 = () => toast.error("Wow so easy !");
  const notify4 = () => toast.info("Wow so easy !");

  return (
    <div>
      <Button color="danger" className="d-block m-5"><Link className="text-light" to="/admin/login">Đăng nhập</Link></Button>
      <button onClick={notify} className="btn btn-success">Success!</button>
      <button onClick={notify2} className="btn btn-warning">Warning !</button>
      <button onClick={notify3} className="btn btn-danger">Error !</button>
      <button onClick={notify4} className="btn btn-primary">Info !</button>
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage

