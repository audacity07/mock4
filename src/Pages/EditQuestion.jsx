import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchQuestion, postQuestion } from "../redux/Forum/action";
import { useParams } from "react-router-dom";

export default function EditQuestion() {
  const { userData, forumData } = useSelector((store) => {
    return {
      userData: store.authReducer,
      forumData: store.forumReducer.forumData,
    };
  });
  const { id } = useParams();
  let new_val = forumData.find((item) => item.id === +id);
  console.log(new_val);
  const [username, setUsername] = useState(userData.username);
  const [qTitle, setQTitle] = useState(new_val.question.questionTitle);
  const [qDesc, setQdesc] = useState(new_val.question.questionDescription);
  const [lang, setLang] = useState(new_val.question.language);
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
        upvotes: new_val.question.upvotes,
        answers: new_val.question.answers,
        postedDate: new_val.question.postedDate,
      },
    };
    // console.log(obj);

    dispatch(patchQuestion(id, obj)).then(() => {
      alert("Updated Successfully");
      setQTitle("");
      setQdesc("");
      setLang("");
    });
  }

  return (
    <>
      <h1>Edit Question Page</h1>

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
        <button type="submit">Edit Question</button>
      </form>
    </>
  );
}
