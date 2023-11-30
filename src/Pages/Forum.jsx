import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteQuestion, getQuestion } from "../redux/Forum/action";

export default function Forum() {
  const { userData, forumData } = useSelector((store) => {
    return {
      userData: store.authReducer,
      forumData: store.forumReducer.forumData,
    };
  });
  // console.log(forumData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  function handleDelete(id) {
    dispatch(deleteQuestion(id)).then(() => alert("Deleted Successfully"));
  }

  return (
    <>
      <h1>Forum Page</h1>
      <Link to={"/ask"}>
        <button>Ask Question</button>
      </Link>

      {forumData.length > 0 &&
        forumData.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                width: "70%",
                margin: "50px auto",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  height: "50%",
                  borderRadius: "10px",
                }}
              >
                <div>{item.question.userAvatar}</div>
                <p>{item.question.username}</p>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h1>{item.question.questionTitle}</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <p>{item.question.language}</p>
                  <p>{item.question.postedDate}</p>
                  <p>{`${item.answers.length} Answers`}</p>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid black",
                  height: "50%",
                  borderRadius: "10px",
                }}
              >
                <button>Upvote</button>
                <p>{`${item.question.upvotes} Upvotes`}</p>
              </div>

              <div>
                {userData.username === item.question.username && (
                  <>
                    <Link to={`/edit/${item.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
}
