import { useState } from "react";

export default function App() {
    const [bill, setBill] = useState("");

    const handleInputChange = (event) => {
        setBill(event.target.value);
        console.log(bill);
    };

    const tipPercentages = [0, 5, 10, 15, 20];
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

    return (
        <div>
            <h1>Tip Calculator</h1>
            <Bill bill={bill} onInputChange={handleInputChange} />
            <Satisfaction
                tipPercentages={tipPercentages}
                tip={selectedTip1}
                onSelectChange={handleSelectChange1}
            />
            <Satisfaction
                tipPercentages={tipPercentages}
                tip={selectedTip2}
                onSelectChange={handleSelectChange2}
            />
            <PayCheck
                bill={bill}
                selectedTip1={selectedTip1}
                selectedTip2={selectedTip2}
            />
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

function Satisfaction({ tipPercentages, selectedTip, onSelectChange }) {
    return (
        <div>
            <label>Satisfaction</label>
            <select value={selectedTip} onChange={onSelectChange}>
                {tipPercentages.map((percentage, index) => (
                    <option key={index} value={percentage}>
                        {percentage}%
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
