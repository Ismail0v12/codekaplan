import React, {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router";
import Spinner from "../spinner/spinner";
import AuthLayout from "../auth-layout/auth-layout";
import Layout from "../layout";

const HomePage = lazy(() => import("../../pages/home/home"));
const AboutPage = lazy(() => import("../../pages/about/about"));
const CoursesPage = lazy(() => import("../../pages/courses/courses"));
const CoursesDetailPage = lazy(() => import("../../pages/course-detail/course-detail"));
const PractisePage = lazy(() => import("../../pages/practise/practise"));
const BlogPage = lazy(() => import("../../pages/blog/blog"));
const BlogDetailPage = lazy(() => import("../../pages/blog-detail/blog-detail"));
const ContactPage = lazy(() => import("../../pages/contact/contact"));
const LoginPage = lazy(() => import("../../pages/login/login"));
const RegisterPage = lazy(() => import("../../pages/registr/registr"));

function Routing() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/courses/1" element={<CoursesDetailPage/>}/>
          <Route path="/practise" element={<PractisePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blog/1" element={<BlogDetailPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;