import React from "react";
const Loading: React.FC<{ message: string }> = function (props) {
  const { message, children } = props;
  return (
    <article className='load-wrap'>
      <img className='logo' src='https://avatars.githubusercontent.com/u/89528034?s=300&v=4' alt='chocolate logo' />
      <p className='loader'>{message}</p>
      {children}
    </article>
  );
};

export { Loading };
