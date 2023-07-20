import { useState, useEffect } from "react";
import UserRows from "./UserRows";
// import SearchBar from "./SearchBar";
import reactLogo from "./assets/science.png";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const loopingLabels = (array) => {
    array.map((el) => {
      console.log(el.name);
      return el.name;
    });
  };

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const sendSearch = (search) => {
  //   users
  //     .filter((post) => {
  //       if (search === "") {
  //         console.log("Nothing was searched");
  //         return post;
  //       } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
  //         return post;
  //       }
  //     })
  //     // I DON'T KNOW IF I'M USING THE MAP FN CORRECTLY
  //     .map((post) => {
  //       <UserRows
  //         key={post.id}
  //         usuario={post.user.login}
  //         id={post.id}
  //         title={post.title}
  //         link={post.html_url}
  //         // labels={user.labels}
  //       />;
  //     });
  // };

  return (
    <>
      <section className="header">
        <img
          src={reactLogo}
          alt="react icon"
          width={"40px"}
          className="header_logo"
        />
        {/* <SearchBar handleSearch={sendSearch} /> */}
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {/* <button className="search-button" onClick={() => sendSearch(search)}>
            Search
          </button> */}
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
