import React from "react";
import "./css/user.css";
// import { USER_MAIN_DATA } from "../info";
import PropTypes from "prop-types";

/**
 * I'm using the useState hook to set the data to null, then I'm using the useEffect hook to get the
 * data from the API and set it to the data state, then I'm returning the data if it's not null.
 */
// const UserMainData = () => {
//   const [data, setData] = useState(USER_MAIN_DATA[0]);
//   useEffect(() => {
//     getUserData(12)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
const UserMainData = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }
  const user = props.data;
  return (
    <div>
      {user && (
        <h1>
          Bonjour<span>{user.userInfos.firstName}</span>
        </h1>
      )}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserMainData;
UserMainData.prototype = {
  data: PropTypes.object.isRequired,
};
