import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("App initializing in Mexico context (v3)...");
createRoot(document.getElementById("root")!).render(<App />);
