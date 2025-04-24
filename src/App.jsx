
import "./App.css"
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Store } from "./pages/Store";
import Header from "./components/Header";
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import SingleTweet from "./pages/SingleTweet";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <>
      {/* <Dynamic/> */}
      {/* <Props/> */}
      {/* <Jumia/> */}
      {/* <SimpleList /> */}
      {/* <ComplexList /> */}
      {/* <Mystore /> */}
      {/* <LastViewProduct/> */}
      {/* <PropsChildren /> */}
      {/* <EventHandling /> */}
      {/* <ConditionalRendring /> */}
      {/* <SimpleState /> */}
      {/* <User /> */}
      {/* <ComplexState /> */}
      {/* <ComplexStateArrays /> */}
      {/* <ExampleArray /> */}
      {/* <SimpleEffect /> */}
      {/* <FetchData /> */}
      {/* <Fetchuser /> */}
      {/* <ExampleFetch /> */}
      {/* <GetAuto /> */}
      {/* <Recipe /> */}
      {/* <SimpleForm /> */}
      {/* <MultipleForm /> */}
      {/* <OthersInput /> */}
      {/* <AxiosExmaple /> */}
      {/* <TestDaisy /> */}
      {/* <ReactHookForm/> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/about us" element={<Navigate to="/about" />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="timeline/:id" element={<SingleTweet />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* children would be here */}
            <Route index element={<h1>Home Dashboard</h1>} />
            <Route path="trash" element={<h1>trash</h1>} />
            <Route path="spam" element={<h1>spam</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
