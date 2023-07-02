import "./style/App.css";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { brown } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: brown[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
