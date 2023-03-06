import { UniversityPage } from "pages/UniversityPage";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const University = lazy(()=>import("pages/UniversityPage"));

export default function MainRoutes(){
  return (
    <Routes>
    <Route path="/" element={<UniversityPage/>}/>
    </Routes>
    )
}
