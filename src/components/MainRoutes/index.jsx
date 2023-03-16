import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Loader } from 'components/Loader';

const University = lazy(() => import('pages/UniversityPage'));
const Faculty = lazy(() => import('pages/FacultyPage'));
const FacultyDetails = lazy(()=> import('pages/FacultyDetails'))

export default function MainRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<University />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
      </Routes>
    </Suspense>
  );
}
