import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react'
import './education.css';

export default class Education extends Component {
  state = { visible: false,text:"show details" }

  handleButtonClick = () => this.setState({ visible: !this.state.visible,text:"hide details" })

  handleSidebarHide = () => this.setState({ visible: false,text:"show details" })

  render() {
    const { visible } = this.state

    return (
      <div>
          <Divider horizontal>Education and Qualifications</Divider>
        <Button onClick={this.handleButtonClick}>{this.state.text}</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='mobile' />
              Mobile Web. 
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='database' />
              Database Admin.
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='student' />
              Bachelor's Degree.
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='certificate' />
              Kenya.C.S.E
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='certificate' />
              Kenya.C.P.E
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment secondary className="segheight" textAlign="center" basic>
              <Header as='h3'></Header>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}