import React,{Component} from 'react';
import {Card,Segment,Divider,Image,Icon} from 'semantic-ui-react';

class Portofolio extends Component {
render(){
    return(
        <Segment>
        <Divider horizontal>My Recent Works</Divider>
        <Card.Group stackable itemsPerRow={4} centered>
        <Card color="orange">
    <Image src='/assets/swiss.png' />
    <Card.Content>
      <Card.Header>Systems/Networks Management</Card.Header>
      <Card.Meta>NOV 2016 - JUN 2017</Card.Meta>
      <Card.Description>EZEE PMS deployment ,Networks Installation,Overall IT management</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github' />
        Swiss Lenana Mount Hotel.
      </a>
    </Card.Content>
  </Card>
        <Card color="orange">
    <Image src='/assets/century.png' />
    <Card.Content>
      <Card.Header>Century Hospitality Solutions</Card.Header>
      <Card.Meta>Aug 2017</Card.Meta>
      <Card.Description>Requirements analysis and Implementation of CHS site</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a target="_blank" href="http://centuryhospitalitysolutions.com">
        <Icon name='github' />
        Century Hospitality Solutions
      </a>
    </Card.Content>
  </Card>
        <Card color="orange">
    <Image src='/assets/word.png' />
    <Card.Content>
      <Card.Header>EXCEL TO WORD REPORTS</Card.Header>
      <Card.Meta>JAN 2018</Card.Meta>
      <Card.Description>Visual Basic project to produce Reports from spreadsheets </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github' />
        DTI-Naivasha.
      </a>
    </Card.Content>
  </Card>
        <Card color="orange">
    <Image src='/assets/portofolio.png' />
    <Card.Content>
      <Card.Header> Responsive Portofolio Website</Card.Header>
      <Card.Meta>JUL 2018</Card.Meta>
      <Card.Description>Creation of an own portofolio Website</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github' />
        https://github.com/muyani/myportofolio.git
      </a>
    </Card.Content>
  </Card>
       
  </Card.Group>
  </Segment>

    )
}
}
export default Portofolio;