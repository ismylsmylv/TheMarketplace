import "./style.scss";
type Props = {};
function Card({}: Props) {
  return (
    <div className="Card rounded-lg cursor-pointer overflow-hidden">
      <img
        src="https://laptopmedia.com/wp-content/uploads/2023/12/10-5.jpg"
        alt=""
      />
      <div className="infos p-3 ">
        <b>2500 AZN</b>
        <p className="name line-clamp-1">Apple MacBook Pro (14-inch, M3)</p>
        <p className="date text-xs mt-2">Baku, today, 13:43</p>
      </div>
    </div>
  );
}

export default Card;
