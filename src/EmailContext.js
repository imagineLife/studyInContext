import React from 'react';
import { fetchEmails, fetchLatestEmails } from './apiData';
import { withNotifier } from './NotificationContext';

const { Provider, Consumer } = React.createContext();

class EmailProvider extends React.Component {
  state = {
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });
    fetchEmails()
      .then(emails =>
        this.setState({ loading: false, emails })
      )
      .catch(error =>
        this.setState({ loading: false, error })
      );

    //refresh emails
    this.refreshInterval = setInterval(this.refresh, 5000)
  }

  refresh = () => {
    if (!this.state.loading) {
      fetchLatestEmails().then(emails => {
        if (emails.length > 0) {
          this.setState(state => ({
            emails: state.emails.concat(emails)
          }));
          // notify!
          this.props.notify(
            `${emails.length} more emails arrived`
          );
        }
      });
    }
  };

  handleSelectEmail = email => {
    console.log('email here')
    console.log(email)
    
    this.setState({ currentEmail: email });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onSelectEmail: this.handleSelectEmail
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

let WrappedEmail = withNotifier(EmailProvider)

export { 
  WrappedEmail as EmailProvider, 
  Consumer as EmailConsumer,
  // EmailProvider
};