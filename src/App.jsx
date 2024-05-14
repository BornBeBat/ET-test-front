import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const EventsBoard = lazy(() => import('./pages/EventsBoard/EventsBoard'));
const EventRegistration = lazy(() => import('./pages/EventRegistration/EventRegistration'));
const EventParticipant = lazy(() => import('./pages/EventParticipant/EventParticipant'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EventsBoard />} />
        <Route path="/registration" element={<EventRegistration />} />
        <Route path="/participants" element={<EventParticipant />} />
      </Route>
    </Routes>
  );
}

export default App;
