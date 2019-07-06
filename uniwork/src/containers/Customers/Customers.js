import React, { Component } from 'react';
import './Customers.css';
import { Table } from 'antd';
import history from '../../history';
import { NavLink } from "react-router-dom";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <NavLink to={'/customers/1/info'}>{text}</NavLink>,
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  }
];

const data = [
  {
    id: '1',
    name: 'John James Brown',
    organization: "Novosibirsk State Technical University"
  },
  {
    id: '2',
    name: 'John James Brown',
    organization: "Novosibirsk State Technical University"
  }
];

class Customers extends Component {
  handleClick(e, href) {
    e.preventDefault();
    history.push(href);
  }

  render() {
    return(
      <div className="customers">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    )
  }
}

export default Customers;
