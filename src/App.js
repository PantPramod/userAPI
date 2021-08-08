import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [isLoading, setIsloading] = useState(false);
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    gethttphandler();
  }, [page])




  async function gethttphandler() {
    try {
      setIsloading(true);
      const response = await fetch(`https://reqres.in/api/users?page=${page}`)
      const data1 = await response.json();
      setData(data1.data);

    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message)
    }
    setIsloading(false);
  }


  const pagehandler = (i) => {
    setPage(i);
  }

  return (<div>
    <p style={{ textAlign: "center", color: "red" }}>{data.length === 0 && errMsg}</p>
    {isLoading && <p style={{ textAlign: "center" }}>Loading.........</p>}
    <ul>
      {data.map((person, index) => <li key={person.id} ><div className="card"><p>{person.first_name} {person.last_name}</p>
        <img src={person.avatar} alt="" /></div>
      </li>)}
    </ul>


    <div className="center">
      {page !== 1 && <button id="prev" onClick={() => pagehandler(page - 1)}>{page - 1}</button>}
      <button onClick={() => pagehandler(page + 1)}>{page + 1}</button>
      <button onClick={() => pagehandler(page + 2)}>{page + 2}</button>
      <button onClick={() => pagehandler(page + 3)}>{page + 3}</button>
      <button onClick={() => pagehandler(page + 4)}>{page + 4}</button>
      <button onClick={() => pagehandler(page + 5)}>{page + 5}</button>
    </div>
  </div>)

}
export default App;






