import "./index.css";
export const StepThreeForm = () => {
  return (
    <>
      <div className='title-container'>
        <div className='title'>How are you planning to use Eden?</div>
        <span className='text-gray f-sm'>
          We'll streamline your setup experience accordingly.
        </span>
      </div>
      <div className='button-input-container'>
        <div className='button-container'>
          <img src='/images/person.png' />
          <span className='text-gray-dark'>For myself</span>
          <span className='text-gray f-sm'>
            Write better. Think more clearly. Stay organised.
          </span>
        </div>
        <div className='button-container'>
          <img src='/images/group.png' />
          <span className='text-gray-dark'>With my team</span>
          <span className='text-gray f-sm'>
            Wikis, docs, task & projects, all in one place.
          </span>
        </div>
      </div>
    </>
  );
};
