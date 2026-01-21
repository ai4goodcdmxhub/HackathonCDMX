import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Aliados from "./pages/Aliados";
import Mentores from "./pages/Mentores";
import Jurados from "./pages/Jurados";
import Speakers from "./pages/Speakers";
import Equipo from "./pages/Equipo";
import ScrollToTop from "@/components/ScrollToTop";

// Simple Error Boundary
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 font-mono">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 text-red-500">Critical System Error</h1>
            <p className="mb-2">The application encountered a fatal error.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-auto text-xs text-green-500 border border-green-900">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-green-900 text-green-100 rounded hover:bg-green-800"
            >
              System Reboot (Reload)
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-green-500 font-mono">Initializing System...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/mentores" element={<Mentores />} />
              <Route path="/jurados" element={<Jurados />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/aliados" element={<Aliados />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;