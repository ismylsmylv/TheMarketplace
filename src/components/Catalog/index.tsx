import "./style.scss";
type Props = {
  isOpen: boolean;
  setOpen: any;
};

function Catalog({ isOpen, setOpen }: Props) {
  return (
    <div
      className="Catalog"
      style={{ display: isOpen ? "block" : "none" }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      Catalog
    </div>
  );
}

export default Catalog;
