import React, { useCallback, useEffect } from "react";
import "../../components/DayBlock/DayBlock.css";
import "./Main.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { objectContr } from "../../store/testSlice";
import { getObject } from "../../store/testThunks";
import DayBlock from "../../components/DayBlock/DayBlock";

const Main = () => {
  const dispatch = useAppDispatch();
  const contributions = useAppSelector(objectContr);

  const requestObject = useCallback(async () => {
    await dispatch(getObject());
  }, [dispatch]);

  useEffect(() => {
    requestObject().catch(console.error);
  }, [requestObject]);

  const createDays = Object.keys(contributions).map((key) => {
    const value = contributions[key];
    return <DayBlock key={key} contribution={value} />;
  });

  return (
    <div className="main">
			<div className="months">
				<h3 className="month">Апр.</h3>
				<h3 className="month">Май</h3>
				<h3 className="month">Июнь</h3>
				<h3 className="month">Июль</h3>
				<h3 className="month">Авг.</h3>
				<h3 className="month">Сент.</h3>
				<h3 className="month">Окт.</h3>
				<h3 className="month">Нояб.</h3>
				<h3 className="month">Дек.</h3>
				<h3 className="month">Янв.</h3>
				<h3 className="month">Февр.</h3>
				<h3 className="month">Март</h3>
			</div>
      <div className="year">
        <div className="days">
          <h4>Пн</h4>
          <h4>Ср</h4>
          <h4>Пт</h4>
        </div>
        <div className="calendar">{createDays}</div>
      </div>
      <div className="menu">
        <p>Меньше</p>
        <div className="colors">
          <div className="day" style={{ backgroundColor: "#ACD5F2" }} />
          <div className="day" style={{ backgroundColor: "#7FA8C9" }} />
          <div className="day" style={{ backgroundColor: "#527BA0" }} />
          <div className="day" style={{ backgroundColor: "#254E77" }} />
        </div>
        <p>Больше</p>
      </div>
    </div>
  );
};

export default Main;
