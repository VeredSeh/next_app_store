import styles from './Password.module.css';

const PasswordComponent  = () => {
    return ( <div>
       < input type="password" name="password"  placeholder='Password' className={styles.passwordInput}/>
    </div> );
}
 
export default PasswordComponent ;