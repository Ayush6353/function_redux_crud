import React, { useState } from "react";
import { Space, Table, Tag, Button, Modal ,message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_data, remove_data, update_data } from "../action/action";

const { Column } = Table;

const DataUplod = () => {
  const dispatch = useDispatch();
  const setAllData = useSelector((state) => state.reducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AllfachData, setAllfachData] = useState("");
  const [editbtn, setEditbtn] = useState(true);
  const [eid, setEid] = useState("");
  const [error, seterror] = useState("");
  const [isedit, setisEdit] = useState(false);
  const FormSubmit = (e) => {
    e.preventDefault();
    const index = setAllData.length + 1;
    let patt =
      /^[A-Za-z1-100._]{4,}[0-9]{0,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passPatt = /^[A-Za-z]{0,}[0-9]{0,}[A-Za-z]{0,}@/;
    const randomid = Math.floor(Math.random() * 10000 + 1);
    if (!password && !email) {
      message.error('enter your email and password!',[2]);
    } else if (!patt.test(email)) {
      message.error('enter your correct email!',[2]);
    } else if (!passPatt.test(password)) {
      message.error('enter your correct password!',[2]);
    } else if (!password) {
      message.error('enter your password!',[2]);
    } else if (password.length < 6) {
      message.error('enter your 6 digit password!',[2]);
    } else if (!email) {
      message.error('enter your email!',[2]);
    } else if (email && password && !editbtn) {
      dispatch(update_data({ id: eid, email, password }));
      setEditbtn(true);
      setEmail("");
      setPassword("");
      message.success('Edit successfully',[2]);
    } else {
      dispatch(add_data({ id: index, email, password }));
      setEmail("");
      setPassword("");
      message.success('success',[2]);
    }
  };

  const handledelete = (id) => {
    dispatch(remove_data({ id: id }));
    message.warning('Delete successfully',[2]);

  };
  const handleEdit = (id) => {
    const edata = setAllData.find((e) => {
      return e.id === id;
    });
    setEditbtn(false);
    setEmail(edata.email);
    setPassword(edata.password);
    setisEdit(true);
    setEid(edata.id);
  };

  const color = {
    color: "red",
  };

  return (
    <div className="main">
      <div className="main_form">
        <form className="form_m1" onSubmit={FormSubmit}>
          <div className="form_d1">
            <h1>Login Form</h1>
            <br />
            <input
              type="text"
              className="input_f1"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              className="input_f1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            {editbtn ? (
              <button className="button_f1" title="login" type="submit">
                Login
              </button>
            ) : (
              <button className="button_f1" title="Edit" type="submit">
                Edit
              </button>
            )}
            {/* <label style={color}>{error}</label> */}
          </div>
        </form>
      </div>
      <br />
      <div className="antd_main">
        <div className="antd">
          <Table dataSource={setAllData}>
            <Column title="ID" dataIndex="id" key="id " />
            <Column title="EMAIL" dataIndex="email" key="email" />
            <Column title="PASSWORD" dataIndex="password" key="password" />
            <Column
              title="ACTION"
              key="action"
              render={(record) => (
                <Space size="middle">
                  <Button
                    onClick={() => {
                      handleEdit(record.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handledelete(record.id);
                    }}
                  >
                    Delete
                  </Button>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataUplod;
