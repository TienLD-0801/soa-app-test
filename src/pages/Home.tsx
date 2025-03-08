import Layout from "@/components/templates/Layout/Layout";
import HeroBanner from "@/components/molecules/HeroBanner/HeroBanner";
import ExploreMore from "@/components/organisms/ExploreMore/ExploreMore";
import Experiences from "@/components/organisms/Experiences/Experiences";
import SocialMedia from "@/components/organisms/SocialMedia/SocialMedia";
import NosActivities from "@/components/organisms/NosActivities/NosActivities";
import { ExploreBasic } from "@/components/organisms/ExploreBasic/ExploreBasic";
import TitreBlockFist from "@/components/organisms/TitreBlockFist/TitreBlockFist";
import TitreBlockSecond from "@/components/organisms/TitreBlockSecond/TitreBlockSecond";
import ResponsiveContainer from "@/components/templates/ResponsiveContainer/ResponsiveContainer";

import "./Home.scss";

const HomePage = () => {
  return (
    <Layout>
      <HeroBanner />
      <section className="section section--block1">
        <ResponsiveContainer>
          <TitreBlockFist />
        </ResponsiveContainer>
      </section>
      <section className="section section--block2">
        <ResponsiveContainer>
          <TitreBlockSecond />
        </ResponsiveContainer>
      </section>
      <section className="section section--activities">
        <ResponsiveContainer>
          <NosActivities />
        </ResponsiveContainer>
      </section>
      <section className="section section--explore-more">
        <ResponsiveContainer>
          <ExploreMore />
        </ResponsiveContainer>
      </section>
      <section className="section section--experiences">
        <ResponsiveContainer>
          <Experiences />
        </ResponsiveContainer>
      </section>
      <section className="section section--social">
        <ResponsiveContainer>
          <SocialMedia />
        </ResponsiveContainer>
      </section>
      <section className="section section--explore-basic">
        <ResponsiveContainer fullWidth>
          <ExploreBasic />
        </ResponsiveContainer>
      </section>
    </Layout>
  );
};

export default HomePage;
