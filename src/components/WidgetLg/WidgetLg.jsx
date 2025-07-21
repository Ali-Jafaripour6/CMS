import React from "react";
import "./WidgetLg.css";
import { transactions } from "../Data";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"WidgetLGButton " + type}>{type}</button>;
  };

  return (
    <div className="WidgetLG">
      <h3 className="WidgetLGTitle">Latest Transactions</h3>
      <table className="WidgetLGTable">
        <thead>
          <tr className="WidgetLGTR ">
            <th className="WidgetLGTH">Customer</th>
            <th className="WidgetLGTH">Date</th>
            <th className="WidgetLGTH">Amount</th>
            <th className="WidgetLGTH">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="WidgetLgTR">
              <td className="WidgetLGUser">
                <img className="WidgetLGIMG" src={item.img} alt="" />
                <span className="WidgetLGName">{item.name}</span>
              </td>
              <td className="WidgetLGDate">{item.date}</td>
              <td className="WidgetLGAmount">{item.amount}</td>
              <td className="WidgetLGStatus">
                <Button type={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
