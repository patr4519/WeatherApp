import React from "react";

const CityCard = () => {
  return (
    <div className="card-block">
      <h3 className="card-block__title">Moscow</h3>
      <div className="card-block__weather">
        <div className="card-block__leftBlock">
          <div>img</div>
          <span>Sunny</span>
        </div>
        <div className="card-block__rightBlock">
          <div>as of 7:00 pm</div>
          <div>25</div>
        </div>
      </div>
      <div className="card-block__extraInfo">
          <div className="extraInfo-item">
            <div>img</div>
            <div>
                <p>111</p>
                <p>222</p>
            </div>
          </div>
          <div className="extraInfo-item">
            <div>img</div>
            <div>
                <p>111</p>
                <p>222</p>
            </div>
          </div>
          <div className="extraInfo-item">
            <div>img</div>
            <div>
                <p>111</p>
                <p>222</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CityCard;
