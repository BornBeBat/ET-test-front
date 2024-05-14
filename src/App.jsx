import { Route, Routes } from 'react-router-dom';
import 'reset-css';
import 'modern-normalize/modern-normalize.css';
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
        <Route path="/registration/:id" element={<EventRegistration />} />
        <Route path="/participants/:id" element={<EventParticipant />} />
      </Route>
    </Routes>
  );
}

export default App;
