import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";
import SaveBtn from "../SaveBtn";
// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the Book api call
export function BookListItem({
  image = "https://placehold.it/300x300",
  title,
  description,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <button><a rel="noreferrer noopener" target="_blank" href={link}>
              View
            </a></button>
            <SaveBtn/>
          </Col>
        </Row>
      </Container>
    </li>
  );
}