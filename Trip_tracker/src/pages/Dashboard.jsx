// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

import AddExpenseForm from "../components/AddExpenseForm";

// helper functions
import { createBudget, fetchData, waait } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const email = fetchData("email");
  const budgets = fetchData("budgets");
  return { userName, email, budgets };
}

// action
export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      const encry = "3652854";
      localStorage.setItem("userName", JSON.stringify(values.userName));
      localStorage.setItem("email", JSON.stringify(values.email));
      localStorage.setItem("password", JSON.stringify(values.userpass + encry));
      return toast.success(`Welcome, ${values.userName}!`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  // new budget creation
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
    {userName ? (
      <div className="dashboard">
        <h1>Welcome back, <span className="accent">{userName}</span></h1>
        <div className="grid-sm">
          {
            budgets && budgets.length > 0
              ? (
                <div className="grid-lg">
                  <div className="flex-lg">
                    <AddBudgetForm />
                    <AddExpenseForm budgets={budgets} />
                  </div>
                </div>
              )
              : (
                <div className="grid-sm">
                  <p><b><i>Proper trip budgeting is the secret way to financial stablity.</i></b></p>
                  <h2><span className="accent">Create a budget to get started!</span></h2>
                  <AddBudgetForm />
                </div>
              )
          }
        </div>
      </div>
    ) : <Intro />}
  </>
)
}
export default Dashboard