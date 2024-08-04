import { useId } from "react";
import PropTypes from "prop-types";

function InputBox(props) {
  const {
    className,
    label,
    amount,
    amountDisabled = false,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    onCurrencyChange,
    currencyDisabled = false,
  } = props;

  const id = useId;

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor="id" className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.number,
  amountDisabled: PropTypes.bool,
  onAmountChange: PropTypes.func,
  selectedCurrency: PropTypes.string,
  onCurrencyChange: PropTypes.func,
  currencyDisabled: PropTypes.bool,
  currencyOptions: PropTypes.array,
};

export default InputBox;
