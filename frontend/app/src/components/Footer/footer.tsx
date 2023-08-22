const Footer = () => {
  const moveHome = () => {
    window.location.href = '/post';
  };

  return (
    <header>
      <div>
        <div>
          <button onClick={moveHome}>投稿ボタン</button>
        </div>
      </div>
    </header>
  );
};

export default Footer;
