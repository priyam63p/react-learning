import { useEffect, useState } from "react";
function Body() {
  const [Profile, setProfile] = useState([]);
  const [numberOfProfile, setnumberOfProfile] = useState("");
  async function generateProfile(count) {
    let ran = Math.floor(Math.random() * 10000);
    const response = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await response.json();

    setProfile(data);
  }
  useEffect(() => {
    generateProfile(10);
  }, []);

  return (
    <div className="but">
      <input
        type="text"
        className="inpu"
        placeholder="Type here"
        value={numberOfProfile}
        onChange={(e) => setnumberOfProfile(e.target.value)}
      ></input>
      <button onClick={() => generateProfile(Number(numberOfProfile))}>
        Search Profile
      </button>
      <div className="profiles">
        {Profile.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">
                Profile
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;



//try catch
//search on the basis of name: if exist show their profile
//UseCallBack function