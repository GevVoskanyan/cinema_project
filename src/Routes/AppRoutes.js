import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/Home/Home';
import NotFound from '../features/NotFound/NotFound';
import SignIn from '../features/SignIn/SignIn';
import SignUp from '../features/SignUp/SignUp';
import Catalog from '../features/Catalog/Catalog';
import SingleFilm from '../features/SingleFilm/SingleFilm';
import Tickets from '../features/Tickets/Tickets';
import Hall from '../features/Hall/Hall';
import Checkout from '../features/Checkout/Checkout';
import TicketsFinal from '../features/TicketsFinal/TicketsFinal';
import ContactUs from '../features/ContactUs/ContactUs';
import Admin from '../features/Admin/Admin';
import AdminDashboard from '../features/AdminDashboard/AdminDasboard';
import AdminMoviesList from '../features/AdminMoviesList/AdminMoviesList';

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/film/:id" element={<SingleFilm />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/tickets/:filmId" element={<Tickets />} />
      <Route path="/tickets/seats/:filmId" element={<Hall />} />
      <Route path="/tickets/checkout/:filmId" element={<Checkout />} />
      <Route path="/tickets/final/:filmId" element={<TicketsFinal />} />
      <Route path={'admin/*'} element={<Admin />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="movies-list" element={<AdminMoviesList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
