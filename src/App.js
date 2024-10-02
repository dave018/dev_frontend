import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Django API 호출
    axios
      .get("http://localhost:8000/dev_app/hello/")
      .then((response) => {
        setMessage(response.data.message); // API 응답에서 메시지 설정
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Django API에서 가져온 메시지</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
