import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
