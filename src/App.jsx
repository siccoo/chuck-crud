import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

function App() {
  return (
    <div className="container mx-auto px-2 pt-10 md:pt-10 max-w-5xl">
      <h3 className="text-center text-2xl text-gray-700 font-bold pb-10">
        Redux Toolkit CRUD App
      </h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
