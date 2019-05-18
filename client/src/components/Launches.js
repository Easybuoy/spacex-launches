import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Triple } from 'react-preloading-component';

import LaunchItem from "./LaunchItem";
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
    componentDidMount() {
        
    }
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            console.log(loading);
            console.log(error);
            console.log(data);
            console.log(Object.keys(data).length)
            if (Object.keys(data).length > 0) {
              return (
                <Fragment>
                  {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}
                </Fragment>
              );
            }

            return <Triple />
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
