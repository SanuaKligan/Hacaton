import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Calendar from "./Components/Calendar";
import Events from "./Components/Events";
import KnowledgeBase from "./Components/KnowledgeBase";
import News from "./Components/News";
import AboutUs from "./Components/AboutUs";
import banner from "./images/Баннер.png"
import Hac1 from "./images/Хакатон-1.png"
import Hac2 from "./images/Хакатон-2.png"
import Hac3 from "./images/Хакатон-3.png"
import Hac4 from "./images/Хакатон-4.png"
import News1 from "./images/Новость.png"
import News2 from "./images/Новость-1.png"
import News3 from "./images/Новость-2.png"
import News4 from "./images/Новость-3.png"
import AllNews from "./images/ВсеНовости.png"
import Carus from "./images/Карусель.png"
import Team from "./images/Команда-1.png"
import Arr1 from "./images/Стрелка.png"
import Arr2 from "./images/Стрелка-1.png"
import Footer from "./images/Footer.png"
import Vector from "./images/Vector 105.png"
import Quethions from "./images/Вопросы.png"
import JoinButton from "./images/Кнопка присоединиться.png"

const App = () => {
    return (
        <div className="grid">
            <Header/>
            <div className="add-wrapper-content">
                <Routes>
                    <Route path="/calendar" element={<Calendar/>} exact/>

                    <Route path="/events" element={<Events/>}/>

                    <Route path="/knowledge-base" element={<KnowledgeBase/>}/>

                    <Route path="/news" element={<News/>}/>

                    <Route path="/about-us" element={<AboutUs/>}/>
                </Routes>
                <img className="vector" src={Vector}/>
                <div className="bannerCss"> <img src={banner}/> </div>
                <div className="text"> Расписание </div>
                <div className="container">
                    <img className="hacs" src={Hac1}/>
                    <img className="hacs" src={Hac2}/>
                    <img className="hacs" src={Hac3}/>
                    <img className="hacs" src={Hac4}/>
                </div>
                <div className="text"> Новости </div>
                <div className="container">
                    <img className="hacs" src={News1}/>
                    <img className="hacs" src={News2}/>
                    <img className="hacs" src={News3}/>
                    <img className="hacs" src={News4}/>
                </div>
                <div className="button"><img src={AllNews}/></div>
                <div className="text"> Партнеры </div>
                <img className="partners" src={Carus}/>
                <div className="text"> Команда </div>
                <div className="container">
                    <img className="arr" src={Arr2}/>
                    <img className="team" src={Team}/>
                    <img className="arr" src={Arr1}/>
                </div>
                <div className="container"><img className="joinbutton" src={JoinButton}/></div>
                <div className="container"><img className="joinbutton" src={Quethions}/></div>
                <div className="container"><img className="vector" src={Vector}/></div>
                <div className="container"><img className="joinbutton" src={Footer}/></div>
            </div>
        </div>
    );
}

export default App;