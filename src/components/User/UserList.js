import React from "react";
import { Card } from "../UI/Card";
import classes from './UserList.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux";
import { deleteAction } from "../../store";

export const UsersList = (props) => {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteAction.delete(props.id))
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} >
            {user.name} ({user.age} years old)

            <DeleteIcon className={classes.icon} onClick={deleteHandler} />


          </li>
        ))}
      </ul>
    </Card>
  );
};