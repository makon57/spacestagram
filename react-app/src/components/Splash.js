import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { login } from "../store/session";


const Splash = () => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()

    const onDemoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'));
        return history.push(`/home`)
    };

    return (
        <>
            <div className='header-container'>
                <span className='user-header-name'>
                    <div className="span-header">
                    <h1>Welcome to Spacestagram!</h1>
                    {user ? null :
                    <div className='demo-header'>
                        <button className='demo-btn' onClick={onDemoLogin} type='button'>DEMO</button>
                    </div>
                    }
                    </div>
                </span>
            </div>
        </>
    )
}

export default Splash
