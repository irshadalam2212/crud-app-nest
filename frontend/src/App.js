import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AllEmployee from "./pages/AllEmployee";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <>
    {/* components */}
      {/* Header: A wrapper component that contains the navigation header for the application. */}
      {/* AllEmployee: A component that displays a list of all employees. */}
      {/* AddEmployee: A component that provides a form for adding a new employee. */}
      {/* EditEmployee: A component that provides a form for editing an existing employee's details. */}
      <Header>
        <Routes>
          {/* Renders the AllEmployee component, which displays a list of all employees. */}
          <Route path="/" element={<AllEmployee />}></Route>
          {/* Renders the AddEmployee component, which provides a form to add a new employee. */}
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          {/* Renders the EditEmployee component, which provides a form to edit an existing employee's details. The ":id" parameter is used to specify the employee's ID to be edited. */}
          <Route path="/edit-employee/:id" element={<EditEmployee />}></Route>
        </Routes>
      </Header>
    </>
  );
}

export default App;
