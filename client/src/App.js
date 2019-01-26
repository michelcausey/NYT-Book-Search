import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import Saved from "./components/Saved";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks("Harry Potter")
      .then(res =>
        this.setState({ books: res.data, bookSearch: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    console.log(this.state.bookSearch)
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div>
          <Route exact path="/about" component={Saved} />
        </div>
        </Router>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.deleteBook}
                        type="success"
                        className="input-lg"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h4 className="text-center">No Books to Display</h4>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.id}
                        authors={book.volumeInfo.authors}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                      />
                    );
                  })}
                
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;