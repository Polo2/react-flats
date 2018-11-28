import React, { Component } from 'react';
import SimpleMap from './simple_map';
import FlatList from './flat_list';
import flats from '../../data/flats';
// import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "polo",
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container ">
          <SimpleMap />
          <div>
            Hello {this.state.name} !
          </div>
        </div>
      </div>
    );
  }
}

export default App;

