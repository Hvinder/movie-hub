import AppProvider from "./context";
import Routes from "./routes";

function App() {
  return (
    <AppProvider>
      <div id="back-to-top-anchor" />
      <Routes />
    </AppProvider>
  );
}

export default App;
