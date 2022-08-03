import "./index.css";
export const StepThreeForm = () => {
  return (
    <>
      <div className='title-container'>
        <div className='title'>How are you planning to use Eden?</div>
        <span className='text-gray'>
          We'll streamline your setup experience accordingly.
        </span>
      </div>
      <div className='input-container'>
        <div className='input-field'>
          <span>Fullname</span>
          <input type='text' placeholder='Steve Job' />
        </div>
        <div className='input-field'>
          <span>Fullname</span>
          <input type='text' placeholder='Steve Job' />
        </div>
      </div>
    </>
  );
};
