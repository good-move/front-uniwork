import React, { Component } from 'react';
import Header from "../../layout/header/Header";
import styles from './CourseInfo.css';
import ReactPlayer from 'react-player';
import {NavLink} from "react-router-dom";

const data = {
  "id": 0,
  "name": "Как посадить огурцы",
  "personId": 0,
  "topics": [
    {
      "id": 0,
      "topicType": "PROGRAMMING"
    }
  ],
  "videos": [
    {
      "id": 0,
      "title": "Посадка огурцов от А до Я",
      "url": "https://www.youtube.com/watch?v=3DhjlY6oIWI&t=56s"
    },
    {
      "id": 1,
      "title": "Посадка огурцов от А до Я",
      "url": "https://www.youtube.com/watch?v=3DhjlY6oIWI&t=56s"
    },
    {
      "id": 2,
      "title": "Посадка огурцов от А до Я",
      "url": "https://www.youtube.com/watch?v=3DhjlY6oIWI&t=56s"
    }
  ]
};

class CourseInfo extends Component {
  render() {
    return (
      <div className="courseInfo">
        <Header/>
        <div className={styles.courseInfo__layout}>
          <NavLink to={'/accounts/462827'}>
            Вернуться назад
          </NavLink>
          <div className={styles.courseInfo__infoItem}>
            {data.name}
          </div>
          <div className={styles.courseInfo__infoItem}>
            {data.topics.map(item => (
              <div className={styles.topicItem}>
                {item.topicType}
              </div>
            ))}
          </div>
          <div className={styles.courseInfo__infoItem}>
            {data.videos.map(item => (
              <div>
                <div>
                  {item.title}
                </div>
                <ReactPlayer url={item.url} playing />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CourseInfo;
