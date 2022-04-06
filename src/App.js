import { ToastProvider } from "react-toast-notifications";
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Todos from './components/todos/Todos';
function App() {
  const addAlpha = (color, opacity) => {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  }
  const { mainColor } = useSelector(state => state.settingsReducer);
  return (
    <div className="App" style={{ background: `radial-gradient(circle, ${addAlpha(mainColor, 0.25)} 0%, #f2f2f2 100%)`, height: "100vh", overflow: "hidden" }}>
      <ToastProvider placement="bottom-center">
        <Todos />
      </ToastProvider>
    </div>
  );
}

export default App;
