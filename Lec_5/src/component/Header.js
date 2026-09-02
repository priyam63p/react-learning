function Header() {
  return (
    <div className="heading">
      <img
        className="img"
        src="https://i.pinimg.com/736x/05/71/89/057189610e860c8a86b4fef2b70d0947.jpg"
        height="50px"
        width="50px"
      />
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Studio</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
      </div>
      <input
        className="srchbar"
        placeholder="Search for products brands and more"
      ></input>
      <div className="profile">
        <button className="pro">Profiles</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>
    </div>
  );
}
export default Header