import "./style.scss";

type Props = {
  isOpen?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Catalog({ setOpen }: Props) {
  return (
    <div
      className="Catalog rounded p-4 m-4 w-full"
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      Catalog
    </div>
  );
}

export default Catalog;
