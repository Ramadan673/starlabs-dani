import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default function sporti(props) {

    return (
        <div className="container">
            <button onClick={() => props.sortBy('Futboll')} className="btn  btn-primary">Futboll</button>
            <button onClick={() => props.sortBy('Basketball')} className="btn btn-danger">Basketball</button>
            <div className="row" style={{marginTop: "20px"}}>
                  {props.filtereddata.map((sport) =>
          <div className="card col-xs-6 col-md-2" style={{margin: "10px 5px"}}>
          <div className="card-header">
          {sport.sportCat}
          </div>
          <ul className="list-group list-group-flush">
                  <li className="list-group-item">{sport.player}</li>
                <li className="list-group-item">{sport.year}</li>
                <li className="list-group-item">{sport.price}</li>
          </ul>
          </div>
      )}
            </div>

        </div>
        
    )
}
