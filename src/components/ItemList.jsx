
const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Lista de Itens (Props)</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
