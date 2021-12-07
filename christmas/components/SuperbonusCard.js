const Superbonus = ({setSuperbonus}) => {

  return (
    <div className="superbonusluke">
      <h1 className="superbonusHeader">Superbonus, luke 1 </h1>
      <h1 className="close" onClick={() => setSuperbonus(false)}>X</h1>
      <h1 className="winner">Trude</h1>
    </div>
  );

}

export default Superbonus