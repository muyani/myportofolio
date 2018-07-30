import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Divider,Card } from 'semantic-ui-react'
import './education.css';
import {Link,Route,Switch} from 'react-router-dom';

export default class Education extends Component {
  state = { visible: false,text:"Show cards" }

  handleButtonClick = () => this.setState({ visible: !this.state.visible,text:"Hide cards" })

  handleSidebarHide = () => this.setState({ visible: false,text:"Show cards" })


  degree=()=>{
    return(
      <Segment secondary>
      <Card centered color="orange">
    <Image src='/assets/degree.png'  />
    <Card.Content>
      <Card.Header>Bachelors in Science(Computer Science)</Card.Header>
      <Card.Meta>Sept 2012-Jul 2016</Card.Meta>
      <Card.Description>Second Class Honours (Upper Division).</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='student'/>
        Laikipia University
      </a>
    </Card.Content>
  </Card>
  </Segment>
    )
  }
  mobile=()=>{
    return(
      <Segment secondary>
      <Card centered color="orange">
    <Image src='/assets/mobile.png'  />
    <Card.Content>
      <Card.Header>Certificate (Mobile Web Specialist Track)</Card.Header>
      <Card.Meta>March 2018-Jul 2018</Card.Meta>
      <Card.Description>Certificate of Achievement.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='student'/>
        Udacity - Google - Andela Learning Community
      </a>
    </Card.Content>
  </Card>
  </Segment>
    )
  }
  dbadmin=()=>{
    return(
      <Segment secondary>
      <Card centered color="orange">
    <Image src='/assets/database.png'  />
    <Card.Content>
      <Card.Header>Oracle 12c Database Administrator</Card.Header>
      <Card.Meta>Jul 2016-Aug 2016</Card.Meta>
      <Card.Description>Certificate of Achievement.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='student'/>
        Oracle University - Computer Pride
      </a>
    </Card.Content>
  </Card>
  </Segment>
    )
  }
  secondary=()=>{
    return(
      <Segment secondary>
      <Card centered color="orange">
    <Image src='/assets/secondary.png'  />
    <Card.Content>
      <Card.Header>K C S E</Card.Header>
      <Card.Meta>Feb 2008-Nov 2011</Card.Meta>
      <Card.Description>Kenya Certificate Of Secondary Education</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='student'/>
        Molo Academy.
      </a>
    </Card.Content>
  </Card>
  </Segment>
    )
  }
  primary=()=>{
    return(
      <Segment secondary>
      <Card massive centered color="orange">
    <Image src='/assets/primary.png'   />
    <Card.Content>
      <Card.Header>K C P E</Card.Header>
      <Card.Meta>Jan 1999-Nov 2007</Card.Meta>
      <Card.Description>Kenya Certificate of Primary Education</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='student'/>
        Ole Ntutu Arid Zone.
      </a>
    </Card.Content>
  </Card>
  </Segment>
    )
  }

  render() {
    const { visible } = this.state

    return (
      <div>
          <Divider horizontal>Education and Qualifications</Divider>
        <Button color="orange" inverted onClick={this.handleButtonClick}>{this.state.text}</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            color="orange"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin' divided
          >
            <Link to="/education/mobile"><Menu.Item>
              <Icon name='mobile' />
              Mobile Web. 
            </Menu.Item></Link>
            <Link to="/education/dbadmin">
            <Menu.Item>
              <Icon name='database' />
              Database Admin.
            </Menu.Item></Link>
            <Link to="/education/degree">
            <Menu.Item>
              <Icon name='student' />
              Bachelor's Degree.
            </Menu.Item></Link>
            <Link to="/education/secondary">
            <Menu.Item>
              <Icon name='certificate' />
              Knec K.C.S.E
            </Menu.Item></Link>
            <Link to="/education/primary"><Menu.Item>
              <Icon name='certificate' />
              Knec K.C.P.E
            </Menu.Item></Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment inverted color="grey" secondary className="segheight" textAlign="center" basic>
              <Header centered as='h2'>Qualification Cards</Header>
              <Switch>
                <Route path="/education/mobile" component={this.mobile}></Route>
                <Route path="/education/dbadmin" component={this.dbadmin}></Route>
                <Route path="/education/secondary" component={this.secondary}></Route>
                <Route path="/education/primary" component={this.primary}></Route>
                <Route exact path="/education/degree" component={this.degree}></Route>
              </Switch>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}