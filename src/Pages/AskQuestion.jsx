import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuestion } from "../redux/Forum/action";

export default function AskQuestion() {
  const userData = useSelector((store) => store.authReducer);
  console.log("userData", userData);
  const [username, setUsername] = useState(userData.username);
  const [qTitle, setQTitle] = useState("");
  const [qDesc, setQdesc] = useState("");
  const [lang, setLang] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      question: {
        userAvatar: userData.avatar,
        username: userData.username,
        questionTitle: qTitle,
        questionDescription: qDesc,
        language: lang,
        upvotes: 0,
        answers: 0,
        postedDate: Date.now().toString(),
      },
      answers: [],
    };
    console.log(obj);

    dispatch(postQuestion(obj)).then(() => {
      alert("Question Posted Successfully");
      setQTitle("");
      setQdesc("");
      setLang("");
    });
  }

  return (
    <>
      <h1>Ask Question Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="username" disabled value={username} />
        <input
          type="text"
          placeholder="Question Title"
          onChange={(e) => setQTitle(e.target.value)}
          value={qTitle}
        />
        <input
          type="text"
          placeholder="Question Description"
          onChange={(e) => setQdesc(e.target.value)}
          value={qDesc}
        />
        <select onChange={(e) => setLang(e.target.value)}>
          <option value="">Select language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Post Question</button>
      </form>
    </>
  );
}
