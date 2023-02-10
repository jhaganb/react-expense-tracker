import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle(`Updated`);
  //   console.log("clicked!!");
  // <button onClick={clickHandler}>Change title</button>
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
