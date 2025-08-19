const Home = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", e); // Handle button click
  };

  const handleClickAgain = (
    name: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("Button clicked again!", name, e); // Handle button click with name
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Welcome to the home page of the Dojo Blog!</p>
      <p>Here you can find the latest posts and updates.</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
