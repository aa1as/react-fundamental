import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
  ]);

  const getPaymentFormData = (data) => {
    console.log(data);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
      ...expenses,
    ]);
  };

  const deleteExpenseTtem = (id) => {
    //1 filter
    const newFilteredArray = expenses.filter((item) => item.id !== id);
    setExpenses(newFilteredArray);

    //2 slice
    //[0,1,2,..., index-1] [index+1,index+2,...n-1]
    // const beforeArray = expenses.slice(0, index);
    // const afterArray = expenses.slice(index + 1);
    // setExpenses([...beforeArray, ...afterArray]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseTtem={deleteExpenseTtem} />
    </>
  );
}

export default App;
