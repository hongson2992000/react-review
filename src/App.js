import React from "react";
import "./App.css";

// import BaiTapRedux2 from "./components/BaiTapRedux2/BaiTapGioHangRedux2";
// import BaiTapGioHang from "./components/DemoProps/BaiTapGioHang/BaiTapGioHang";
// import BaiTapTruyenFunction from "./components/DemoProps/BaiTapTruyenFunction/BaiTapTruyenFunction";
// import DemoProps from "./components/DemoProps/DemoProps";
// import DemoVongLap from "./components/CauTrucLap/DemoVongLap";
// import BaiTapVongLap from "./components/BaiTap/BaiTapVongLap";
// import Demoif from './components/CauTrucDieuKien_Render/Demoif';
// import BaiTapChia from "./components/BaiTapComponent/BaiTapChia";
// import Event from './components/Databinding/Event';
// import BaiTapCar from "./components/CauTrucDieuKien_Render/BaiTapCar";
import BaiTapBurger from "./components/BaiTapBurger/BaiTapBurger2";
// import BaiTapForm from "./components/BaiTapForm/BaiTapForm";
// import BaiTapState2 from "./components/BaiTapState2/BaiTapState2"
// import BaiTapComponent from "./components/BaiTapComponent/BaiTapChia"
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import BaiTapTruyenProp2 from "./components/BaiTapTruyenProp2/BaiTapTruyenProp2";
// import Header from "./Layouts/Header";
export default function App() {
  return (
    <div>
      {/* <BaiTapTruyenFunction/> */}
      {/* <BaiTapTruyenProp2/> */}
      {/* <Event/> */}
      {/* <Demoif/> */}
      {/* <BaiTapCar/> */}
      {/* <DemoVongLap/> */}
      {/* <BaiTapVongLap/> */}
      {/* <DemoProps title={"CyberSoft"} /> */}
      {/* <BaiTapGioHang/> */}
      {/* <BaiTapRedux2 /> */}
      <BaiTapBurger />
      {/* <BaiTapForm /> */}
      {/* <BaiTapState2/> */}
      {/* <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/detail/:courseId"
            exact
            component={CourseDetailScreen}
          />
          <Route path="/signup" exact component={SignUpScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}
