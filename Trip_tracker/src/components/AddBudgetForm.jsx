import { useState } from "react";

//library imports
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  const [value, setValue] = useState("");
  const [isValueValid, setIsValueValid] = useState(false);

  const handleValueChange = (event) => {
    const val = event.target.value;
    setValue(val);
    const numberPattern = /^[5-9]\d{3,}|[1-9]\d{4,}$/;
    setIsValueValid(numberPattern.test(val));
  };

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create holiday budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Holiday Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Goa"
            required
          />
        </div>

        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Total Amount</label>
          <h6>Rs</h6>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. 1,00,000"
            required
            inputMode="decimal"
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <button type="submit" className="btn btn--dark" disabled={!isValueValid}>
          <span>Create</span>
          <CurrencyRupeeIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
