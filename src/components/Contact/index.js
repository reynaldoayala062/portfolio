import React from 'react'
import emailjs from 'emailjs-com'
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2, ImgWrap, Img, Form, FormH1, FormLabel, FormInput, ContactItem, Textarea, Button, FormButton} from './ContactElements'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_juz9ubs', 'template_ddeilqt', e.target, 'user_fe0cAdfvqK8cCfcYkzey6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    

    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactRow>
                    <Column1> 
                        <Form onSubmit={sendEmail}>
                            <FormH1> Leave a message</FormH1>
                                <ContactItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormInput type="name" name="name"/>
                                </ContactItem>
                                <ContactItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormInput type="email" name="email"/>
                                </ContactItem>
                                <ContactItem>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea id='textboxid' name="message"/>
                                </ContactItem>
                                <Button>
                                    <FormButton type="submit" value="Send">Send now</FormButton>
                                </Button>
                        </Form>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={require("../../images/svg-5.svg").default} alt=""/> 
                        </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
