import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Landing, Error, Register, ProtectedRoute} from './pages/index';
import {AddJob, AllJobs, Profile, Stats, SharedLayout} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />}></Route>
          <Route path='add-job' element={<AddJob />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<div>{<Register/>}</div>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
        <Route path="*" element={<h1>{<Error/>}</h1>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
