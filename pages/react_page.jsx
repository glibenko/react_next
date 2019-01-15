import React from 'react';
import Layout from './components/layout';

export default class ReactPage extends React.Component {
  state = {
    showBlock: false,
    img: '',
    loaded: false
  }

  fetchData = () => {
    // this.setState({loaded: false});
    fetch('https://picsum.photos/200/200/?random')
      .then((res) => {
        this.setState({ loaded: true, img: res.url })
      });
  }

  render() {
    const { showBlock, loaded, img } = this.state;
    return (
      <Layout>
        <div className="react">
          <div className="name">react page it can be big</div>
          <div className="btn btn-1" onClick={() => this.setState({ showBlock: !showBlock })}>
            Click for show block
          </div>
          <div className="btn btn-2" onClick={() => this.fetchData()}>
            Click for fetch img
          </div>
          {loaded && <div className="img"> <img src={img} alt=""/> </div> }
          {showBlock && <div className="other"> other block </div>}
        </div>
      </Layout>
    );
  }
};
