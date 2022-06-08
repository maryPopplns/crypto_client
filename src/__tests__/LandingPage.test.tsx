import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';

const renderLandingPage = () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('Landing Page', () => {
  test('contains navbar', () => {
    renderLandingPage();
    const brandIcon = screen.getByAltText('brand icon');
    expect(brandIcon).toBeInTheDocument();
    const signUp = screen.getByText('sign up');
    expect(signUp).toBeInTheDocument();
    const login = screen.getByText('login');
    expect(login).toBeInTheDocument();
  });

  test('contains header and description', () => {
    renderLandingPage();
    const headerText = screen.getByText('Coin Tracker');
    expect(headerText).toBeInTheDocument();
    const descriptionText = screen.getByText(
      'State of the art technologies to track your defi portfolio'
    );
    expect(descriptionText).toBeInTheDocument();
  });

  test('contains dashboard and coins', () => {
    renderLandingPage();
    const dashboardIcon = screen.getByAltText('dashboard icon');
    expect(dashboardIcon).toBeInTheDocument();
    const bitcoinIcon = screen.getByAltText('bitcoin icon');
    expect(bitcoinIcon).toBeInTheDocument();
    const ethereumIcon = screen.getByAltText('ethereum icon');
    expect(ethereumIcon).toBeInTheDocument();
  });
});
