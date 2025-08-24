import { useState } from "react";
import Catalog from "../../components/Catalog";
import Navbar from "../../components/Navbar";

function Header() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="Header sticky top-0">
      <Navbar isOpen={open} setOpen={setOpen} />
      {open && <Catalog isOpen={open} setOpen={setOpen} />}
    </div>
  );
}

export default Header;
