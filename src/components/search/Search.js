import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }

  render() {
    const { searchText, onInputChange } = this.props;

    return (
      <div className={'search'}>
        <input
        ref={this.inputRef}
          placeholder={'Search for meetups..'}
          defaultValue={searchText}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Search;