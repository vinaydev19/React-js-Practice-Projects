import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertAmount, setConvertAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const convertAmountFunc = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  function fromToCheck(currency, type) {
    if (type === "from") {
      if (currency === to) {
        alert('You cannot set the same currency for "From" and "To".');
        return;
      }
      setFrom(currency); // Update the 'from' currency
    } else if (type === "to") {
      if (currency === from) {
        alert('You cannot set the same currency for "From" and "To".');
        return;
      }
      setTo(currency); // Update the 'to' currency
    }
  }

  return (
    <>
      <div className="w-full bg-slate-950 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertAmountFunc();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  selectCurrency={from}
                  onCurrencyChange={(currency) => fromToCheck(currency, "from")}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => fromToCheck(currency, "to")}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
