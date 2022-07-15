import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';
import {HomeView} from "./views/HomeView";
import {FoodMenuView} from "./views/FoodMenuView";
import {NotFoundView} from "./views/NotFoundView";
import {SingleFoodView} from "./views/SingleFoodView";
import {DeliveryScheduleView} from "./views/DeliveryScheduleView";
import {CartView} from "./views/CartView";

function App() {
  return (
      <>
        <Header/>

          <Routes>
              <Route path="/" element={<HomeView/>}/>
              <Route path="/food-menu/" element={<FoodMenuView/>} />
              <Route path="/food-menu/:idOfFood/" element={<SingleFoodView/>} />
              <Route path="/delivery-schedule" element={<DeliveryScheduleView/>}/>
              {/*    <Route path="/sign-in"/>*/}
              <Route path="/cart/" element={<CartView/>}/>
              <Route path="*" element={<NotFoundView />}/>

          </Routes>


      </>
  );
}

export {App};
