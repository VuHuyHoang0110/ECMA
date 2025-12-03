import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Register from "./pages/register";
import Login from "./pages/Login ";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            <strong>Công ty du lịch Hoàng </strong>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-gray-200">
              Trang chủ
            </a>
            <a href="/list" className="hover:text-gray-200">
              Danh sách
            </a>
            <a href="/add" className="hover:text-gray-200">
              Thêm mới
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/login" className="hover:text-gray-200">
              Đăng nhập
            </a>
            <a href="register" className="hover:text-gray-200">
              Đăng ký
            </a>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-3 space-y-2">
              <a href="/" className="block hover:text-gray-200">
                Trang chủ
              </a>
              <a href="/list" className="block hover:text-gray-200">
                Danh sách
              </a>
              <a href="/add" className="block hover:text-gray-200">
                Thêm tour mới
              </a>
              <a href="/login" className="block hover:text-gray-200">
                Đăng nhập
              </a>
              <a href="/register" className="block hover:text-gray-200">
                Đăng ký
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
</Routes>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
