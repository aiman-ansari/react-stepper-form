import "./Stepper.css";
export const Stepper = ({ step }) => {
  const steps = [1, 2, 3, 4];
  return (
    <div className='stepper'>
      <ul>
        {steps.map((steps) => (
          <li>
            <span className={steps <= step ? "active" : ""}>{steps}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
