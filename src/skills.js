import React,{Component} from 'react';
import {Card,Image,Icon} from 'semantic-ui-react';


class Skills extends Component{
render(){
    return (
<Card.Group stackable itemsPerRow={3} centered>
        <Card color="orange">
    <Image src='./assets/react.png' />
    <Card.Content>
      <Card.Header>React Developer</Card.Header>
      <Card.Meta>Started in Jul 2017</Card.Meta>
      <Card.Description>React is my most favourite javascript Framework.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github' />
        3 Projects with React Js.
      </a>
    </Card.Content>
  </Card>
        <Card color="orange">
    <Image src='./assets/pwas.jpg' fluid />
    <Card.Content>
      <Card.Header>Service Worker/Caching Master</Card.Header>
      <Card.Meta>Started in Feb 2018</Card.Meta>
      <Card.Description>Design and Development of Offline First Web applications.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github' />
        2 Projects with PWAs.
      </a>
    </Card.Content>
  </Card>
        <Card color="orange">
    <Image src='./assets/semantic.png' fluid />
    <Card.Content>
      <Card.Header>Semantic UI Developer</Card.Header>
      <Card.Meta>Started in Jul 2017</Card.Meta>
      <Card.Description>Semantic UI is my most favourite CSS Framework.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='github'/>
        3 Projects with Semantic UI.
      </a>
    </Card.Content>
  </Card>
  </Card.Group>
    )
}
}
export default Skills