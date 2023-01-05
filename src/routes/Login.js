import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import "./Login.css";
import "../App.css";

const Login = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  )
}

export default Login;