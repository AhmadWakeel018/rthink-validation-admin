import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes";
import { Layout } from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <RoutesComponent />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
