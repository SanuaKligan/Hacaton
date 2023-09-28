import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom"
import telegram from "../../images/Телеграм.png"
import discord from "../../images/Дискорд.png"
import HACRT from "../../images/ХАKATOНЫ.РТ.png"
import logIn from "../../images/Войти.png"
import Calen from "../../images/Календарь.png"
import ev from "../../images/События.png"
import knb from "../../images/База знаний.png"
import nws from "../../images/Новости.png"
import abus from "../../images/О нас.png"

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.item}>
                        <img className = {classes.logoHacRT} src={HACRT}/>
                    </div>
                </div>
                <div className={classes.center}>
                    <div className={classes.item}>
                        <NavLink to={"/calendar"}>
                            <img className={classes.menutext} src={Calen}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/events">
                            <img className={classes.menutext} src={ev}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/knowledge-base">
                            <img className={classes.menutext} src={knb}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news">
                            <img className={classes.menutext} src={nws}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="about-us">
                            <img className={classes.menutext} src={abus}/>
                        </NavLink>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.item}>
                        <NavLink to="/https://t.me/hack_rt">
                            <img className={classes.minilogo} src={telegram}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="https://discord.gg/rWGheacb">
                            <img className={classes.minilogo} src={discord}/>
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="https://web.telegram.org/k/#@hackhatonrt_bot"
                                 className={classes.item}>
                            <img className={classes.logIn} src={logIn}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

