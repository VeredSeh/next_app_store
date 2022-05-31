import UserName from "./components/UserNameComponent";
import PasswordComponent from "./components/PasswordComponent";
import LoginButton from "./components/LoginButtonComponent";
import styles from "../styles/login.module.css";
import Image from 'next/image';
import { useState } from 'react';

export default function Login () {

const [userNameInput, setUserNameInput] = useState();

handleChange = (userName) => {
    setUserNameInput(userName);
}

    return (<div className={styles.loginDiv}>
    <h1 className={styles.welcome}>Welcome to Vered's website</h1>
    <Image src='/store.svg' alt='store icon' width={100} height={100}></Image>
    <UserName handleChange = {handleChange}></UserName>
    <PasswordComponent></PasswordComponent>
    <LoginButton></LoginButton>
    </div>
    )
}