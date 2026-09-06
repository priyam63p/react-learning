import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github() {
  const { name } = useParams();
  const [Profile, setProfile] = useState();
  // console.log(name)
  async function fetchUser(params) {
    const repsonse = await fetch(`https://api.github.com/users/${name}`);
    const data = await repsonse.json();
    setProfile(data)
  }
  useEffect(() => {
    fetchUser();
  }, []);

  // console.log(data)
  return (
    <>
      <h1>My Github Profile</h1>
      <div>
      <img src={Profile?.avatar_url}></img>
      <h2>{Profile?.login}</h2>
      </div>
    </>
  );
}
