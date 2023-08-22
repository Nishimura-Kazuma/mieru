interface HeaderUserProps {
  user: string;
  point: number;
}

const Header = ({ user, point }: HeaderUserProps) => {
  const moveHome = () => {
    window.location.href = '/post';
  };

  return (
    <header>
      <div>
        <div>
          <button onClick={moveHome}>mierun</button>
        </div>
        <div>
          <div>{user}</div>
          <div>{point}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
