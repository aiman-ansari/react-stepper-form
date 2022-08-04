import "./index.css";
import { Check } from "react-bootstrap-icons";
export const StepFourForm = () => {
  return (
    <>
      <div className='title-container'>
        <Check className='check-icon' />
        <div className='title'>Congratulations, Eren!</div>
        <span className='text-gray f-sm'>
          you have completed onboarding, you can start using Eden!
        </span>
      </div>
    </>
  );
};
