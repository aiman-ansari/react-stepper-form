import "./index.css";
export const StepOneForm = () => {
  return (
    <>
      <div className='title-container'>
        <div className='title'>Welcome! first thing first..</div>
        <span className='text-gray'>You can always change them later</span>
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
