import styled from 'styled-components'

export const ContactContainer = styled.div`
    color: #fff;
    background: #010606;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 868px) {
        max-width: 650px;
        height: 850px;
    }

    @media screen and (max-width: 568px) {
        max-width: 300px;
        height: 750px;
    }
`;

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col1 col2'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1 col2` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FormH1 = styled.h1`
    color: #00FFFF;
    font-size: 22px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 25px;
    margin-left: 10px;
`

export const ContactItemName = styled.div`
    justify-content: space-between;
    padding: 5px;
    flex-direction: column;
`

export const FormLabel = styled.label`
    
`

export const FormInput = styled.input`
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: none /* Gray border */;
    border-bottom: 2px solid #00FFFF;
    background-color: #010606;
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: horizontal; /* Allow the user to vertically resize the textarea (not horizontally) */
    color: #00FFFF;
    
`


export const ContactItem = styled.div`
    justify-content: center;
    padding: 10px;
`

export const Textarea = styled.textarea`
    justify-content: space-around;
    padding: 10px;
    flex-direction: row;
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: none /* Gray border */;
    border-bottom: 2px solid #00FFFF;
    background-color: #010606;
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: horizontal /* Allow the user to vertically resize the textarea (not horizontally) */;
    color: #00FFFF;
`

export const Button = styled.div`
    margin-left: 10px;

`
export const FormButton = styled.button`
    border-radius: 50px; /* Rounded borders */
    background: #00FFFF;
    padding: 12px 30px; /* Some padding */ 
    font-size: 16px;
    border: none;
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff; 
    }
`



