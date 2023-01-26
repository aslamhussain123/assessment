import React from "react";
import { useState } from "react";
import { UserStatisticData } from "../../data/StatesData";
import LineChart from "../LineChart";
import { userDataForChart } from "../../data/ChartData";
import { TopRiders } from "../../data/StatesData";
import ActiveOrders from "../ActiveOrders";

const Home = () => {
  const [dataChart, setDataChart] = useState({
    datasets: [
      {
        label: "Weekly users",
        data: userDataForChart.map((e) => e.userGain),
      },
      {
        label: "Monthly users",
        data: userDataForChart.map((e) => e.userGain),
      },
    ],
    labels: userDataForChart.map((data) => data.period),
  });

  return (
    <div className="body-content">
      <div className="tqmFilter d-flex justify-content-between">
        <button className="btn px-3 btn-default primaryBtn filterBtn text-muted">
          Filter By
        </button>
        <button className="btn btn-danger tqmBtn senendaryBtn">TQM</button>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-3">
          <div className="user__statistics">
            {UserStatisticData &&
              UserStatisticData.map((data) => {
                return (
                  <div
                    className="statistic__col text-center shadowEffect d-flex flex-column justify-content-around align-items-center p-4"
                    key={data.id}
                  >
                    <i className={data.icon}></i>
                    <p className="individuals mt-2">{data.name}</p>
                    <p className="totalStats text-muted mb-0">{data.total}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-6 chartLine mb-3">
          <div className="card shadowEffect">
            <div className="card-header">
              <h6 className="text-muted mb-0">USER STATISTICS</h6>
            </div>
            <div className="card-block h-100 px-3 pb-1">
              <div id="userStatisticsChart">
                <LineChart chartData={dataChart} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="topRider_wrapper">
            {TopRiders.map((riderData) => {
              return (
                <div className="rider__content d-flex align-items-center justify-content-between shadowEffect py-4 p-3">
                  <div className="topRiderRibbon">Top rider</div>
                  <div className="inner--content">
                    <div className="rider--info d-flex align-items-center">
                      <div className="rider--img mr-2">
                        <img src={riderData.image} alt="" />
                      </div>
                      <p className="name">{riderData.name}</p>
                    </div>
                    <div className="impressions mt-3">
                      <p className=" mutedTxtFont">Revenue / Month</p>
                      <p className="revenuTotal d-flex mt-1">
                        {riderData.revenuePerMonth}
                        <span className="impr positiveimp d-inline-flex align-items-center ml-4">
                          <i className="fa fa-arrow-up font-8 mr-1"> </i>
                          {riderData.goodimpression}
                          <span className="font-8">%</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="inner--content--right d-flex flex-column">
                    <h5 className="mb-4 pb-2">{riderData.totalRev}</h5>
                    <p className="processedOrders mutedTxtFont">
                      Processed Orders / Month
                    </p>
                    <p className="mt-1 d-flex justify-content-between align-items-center">
                      <span>{riderData.processedOrdersPerMonth}</span>
                      <span className="negativeimp impr d-inline-flex align-items-center">
                        <i className="fa fa-arrow-down font-8 mr-1"></i>{" "}
                        {riderData.badimpression}
                        <span className="font-8">%</span>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row mt-4 pt-2">
        <div className="col-md-12">
          <ActiveOrders />
        </div>
      </div>
    </div>
  );
};

export default Home;
