import { useState } from "react";

export default function App() {
    return (
        <div>
            <h1>Tip Calculator</h1>
            <Bill />
            <MySatisfaction />
            <FriendsSatisfaction />
            <PayCheck totalAmount={0} billedAmount={0} tipAmount={0} />
        </div>
    );
}

function Bill() {
    const [bill, setBill] = useState("");

    const handleInputChange = (event) => {
        setBill(event.target.value);
    };

    return (
        <div>
            <label>How much was the bill? </label>
            <input
                className="no-arrows"
                type="number"
                placeholder="Write here the amount"
                value={bill}
                onChange={handleInputChange}
            />
        </div>
    );
}

function MySatisfaction() {
    return (
        <div>
            <label>My Satisfaction</label>
            <input type="range" />
        </div>
    );
}

function FriendsSatisfaction() {
    return (
        <div>
            <label>Friends Satisfaction</label>
            <input type="range" />
        </div>
    );
}

function PayCheck({ totalAmount, billedAmount, tipAmount }) {
    return (
        <div>
            <p>{`You have to pay ${totalAmount}€ (${billedAmount}€ + ${tipAmount}€ tip)`}</p>
        </div>
    );
}
