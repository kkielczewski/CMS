import React, { Component } from 'react';
import { Segment, Input, Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class Homecontests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeLink: '',
      insta1: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      insta2: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      facebook1: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      facebook2: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      }
    };

    this.changeYoutube = this.changeYoutube.bind(this);
    this.changeInsta1 = this.changeInsta1.bind(this);
    this.changeInsta1Name = this.changeInsta1Name.bind(this);
    this.changeInsta1File = this.changeInsta1File.bind(this);
    this.changeInsta2 = this.changeInsta2.bind(this);
    this.changeInsta2Name = this.changeInsta2Name.bind(this);
    this.changeInsta2File = this.changeInsta2File.bind(this);
    this.changeFacebook1 = this.changeFacebook1.bind(this);
    this.changeFacebook1Name = this.changeFacebook1Name.bind(this);
    this.changeFacebook1File = this.changeFacebook1File.bind(this);
    this.changeFacebook2 = this.changeFacebook2.bind(this);
    this.changeFacebook2Name = this.changeFacebook2Name.bind(this);
    this.changeFacebook2File = this.changeFacebook2File.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeYoutube(e, { value }) {
    this.setState({ youtubeLink: value });
  }

  changeInsta1(e, { value }) {
    this.setState({ insta1: { link: value, thumbnailName: this.state.insta1.thumbnailName, thumbnail: this.state.insta1.thumbnail } });
  }

  changeInsta1Name(e, { value }) {
    this.setState({ insta1: { link: this.state.insta1.link, thumbnailName: value, thumbnail: this.state.insta1.thumbnail } });
  }

  changeInsta1File(event) {
    const image = event.target.files.item(0);
    console.log(image);
    this.setState({ insta1: { link: this.state.insta1.link, thumbnailName: this.state.insta1.thumbnailName, thumbnail: image } });
  }

  changeInsta2(e, { value }) {
    this.setState({ insta2: { link: value, thumbnailName: this.state.insta2.thumbnailName, thumbnail: this.state.insta2.thumbnail } });
  }

  changeInsta2Name(e, { value }) {
    this.setState({ insta2: { link: this.state.insta2.link, thumbnailName: value, thumbnail: this.state.insta2.thumbnail } });
  }

  changeInsta2File(event) {
    const image = event.target.files.item(0);
    console.log(image);
    this.setState({ insta2: { link: this.state.insta2.link, thumbnailName: this.state.insta2.thumbnailName, thumbnail: image } });
  }

  changeFacebook1(e, { value }) {
    this.setState({ facebook1: { link: value, thumbnailName: this.state.facebook1.thumbnailName, thumbnail: this.state.facebook1.thumbnail } });
  }

  changeFacebook1Name(e, { value }) {
    this.setState({ facebook1: { link: this.state.facebook1.link, thumbnailName: value, thumbnail: this.state.facebook1.thumbnail } });
  }

  changeFacebook1File(event) {
    const image = event.target.files.item(0);
    console.log(image);
    this.setState({ facebook1: { link: this.state.facebook1.link, thumbnailName: this.state.facebook1.thumbnailName, thumbnail: image } });
  }

  changeFacebook2(e, { value }) {
    this.setState({ facebook2: { link: value, thumbnailName: this.state.facebook2.thumbnailName, thumbnail: this.state.facebook2.thumbnail } });
  }

  changeFacebook2Name(e, { value }) {
    this.setState({ facebook2: { link: this.state.facebook2.link, thumbnailName: value, thumbnail: this.state.facebook2.thumbnail } });
  }

  changeFacebook2File(event) {
    const image = event.target.files.item(0);
    console.log(image);
    this.setState({ facebook2: { link: this.state.facebook2.link, thumbnailName: this.state.facebook2.thumbnailName, thumbnail: image } });
  }

  handleClick() {
    const tmp = [];
    tmp.push(this.state.insta1.thumbnail);
    tmp.push(this.state.insta2.thumbnail);
    tmp.push(this.state.facebook1.thumbnail);
    tmp.push(this.state.facebook2.thumbnail);
    const uploaders = tmp.map((image) => {
      const data = new FormData();
      data.append('image', image, image.name);
      // AJAX
      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {
          console.log(response.data.imageUrl);
        });
    });
  }

  render() {
    return (
      <Segment className='homeContests' raised textAlign='center'>
        <Form onSubmit={this.handleClick} >
          <Input onChange={this.changeYoutube} label='Youtube link' />
          <Input onChange={this.changeInsta1} label='Link do pierwszego konkursu Instagram' />
          <Input onChange={this.changeInsta1Name} label='Nazwa zdjecia' />
          <div>Zdjecie pierwszego konkursu Instagram</div>
          <input className="form-control " type="file" onChange={this.changeInsta1File} multiple/>
          <Input onChange={this.changeInsta2} label='Link do drugiego konkursu Instagram' />
          <Input onChange={this.changeInsta2Name} label='Nazwa zdjecia' />
          <div>Zdjecie drugiego konkursu Instagram</div>
          <input className="form-control " type="file" onChange={this.changeInsta2File} multiple/>
          <Input onChange={this.changeFacebook1} label='Link do pierwszego konkursu Facebook' />
          <Input onChange={this.changeFacebook1Name} label='Nazwa zdjecia' />
          <div>Zdjecie pierwszego konkursu Facebook</div>
          <input className="form-control " type="file" onChange={this.changeFacebook1File} multiple/>
          <Input onChange={this.changeFacebook2} label='Link do drugiego konkursu Facebook' />
          <Input onChange={this.changeFacebook2Name} label='Nazwa zdjecia' />
          <div>Zdjecie drugiego konkursu Facebook</div>
          <input className="form-control " type="file" onChange={this.changeFacebook2File} multiple/>
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
