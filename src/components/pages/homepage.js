import React from "react";
import "../css/homepage.css";
import Alimentation from "../alimentation";
// import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE } from "../../info";
import Logo from "../../assets/logo.png";
import Zen from "../../assets/zen.png";
import Swim from "../../assets/swim.png";
import Bike from "../../assets/bike.png";
import Bodybuilding from "../../assets/bodybuilding.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Homepage = (props) => {
  const data = [
    {
      name: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 3,
      uv: 4000,
      pv: 8800,
      amt: 2290,
    },
    {
      name: 4,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 5,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 6,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 7,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 8,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 9,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 10,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const objective = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const radar = [
    {
      subject: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  // const dataModel = {d
  //   id: "",
  //   userInfos: {
  //     firstName: "",
  //     lastName: "",
  //     age: "",
  //   },
  //   todayScore: "",
  //   keyData: {
  //     calorieCount: "",
  //     proteinCount: "",
  //     carbohydrateCount: "",
  //     lipidCount: "",
  //   },
  // };
  // /* Fetching the data from the json file. */
  // const params = useParams();
  // const [info, setInfo] = useState(dataModel);
  // useEffect(() => {
  //   fetch("/info.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInfo(data.find((info) => info.id === params.id));
  //     });
  // }, [params.id]);
  return (
    <div className="homepage">
      <div className="header">
        <header className="header__logo">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="header__nav">
            <li className="header__nav-item">Accueil</li>
            <li className="header__nav-item">Profil</li>
            <li className="header__nav-item">Réglage</li>
            <li className="header__nav-item-end">Communauté</li>
          </ul>
        </header>
      </div>
      <aside className="header__aside">
        <div className="header__aside-item">
          <img className="header__aside-img" src={Zen} alt="Logo" />
          <img className="header__aside-img" src={Swim} alt="Logo" />
          <img className="header__aside-img" src={Bike} alt="Logo" />
          <img className="header__aside-img" src={Bodybuilding} alt="Logo" />
        </div>
        <p className="header__aside-text">Copyright, SportSee 2020</p>
      </aside>
      <section className="homepage__section">
        <div className="homepage__section-item">
          <h1>Bonjour ...</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="activities">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={835}
              height={320}
              data={data}
              margin={{
                top: 100,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis orientation="right" stroke="#9B9EAC" />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="pv" fill="#282D30" barSize={7} />
              <Bar dataKey="uv" fill="#E60000" barSize={7} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="performance">
          <div className="objective">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={200}
                height={60}
                data={objective}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="radar">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radar}>
                <PolarGrid polarRadius={[10, 20, 40, 60, 90]} />
                <PolarAngleAxis dataKey="subject" stroke="#ffffff" />
                <Radar dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="kpi"></div>
        </div>
      </section>
      <Alimentation />
    </div>
  );
};

export default Homepage;
