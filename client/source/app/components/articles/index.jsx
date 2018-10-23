import React, { Component } from 'react';
import { Segment, Input, Button, Form } from 'semantic-ui-react';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      thumbnail: null,
      photo: null,
      products: '',
      expertId: null
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.changeProducts = this.changeProducts.bind(this);
    this.changeExpert = this.changeExpert.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeTitle(e, { value }) {
    this.setState({ title: value });
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  changeThumbnail(file) {
    this.setState({ thumbnail: file });
  }

  changePhoto(file) {
    this.setState({ photo: file });
  }

  changeProducts(products) {
    this.setState({ products });
  }

  changeExpert(e, { value }) {
    this.setState({ expertId: value });
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    return (
      <Segment className='homeContests' raised textAlign='center'>
        <Form onSubmit={this.handleClick} >
          <Input onChange={this.changeTitle} label='Tytuł' />
          <Input onChange={this.changeText} label='HTML Text' />
          <Input onChange={this.changeProducts} label='Id produktów po przecinku np. 1,4,6,123,2' />
          <Input onChange={this.changeExpert} label='Id experta' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
      </Segment>
    );
  }
}

export default Articles;
