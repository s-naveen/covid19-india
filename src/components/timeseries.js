import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

function TimeSeries(props) {
  const [data, setData] = useState([]);
  const [datapoint, setDatapoint] = useState({});
  const [fetched, setFetched] = useState(false);

  const graphParent = useRef(null);

  useEffect(()=>{
    if (fetched===false) {
      getTimeSeries();
    }
  }, [fetched]);

  useEffect(()=>{
    graphParent.current.scrollLeft = 999999;
  }, [graphParent.current]);

  const getTimeSeries = () => {
    axios.get('https://api.steinhq.com/v1/storages/5e6fd8b1b88d3d04ae081598/cases_time_series')
        .then((response)=>{
          setData(response.data);
          setDatapoint(response.data[10]);
          setFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="TimeSeries">

      <div className="map-stats fadeInUp" style={{animationDelay: '1.5s'}}>
        <div className="heading state-heading"><b>{datapoint.Date} 2020</b></div>
        <nav className="level">
          <div className="level-item">
            <div>
              <p className="heading">Confirmed</p>
              <p className="title">{datapoint.Confirmed}</p>
            </div>
          </div>
          <div className="level-item">
            <div>
              <p className="heading">Recovered</p>
              <p className="title">{datapoint.Recovered}</p>
            </div>
          </div>
          <div className="level-item">
            <div>
              <p className="heading">Deaths</p>
              <p className="title">{datapoint.Deceased}</p>
            </div>
          </div>
        </nav>
      </div>

      <h2>Cumulative Time-Series Graph</h2>

      <div className="graph-parent" ref={graphParent}>
        {
          data.map((datapoint, index) => {
            return (
              <div key={index} className="bar-parent">
                <div key={index} className="bar" onMouseOver={()=>{
                  setDatapoint(datapoint);
                }} style={{height: datapoint['Total Confirmed']*1, left: index*15}}>
                </div>
                <label style={{left: ((index-2.5)*15), display: index%5==0 ? 'initial' : 'none'}}>{datapoint.Date.toUpperCase().slice(0, 6)}</label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default TimeSeries;
