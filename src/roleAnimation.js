import React,{Component} from 'react';
import {Form,Input,Icon} from 'semantic-ui-react';

class Role extends Component {
    state={
        role:' '
    }
    
    render(){
        const {role}=this.state;

        return (
                      <Form>
    <Form.Group inline>
      <Form.Field>
        <Input value={role} />
      </Form.Field>
      <Icon name=""/>
      <Form.Field>
        <Input placeholder='xxx' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxxx' />
      </Form.Field>
    </Form.Group>
  </Form>

        )
    }
}
export default Role;