import { Link } from 'react-router-dom';
import * as Styled from './ErrorPage.style';
import React from 'react';

class ErrorPage extends React.Component {
  
  render() {
    return (
      <Styled.Error>
        <Styled.Text>Page does not exist</Styled.Text>
        <Styled.Link>
          <Link className="error__link" to="/">
            Back to main page
          </Link>
        </Styled.Link>
      </Styled.Error>
    );
  }
};

export default ErrorPage;
