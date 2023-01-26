import React from "react";
import { InsightData } from "../../data/StatesData";
const CompanyInsight = () => {
  return (
    <div className="insightmainwrapper">
    <h5 className="text-muted mb-2">Company Insights</h5>
    <div className="insightWrapper mt-4">
      {InsightData.map((item) => {
        return (
          <div className="insight--content text-center p-4">
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <h6 className="title mt-3">{item.title}</h6>
            <div>
              <span className="profit font mt-3">{item.profit}</span>
            </div>
            <button className={`btn mt-3 btnInsights ${item.btnClass}`}>{item.btnText}</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CompanyInsight;
