let Child = (props) => {
  let handleButton = () => {
    props.parentFunc("Submit");
  };

  return <button onClick={handleButton}>Submit</button>;
};

export default Child;
