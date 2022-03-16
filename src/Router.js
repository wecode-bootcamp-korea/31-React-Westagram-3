import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
// 두현
import MainDuHyeon from './pages/duhyeon/Main/Main';
import LoginDuHyeon from './pages/duhyeon/Login/Login';
// 재웅
import MainJaeWoong from './pages/jaewoong/Main/Main';
import LoginJaeWoong from './pages/jaewoong/Login/Login';
// 규현
import MainKyuHyun from './pages/kyuhyun/Main/Main';
import LoginKyuHyun from './pages/kyuhyun/Login/Login';
// 재도
import MainJaeDo from './pages/jaedo/Main/Main';
import LoginJaeDo from './pages/jaedo/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main-duhyeon" element={<MainDuHyeon />} />
        <Route path="/login-duhyeon" element={<LoginDuHyeon />} />
        <Route path="/main-jaewoong" element={<MainJaeWoong />} />
        <Route path="/login-jaewoong" element={<LoginJaeWoong />} />
        <Route path="/main-kyuhyun" element={<MainKyuHyun />} />
        <Route path="/login-kyuhyun" element={<LoginKyuHyun />} />
        <Route path="/main-jaedo" element={<MainJaeDo />} />
        <Route path="/login-jaedo" element={<LoginJaeDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
