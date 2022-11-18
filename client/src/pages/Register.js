import {useState, useEffect} from 'react';
import { Logo, FormRow, Alert } from '../components/index';
import Wrapper from "../assets/wrappers/RegisterPage";
import {useAppContext} from "../context/appContext";
import {useNavigate} from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};


const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()

  const toggleMember = ()=>{
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
        displayAlert();
        return;
    };
    const currentUser = {name, email, password};
    if(isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
    };


    useEffect(()=>{
      if (user){
        setTimeout(()=>{
          navigate('/')
        },3000);
      }
    },[user,navigate])

  return (
    <Wrapper className="full-page">
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow name="name" type="text" value={values.name} handleChange={handleChange} className='form-input'/>
          )
        }
        {/* email & password input */}
        <FormRow name="email" type="email" value={values.email} handleChange={handleChange} className='form-input'></FormRow>
        <FormRow name="password" type="password" value={values.password} handleChange={handleChange} className='form-input'></FormRow>
        <button type="submit" className='btn btn-block' disabled={isLoading}>Submit</button>  {/* while its loading you can't submit, default value=false */}
        <p>
          {!values.isMember ? 'Already a member' : 'Nota a member yet'}?
          <button type='button' className="member-btn" onClick={toggleMember}>{! values.isMember ? 'Login' : 'Register'}</button>
        </p>
        
      </form>
    </Wrapper>
  )
};

export default Register