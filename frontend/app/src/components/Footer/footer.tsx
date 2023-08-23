const Footer = () => {
  const handle = () => {
    console.log('okkkkk');
  };

  return (
    <footer className="mb-2 d-flex flex-row-reverse">
      <button className="btn btn-primary" onClick={() => handle()}>
        投稿フォーム
      </button>
    </footer>
  );
};

export default Footer;
