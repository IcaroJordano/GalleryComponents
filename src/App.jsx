import { BrowserRouter as Router } from "react-router-dom";
import DesktopSidebar from "./layout/Sidebar/DesktopSidebar";
import MobileSidebar from "./layout/Sidebar/MobileSidebar";
import { Rotas } from "./pages/Rotas";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="lg:flex">
          <MobileSidebar />
          <DesktopSidebar />
          <Rotas />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
