import { Outlet } from "react-router-dom";
import NavBar from "./navbar.jsx";
import LangProvider from "./pages/i18n/langContext.jsx";

function App() {
  return (
    <>
      <LangProvider>
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </LangProvider>
    </>
  );
}

export default App;
