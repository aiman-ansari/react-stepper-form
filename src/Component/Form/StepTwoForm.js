import "./index.css";
export const StepTwoForm = () => {
  return (
    <>
      <div className='title-container'>
        <div className='title'>Let's set up a home for all your work</div>
        <span className='text-gray'>
          You can always create another workspace later.
        </span>
      </div>
      <div className='input-container'>
        <div className='input-field'>
          <span>Workspace Name</span>
          <input type='text' placeholder='Steve Job' />
        </div>
        <div className='input-field'>
          <span>Workspace URL</span>
          <input type='text' placeholder='Steve Job' />
        </div>
      </div>
    </>
  );
};
