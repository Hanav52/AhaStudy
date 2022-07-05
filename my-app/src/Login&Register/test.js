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
axios.post('http://bestinwoo.hopto.org:8080/auth/signup', data, {
                headers: {
                'Content-Type': 'application/json'
                }
              }
            ).then(function (response) {
                console.log(response)
                if(response.data.count == 1) {
                    setPopup({
                        open: true,
                        title: "가입 축하드립니다.",
                        mesaage: "가입 완료!",
                        callback: function(){
                            history.push("/login");
                        }
                    })
                } //else {
                //     axios.get(`http://bestinwoo.hopto.org:8080/auth/user/${userId}`)
                //         .then(function (response) {
                //             console.log(response)
                //         }).catch(function (error) {
                //             console.log(error);
                //         }).then(function() {
                //             // 항상 실행
                //         });
                    
                // }
            }).catch(function (error) {
                console.log(error)
            }).then(function() {

            })