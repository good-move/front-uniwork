import React, { Component } from 'react';
import Header from "../../layout/header/Header";
import styles from './PersonalAccount.css';
import {NavLink} from "react-router-dom";

const data = {
  "birthDate": "10.10.1987",
  "courses": [
    {
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
          "title": "string",
          "url": "string"
        }
      ]
    },
    {
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
          "title": "string",
          "url": "string"
        }
      ]
    },
    {
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
          "title": "string",
          "url": "string"
        }
      ]
    }
  ],
  "education": "НГТУ",
  "firstName": "Александр",
  "id": 0,
  "lastName": "Пастушков",
  "login": "string",
  "middleName": "Николаевич",
  "organization": "Дрова и перила",
  "skills": [
    {
      "id": 0,
      "topicType": "PROGRAMMING"
    }
  ],
  "type": "USER"
};

class PersonalAccount extends Component {
  render() {
    return (
      <div className="personalAccount">
        <Header/>
        <div className={styles.personalAccount__layout}>
          <div className={styles.personalAccount__personalInfo}>
            <div className="personalAccount__infoItem">
              {`${data.lastName} ${data.firstName} ${data.middleName}`}
            </div>
            <div className="personalAccount__infoItem">
              {`Дата рождения: ${data.birthDate}`}
            </div>
            <div className="personalAccount__infoItem">
              {`Образование: ${data.education}`}
            </div>
            <div className="personalAccount__infoItem">
              {`Организация: ${data.organization}`}
            </div>
            <div className="personalAccount__infoItem">
              <div>
                Предлагаемые курсы:
              </div>
              {
                data.courses.map(item => {
                  return (
                    <ul>
                      <li>
                        <NavLink to={`/courses/${item.id}`}>{item.name}</NavLink>
                      </li>
                    </ul>
                  )
                })
              }
            </div>
            <div className="personalAccount__infoItem">
              <div>
                Навыки:
              </div>
              {
                data.skills.map(item => {
                  return (
                    <ul>
                      <li>
                        {item.topicType}
                      </li>
                    </ul>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.personalAccount__actions}>
            <NavLink to={'/course/add'}>
              Добавить курс
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalAccount;
