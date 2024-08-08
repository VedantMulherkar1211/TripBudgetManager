// React imports
import { useEffect, useRef, useState } from "react";

// rrd imports
import { Form, useFetcher } from "react-router-dom";

// library imports
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  // useEffect to reset the form after submission
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  // Validation state and logic
  const [value, setValue] = useState("");
  const [isValueValid, setIsValueValid] = useState(false);

  const handleValueChange = (event) => {
    const val = event.target.value;
    setValue(val);
    // Pattern to ensure the value is at least 5000 (for currency)
    const numberPattern = /^[5-9]\d{3,}|[1-9]\d{4,}$/;
    setIsValueValid(numberPattern.test(val));
  };

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Holiday Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>

        <div className="grid-xs">
          <label htmlFor="newBudget">Holiday Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Goa"
            required
            ref={focusRef}
          />
        </div>

        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Total Amount</label>
          <span className="input-prefix">₹</span>
            <input
              
              type="number"
              step="0.01"
              name="newBudgetAmount"
              id="newBudgetAmount"
          placeholder="e.g.1,00,000"
              required
              inputMode="decimal"
              value={value}
              onChange={handleValueChange}
            />
        </div>

        <input type="hidden" name="_action" value="createBudget" />

        <button type="submit" className="btn btn--dark" disabled={!isValueValid}>
          <span>Create</span>
          <CurrencyRupeeIcon width={20} />
          
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
