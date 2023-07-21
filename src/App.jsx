import { useState, useEffect } from "react";
import UserRows from "./UserRows";
import reactLogo from "./assets/science.png";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const loopingLabels = (array) =>
    array.map((el) => {
      console.log(el.name);
      return (
        <p
          className="user-issue"
          style={{ backgroundColor: `#${el.color}` }}
          key={el.id}
        >
          {el.name}
        </p>
      );
    });

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="header">
        <img
          src={reactLogo}
          alt="react icon"
          width={"60px"}
          className="header_logo"
        />
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </section>

      <section className="table_section">
        <table>
          <caption>REACT ISSUES</caption>
          <thead>
            <tr>
              <th>USER</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>LABELS</th>
            </tr>
          </thead>

          <tbody>
            {users
              .filter((user) => {
                if (search === "") {
                  return user;
                } else if (
                  user.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => (
                <UserRows
                  usuario={user.user.login}
                  id={user.id}
                  title={user.title}
                  link={user.html_url}
                  labels={loopingLabels(user.labels)}
                  key={user.id}
                />
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
