import { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

export default function HomePage() {
  const names = ['Kowalski', 'Skipper', 'Rico', 'Private'];
  const [likes, setLikes] = useState(0);

  const renderNames = names.map((n, i) => (
    <p key={i + 1}>
      {i + 1}. {n}
    </p>
  ));

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title={'Hey everyone'} />
      <h2>Here are the names</h2>
      <br></br>
      {renderNames}
      <br></br>
      <button onClick={handleClick}>Like {likes}</button>
    </div>
  );
}
