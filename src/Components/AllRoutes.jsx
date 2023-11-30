import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Forum from "../Pages/Forum";
import Answer from "../Pages/Answer";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import AskQuestion from "../Pages/AskQuestion";
import EditQuestion from "../Pages/EditQuestion";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/forum"
        element={
          <PrivateRoute>
            <Forum />
          </PrivateRoute>
        }
      />
      <Route path="/forum/:id" element={<Answer />} />
      <Route path="/ask/" element={<AskQuestion />} />
      <Route path="/edit/:id" element={<EditQuestion />} />
    </Routes>
  );
};
