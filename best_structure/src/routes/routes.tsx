import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '@/components/templates/MainLayout';
import { AuthLayout } from '@/components/templates/AuthLayout';

import { DashboardPage } from '@/pages/Dashboard';
import { LoginPage } from '@/pages/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Страницы с основным layout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* Страницы с auth layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Редирект на login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
