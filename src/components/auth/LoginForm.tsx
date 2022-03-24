import styled from 'styled-components'

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

const LoginForm = () => {
    return <StyledLoginForm>
        <input type="text" />
        <input type="password" />
        <button>로그인</button>
    </StyledLoginForm>
}
export default LoginForm;