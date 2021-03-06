import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'
import CoronaImage from './images/image.png'
import Header from './components/Header'


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  };

  //CountryChange function 
  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the data
    this.setState({ data: fetchedData, country: country })
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header/>
        <img src={CoronaImage} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

      </div>
    )
  }
}

export default App;
