import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Owen");
  const [age, setAge] = useState(25);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAge(age + 1);
    setName("Owen Chang");
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>Welcome to the home page of the Dojo Blog!</p>
      <p>Here you can find the latest posts and updates.</p>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age} years old.
      </p>
    </div>
  );
};

export default Home;
