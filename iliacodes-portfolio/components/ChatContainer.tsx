'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ChatContainer = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [log, setLog] = useState<LogItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  interface LogItem {
    type: string;
    message: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLog((prevLog: LogItem[]) => [...prevLog, { type: 'user', message: inputVal }]);

    sendMessage(inputVal);

    setInputVal('');
  };

  const sendMessage = (message: any) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": 'application/json',
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": message}],
    };

    setIsLoading(true);

    axios.post(url, data, {headers: headers }).then((response) => {
      console.log(response)
      setLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
      setIsLoading(true);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }

  return (
    <>
      <div>
        <h1>
          ChatGpt
        </h1>
        {
          log.map((message, index) => (
            <div key={index}>
              {message.message}
            </div>
          ))
        }
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type your message..." value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="text-black">
          </input>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatContainer;
