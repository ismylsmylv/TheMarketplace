import "./style.scss";
function Navbar() {
  return (
    <div className="Navbar flex items-center justify-center py-4">
      <div className="container   w-full flex items-center justify-between">
        <div className="logo">logo</div>
        <button>catalog</button>
        <div className="searchbar">
          <input type="text" />
        </div>
        <div className="actions">
          <button>orders</button>
          <button>orders</button>
          <button>orders</button>
          <button>orders</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
