import UserList from "./features/users/UserList";

function App() {
  return (
    <div className="container mx-auto px-2 pt-10 md:pt-10 max-w-5xl">
      <h3 className="text-center text-2xl text-gray-700 font-bold pb-10">Redux Toolkit CRUD App</h3>
      <UserList />
    </div>
  );
}

export default App;
