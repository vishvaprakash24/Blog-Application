import React, {useEffect, useState} from "react";
import { Box, TextField, Button, styled , Typography} from "@mui/material";
import Logo from "/Logo.svg";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 10px;
    }
`
const PrimaryButton = styled(Button)`
    border-radius: 2px;
    background: #222121;
    color: #fff;
    height: 48px;
    &:hover{
        background: #1a1919;
    }
`
const SecondaryButton = styled(Button)`
    text-transform: none;
    background: transparent;
    color: #000;
    height: 48px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    `;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`
const signupInitialValues = {
  name: '',
  username: '',
  password: ''
} 
const signupUser = () => {
  
}

const Login = () => {
    const [account, setAccount] = useState('login');

    const toggleSignup = () => {
        account === 'login' ? setAccount('signup') : setAccount('login')
    }
    const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value})
    } 

    
    
    const [signup, setSignup] = useState(signupInitialValues);

    
    useEffect(() => {
      console.log(signup);
    }, [signup]);
  return (
    <Component>
      <Box>
        <Image src={Logo} alt="" />
        {
            account === 'login' ? 
            <Wrapper>
                <TextField variant="standard" label="Enter Username" />
                <TextField variant="standard" label="Enter Password" />
                <PrimaryButton variant="contained">Login</PrimaryButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SecondaryButton onClick={()=>toggleSignup()}>Create an account</SecondaryButton>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="name" label="Enter Name" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                <PrimaryButton onClick={() => signupUser()} variant="contained">Register</PrimaryButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SecondaryButton onClick={()=>toggleSignup()}>Already have an account</SecondaryButton>
            </Wrapper>

        }
      </Box>
    </Component>
  );
};

export default Login;
