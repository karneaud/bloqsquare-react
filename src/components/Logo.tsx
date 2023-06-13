
const Logo = ( {classNames = '' } ) => {
  return (
    <img className={`logo ${classNames}`} title="Bloq Square" src="/logo.png"/>
  );
};

export default Logo;
