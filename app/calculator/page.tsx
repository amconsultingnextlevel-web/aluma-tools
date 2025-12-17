import Image from "next/image";
import TotalCostCalculator from "../components/TotalCostCalculator";

export default function CalculatorPage() {
  return (
    <div>
      <h1>Total Cost Calculator</h1>
      <TotalCostCalculator />
    </div>
  );
}