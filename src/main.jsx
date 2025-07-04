
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import AdminDashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Classmanagement from "./pages/admin/classManagement/Classmanagement.jsx";
import ClassSchedule from "./pages/admin/adminSchedulelPage/ClassSchedule.jsx";
import Messages from "./pages/common/Messages.jsx";
import LibraryPage from "./pages/common/LibraryPage.jsx";
import BusTracking from "./pages/common/BusTracking.jsx";
import MyPosts from "./pages/admin/adminPost/MyPosts.jsx";

import StudentDashboard from "./pages/student/dashboard/Dashboard.jsx"
import FeeStatus from "./pages/student/feestatus/FeeStatus.jsx";
import StudentMyClasses from "./pages/student/myclasses/Myclasses.jsx";

import TeacherDashboard from "./pages/teacher/dashboard/Dashboard.jsx"
import MyProfile from "./pages/teacher/myProfile/MyProfile.jsx";
import TeacherMyClasses from "./pages/teacher/myclasses/MyClasses.jsx"
import TeacherClassSchedule from "./pages/teacher/classScheule/ClassSchedule.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />
      },
      {
        path: "/admin/my-classes",
        element: <Classmanagement />
      },
      {
        path: "/admin/timetable",
        element: <ClassSchedule />
      },
      {
        path: "/admin/messages",
        element: <Messages />
      },
      {
        path: "/admin/library",
        element: <LibraryPage />
      },
      {
        path: "/admin/bus-tracking",
        element: <BusTracking />
      },
      {
        path: "/admin/my-posts",
        element: <MyPosts />
      },
    ]
  },
  {
    path: "/student",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <StudentDashboard />
      },
      {
        path: "/student/my-classes",
        element: <StudentMyClasses />
      },
      {
        path: "/student/messages",
        element: <Messages />
      },
      {
        path: "/student/fee-status",
        element: <FeeStatus />
      },
      {
        path: "/student/library",
        element: <LibraryPage />
      },
      {
        path: "/student/bus-tracking",
        element: <BusTracking />
      },

    ]
  },
  {
    path: "/teacher",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <TeacherDashboard />
      },
      {
        path: "/teacher/my-profile",
        element: <MyProfile />
      },
      {
        path:  "/teacher/my-classes",
        element: <TeacherMyClasses />
      },
      {
        path: "/teacher/class-timetable",
        element: <TeacherClassSchedule />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router}> </RouterProvider>

);
