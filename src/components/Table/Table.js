import "./Table.scss";
import ttc from "../../data/ttc.json";

function Table() {
  return (
      <table className="table">
        <caption className="table__caption">Основнi характеристики</caption>
        <tbody className="table__body">
          <tr className="table__row">
          <th className="table__heading">характеристика</th>
          <th className="table__heading">значення</th>
        </tr>
          {ttc.map((item, index) => 
            <tr key={`uniqueId${index}`} className="table__row">
              <td className="table__data">{item.property}</td>
              <td>{item.value}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
}
export default Table;
