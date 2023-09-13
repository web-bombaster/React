import { NavComponent } from '../nav/NavComponent';
import styles from './page1.module.css';


export const Home = ({imageLink,text}) => {
    
    return (
        <>
        <NavComponent/>
        <div style={{
            backgroundColor:'blue',
            width:'100%',
            height:'100vh'
        }}></div>
        <p>{text}</p>
        </>
    )
}