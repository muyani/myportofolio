import React ,{Component} from 'react';
import {Segment,Container,Header,Image,Grid, Icon, Divider} from 'semantic-ui-react';
import './profile.css';
import Role from './roleAnimation';
import Skills from './skills';
import Education from './education';
import Portofolio from './portofolio.js';

class Profile extends Component{
    state={
        color:'orange'
    }
    render(){
        const {color}=this.state;
        return (
            <Container fluid>
            <Container className="backgroundPic" textAlign="center" fluid>
           
                 <div className="minHeight transparent ">
                     <br/>
                     <br/>
                     <Header color={color} as='h1'>Muyani Letina</Header>
                 <Image src="/assets/profilephoto.jpg" size="small" spaced centered circular/>
                 <Divider horizontal>Expertise</Divider>
                 <Grid stackable columns={7} divided>
                     <Grid.Row>
                         <Grid.Column></Grid.Column>
                         <Grid.Column>
                             <Header color={color} as="h2" > Web Specialist</Header>
                         </Grid.Column>
                         <Grid.Column>
                         <Icon size="big" color={color} name="hourglass"/>
                         </Grid.Column>
                         <Grid.Column>
                             <Header color={color} as="h2" > Data Scientist</Header>
                         </Grid.Column>
                         <Grid.Column>
                         <Icon size="big" color={color} name="hourglass"/>
                         </Grid.Column>
                         <Grid.Column>
                             <Header color={color} as="h2" > Instructor</Header>
                         </Grid.Column>
                         <Grid.Column></Grid.Column>
                         
                     </Grid.Row>
                    
                 </Grid>
                 <br/>
                 <Divider horizontal>Contact</Divider>
                 <Header color={color} as='h4'>Telephone :<a href="tel:+254706277341">+254706277341</a></Header>
                 <Header color={color} as='h4'>Github :<a href="https://github.com/muyani">https://github.com/muyani</a></Header>
                 <Header color={color} as='h4'>Linked-In :<a href="https://linkedin.com/in/muyani-letina-037726b0/">https://www.linkedin.com/in/muyani-letina-037726b0/</a></Header>
                 
            
                
                 
                 <Divider horizontal>Professional Profile</Divider>
                <Segment compact>
                 
                <div className="alignMargin"><em><strong> I am a professional technology enthusiast who is keen on delivering a better web
experience universally to any human being using the web today. I am young,
adventurous and ambitious enough to think we are barely one percent of where we
are supposed to be and I dream of being part of making it 100 eventually.
I am looking for an equally ambitious company/team to work with in delivering the
dream one fireball after another. I am looking forward to your contact.</strong></em></div>
</Segment>
</div>


                   
                
                 <div className="bg1">
                </div>
                </Container>
                <Divider horizontal > Skills & Competencies</Divider>
                <Skills/>
                <Portofolio/>
                <Divider horizontal>Testimonials</Divider>
                <div className="bg">
                    <div className="inbg">
         
                    </div>
                  


                </div>
                <Education/>
                <Divider horizontal>Hobbies & Interests</Divider>
                <div className="bg">
                    <div className="inbg">
         
                    </div>
                  


                </div>
               
                </Container>
        )
    }
}
export default Profile;
