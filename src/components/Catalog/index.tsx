import "./style.scss";

type Props = {
  isOpen: boolean;
  setOpen: any;
};

function Catalog({ isOpen, setOpen }: Props) {
  return (
    <div
      className="Catalog rounded p-4 m-4 w-full"
      style={{
        display: isOpen ? "block" : "none",
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      Catalog
    </div>
  );
}

export default Catalog;
