import React, { Component } from 'react';
import Header from "../../layout/header/Header";
import styles from './AddCourseForm.css';
import Select from 'react-select';
import { Input, Button } from 'antd';

const options = [
  { value: 'programming', label: 'PROGRAMMING' },
  { value: 'design', label: 'DESIGN' },
  { value: 'management', label: 'MANAGEMENT' }
];

class AddCourseForm extends Component {
  
  render() {
    return(
      <div className="addCourseForm">
        <Header/>
        <div className={styles.addCourseForm__layout}>
          <div className="addCourseForm__item">
            <div className="addCourseForm__itemHeader">
              Введите название курса
            </div>
            <div>
              <Input
                placeholder="Название курса"
              />
            </div>
          </div>
          <div className="addCourseForm__item">
            <div className="addCourseForm__itemHeader">
              Введите категорию курса
            </div>
            <div className={styles.itemSelect}>
              <Select options={options} />
            </div>
          </div>
          <div className="addCourseForm__item">
            <div className="addCourseForm__itemHeader">
              Видео
            </div>
            <div>
              <Input
                placeholder="Название видео"
              />
              <Input
                placeholder="URL к видео"
              />
            </div>
            <div>
              <Button type="primary" shape="circle" icon="plus" onClick={this.handleAddClick}>
                Добавить видео
              </Button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AddCourseForm;
