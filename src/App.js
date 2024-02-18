import { useState } from "react";

export default function App() {
    const [bill, setBill] = useState("");

    const handleInputChange = (event) => {
        setBill(event.target.value);
        // console.log(bill);
    };

    const tipPercentages = [0, 5, 10, 15, 20];
    const tipSatisfaction = [
        "Dissatisfied",
        "Satisfied",
        "Very satisfied",
        "Delighted",
        "Over the moon!",
    ];
    // const [selectedTip, setSelectedTip] = useState(tipPercentages[0]);

    // const handleSelectChange = (event) => {
    //     setSelectedTip(event.target.value);
    //     console.log(selectedTip);
    // };

    const [selectedTip1, setSelectedTip1] = useState(tipPercentages[0]);
    const [selectedTip2, setSelectedTip2] = useState(tipPercentages[0]);

    const handleSelectChange1 = (event) => {
        setSelectedTip1(event.target.value);
    };

    const handleSelectChange2 = (event) => {
        setSelectedTip2(event.target.value);
    };

    const handleReset = () => {
        setBill("");
        setSelectedTip1(tipPercentages[0]);
        setSelectedTip2(tipPercentages[0]);
    };

    return (
        <div>
            <h1>Tip Calculator</h1>
            <Bill bill={bill} onInputChange={handleInputChange} />
            <Satisfaction
                tipPercentages={tipPercentages}
                tipSatisfaction={tipSatisfaction}
                selectedTip={selectedTip1}
                onSelectChange={handleSelectChange1}
            >
                {" "}
                How did you like the food and service?{" "}
            </Satisfaction>
            <Satisfaction
                tipPercentages={tipPercentages}
                tipSatisfaction={tipSatisfaction}
                selectedTip={selectedTip2}
                onSelectChange={handleSelectChange2}
            >
                {" "}
                How did your friend liked the food and service?{" "}
            </Satisfaction>
            <PayCheck
                bill={bill}
                selectedTip1={selectedTip1}
                selectedTip2={selectedTip2}
            />
            <Reset onReset={handleReset} />
        </div>
    );
}

function Bill({ bill, onInputChange }) {
    return (
        <div>
            <label>How much was the bill? </label>
            <input
                className="no-arrows"
                type="number"
                placeholder="Write here the amount"
                value={bill}
                onChange={onInputChange}
            />
        </div>
    );
}

function Satisfaction({
    tipPercentages,
    tipSatisfaction,
    selectedTip,
    onSelectChange,
    children,
}) {
    return (
        <div>
            <label>{children}</label>
            <select value={selectedTip} onChange={onSelectChange}>
                {tipPercentages.map((percentage, index) => (
                    <option key={index} value={percentage}>
                        {tipSatisfaction[index]}: {percentage}%
                    </option>
                ))}
            </select>
        </div>
    );
}

function PayCheck({ bill, selectedTip1, selectedTip2 }) {
    const tipValue =
        (Number(bill) * ((Number(selectedTip1) + Number(selectedTip2)) / 2)) /
        100;
    const totalAmount = Number(bill) + Number(tipValue);
    return (
        <div>
            <p>{`You have to pay ${totalAmount}€ (${bill}€ + ${tipValue}€ tip)`}</p>
        </div>
    );
}

function Reset({ onReset }) {
    return (
        <div>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}
