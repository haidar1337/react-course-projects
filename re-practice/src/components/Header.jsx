import investmentLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentLogo} />;<h1>Investment Calculator</h1>
    </header>
  );
}
