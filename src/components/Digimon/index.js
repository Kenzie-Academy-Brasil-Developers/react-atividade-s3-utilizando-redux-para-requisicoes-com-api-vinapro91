import { useSelector } from "react-redux";
const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <ul>
        {digimons.map((item) => (
          <li>
            {item.name}
            <img alt={item.name} src={item.img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Digimons;
