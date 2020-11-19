import React from "react";
import FakeData from "../../../FakeData/FakeData";
import Header from "../../CommonComponent/Header/Header";
import ClassShedule from "../../Classes/Schedule/ClassShedule";
import Footer from "../../CommonComponent/Footer/Footer";
const Class = ({ match }) => {
  let { id } = match.params;

  const classesDetails = FakeData.find((item) => item.id === parseInt(id));
  const classesName = classesDetails.name;
  return (
    <div>
      <Header callFrom={classesName} />
      <ClassShedule name={classesName}></ClassShedule>
      <Footer></Footer>
    </div>
  );
};

export default Class;
