import { useEffect, useState } from "react";

function Test() {
    const data = `{
        "id": "wnsrl832",
        "password": "1234123412341234"
      }`;
    const da = {
        id: "wnsrl8329",
        password: "123123123"
    }

  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState([]);
  const getLogin = async () => {
    const json = await (
      await fetch(
        `http://bestinwoo.hopto.org:8080/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(da),
        }
      )
    ).json();
    setLogin(json);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getLogin();
  }, []);
  return (
    <div>
      
    </div>
  );
}
export default Test;
