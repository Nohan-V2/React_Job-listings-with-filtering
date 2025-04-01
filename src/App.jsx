import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CompanyLogo from "./components/CompanyLogo";
import PresentationWrapper from "./components/PresentationWrapper";
import CompanyWrapper from "./components/CompanyWrapper";
import CompanyName from "./components/CompanyName";
import BaliseWrapper from "./components/BaliseWrapper";
import NewBalise from "./components/NewBalise";
import FeaturedBalise from "./components/FeaturedBalise";
import JobTitle from "./components/JobTitle";
import ExperienceContainer from "./components/ExperienceContainer";
import TextExperience from "./components/TextExperience";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json");
      const data = await res.json();

      setUserData(data);
    }

    getData();
  }, []);

  console.log(userData);

  return (
    <main>
      {userData.map((user) => (
        <Card key={user.id}>
          <CompanyLogo imgSrc={user.logo} imgAlt={user.company} />
          <PresentationWrapper>
            <CompanyWrapper>
              <CompanyName company={user.company} />
              <BaliseWrapper>
                <NewBalise />
                <FeaturedBalise />
              </BaliseWrapper>
            </CompanyWrapper>
            <JobTitle job={user.position} />
            <ExperienceContainer>
              <TextExperience info={user.postedAt} />
              <TextExperience info={user.contract} />
              <TextExperience info={user.location} />
            </ExperienceContainer>
          </PresentationWrapper>
          <hr className="separate-bar" />
        </Card>
      ))}
    </main>
  );
}

export default App;
