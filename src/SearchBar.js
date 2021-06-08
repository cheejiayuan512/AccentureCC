import { SearchBar as Search }  from 'react-native-elements';
import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    let placeholder = this.props.placeholder;
    if (placeholder == null) {
      placeholder = "Search an activity!"
    }
    return (
      <Search
        placeholder= {placeholder}
        onChangeText={this.updateSearch}
        value={search}
        round={true}
        containerStyle={{color:'white'}}

      />
    );
  }
}
