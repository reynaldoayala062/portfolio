import React from 'react'
import emailjs from 'emailjs-com'
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2, ImgWrap, Img, Form, FormH1, NameContainer, ContactItemName, FormLabel, FormInput, ContactItem, Textarea, Button} from './ContactElements'

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
        <ContactContainer>
            <ContactWrapper>
                <ContactRow>
                    <Column1> 
                        <Form onSubmit={sendEmail}>
                            <FormH1> Leave a message</FormH1>
                            <NameContainer>
                                <ContactItemName>
                                    <FormLabel>First Name</FormLabel>
                                    <FormInput type="first-name" name="first-name"/>
                                </ContactItemName>
                                <ContactItemName>
                                    <FormLabel>Last Name</FormLabel> 
                                    <FormInput type="last-name" name="last-name"/>
                                </ContactItemName>
                            </NameContainer>
                            {/* <ContactItem>
                                <FormLabel>Phone</FormLabel>
                                <FormInput type="phone" name="phone"/>
                            </ContactItem>                     */}
                            <ContactItem>
                                <FormLabel>Email</FormLabel>
                                <FormInput type="email" name="email"/>
                            </ContactItem>
                            <ContactItem>
                                <FormLabel>Message</FormLabel>
                                <Textarea id='textboxid' name="message"/>
                            </ContactItem>
                            <Button>
                                <FormInput type="submit" value="Send"/>
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
