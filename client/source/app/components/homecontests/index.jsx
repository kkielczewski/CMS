import React, { Component } from 'react';
import { Segment, Input, Button, Form } from 'semantic-ui-react';
import FileButton from '../form-fields/file-button';

class Homecontests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeLink: '',
      insta1: {
        link: '',
        thumbnail: null
      },
      insta2: {
        link: '',
        thumbnail: null
      },
      facebook1: {
        link: '',
        thumbnail: null
      },
      facebook2: {
        link: '',
        thumbnail: null
      }
    };

    this.changeYoutube = this.changeYoutube.bind(this);
    this.changeInsta1 = this.changeInsta1.bind(this);
    this.changeInsta1File = this.changeInsta1File.bind(this);
    this.changeInsta2 = this.changeInsta2.bind(this);
    this.changeInsta2File = this.changeInsta2File.bind(this);
    this.changeFacebook1 = this.changeFacebook1.bind(this);
    this.changeFacebook1File = this.changeFacebook1File.bind(this);
    this.changeFacebook2 = this.changeFacebook2.bind(this);
    this.changeFacebook2File = this.changeFacebook2File.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeYoutube(e, { value }) {
    this.setState({ youtubeLink: value });
  }

  changeInsta1(e, { value }) {
    this.setState({ insta1: { link: value, thumbnail: this.state.insta1.thumbnail } });
  }

  changeInsta1File(file) {
    this.setState({ insta1: { link: this.state.insta1.link, thumbnail: file } });
  }

  changeInsta2(e, { value }) {
    this.setState({ insta2: { link: value, thumbnail: this.state.insta1.thumbnail } });
  }

  changeInsta2File(file) {
    this.setState({ insta2: { link: this.state.insta1.link, thumbnail: file } });
  }

  changeFacebook1(e, { value }) {
    this.setState({ facebook1: { link: value, thumbnail: this.state.facebook1.thumbnail } });
  }

  changeFacebook1File(file) {
    this.setState({ facebook1: { link: this.state.facebook1.link, thumbnail: file } });
  }

  changeFacebook2(e, { value }) {
    this.setState({ facebook2: { link: value, thumbnail: this.state.facebook2.thumbnail } });
  }

  changeFacebook2File(file) {
    this.setState({ facebook2: { link: this.state.facebook2.link, thumbnail: file } });
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    return (
      <Segment className='homeContests' raised textAlign='center'>
        <Form onSubmit={this.handleClick} >
          <Input onChange={this.changeYoutube} label='Youtube link' />
          <Input onChange={this.changeInsta1} label='Link do pierwszego konkursu Instagram' />
          <FileButton onSelect={this.changeInsta1File} label='Zdjecie pierwszego konkursu Instagram' />
          <Input onChange={this.changeInsta2} label='Link do drugiego konkursu Instagram' />
          <FileButton onSelect={this.changeInsta2File} label='Zdjecie drugiego konkursu Instagram' />
          <Input onChange={this.changeFacebook1} label='Link do pierwszego konkursu Facebook' />
          <FileButton onSelect={this.changeFacebook1File} label='Zdjecie pierwszego konkursu Facebook' />
          <Input onChange={this.changeFacebook2} label='Link do drugiego konkursu Facebook' />
          <FileButton onSelect={this.changeFacebook2File} label='Zdjecie drugiego konkursu Facebook' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
      </Segment>
    );
  }
}

// extended main view with translate hoc
export default Homecontests;
