import styles from './UserName.module.css';

const UserName  = (props) => {
   

    const handleChange = (event) =>{
        props.handleChange(event.target.value);
    }

   return ( <div >
        <input type='text' placeholder='UserName' className={styles.userInput} onChange ={handleChange}></input>
    </div> );
}
 
export default UserName ;