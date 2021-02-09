import styled from 'styled-components'

export const Step = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 2rem;
`
export const Input = styled.input`
    width: 11rem;
    height: 2em;
    color: rgba(255, 255, 255, 0.7);
    background-color: transparent;
    outline: 0;
    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`

export const BtnAdd = styled.button`
    padding-left: 10px;
    color: #FFF;
    &:active {
        color: #25c9fa;
        transform: scale(1.5);
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    background: #535960;
    color: #FFF;
    font-size: 1.2rem;
    outline: 0;
    padding: 0.7rem;
    border-radius: 0.6rem;
    ::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`