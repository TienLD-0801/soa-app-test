import React from "react";
import CardAdventure from "@/components/molecules/CardAdventure/CardAdventure";
import "./TitreBlockFist.scss";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";

const TitreBlockFist: React.FC = () => {
  const adventures = [
    {
      image:
        "https://dashboard.codeparrot.ai/api/image/Z8wKAMaO8SxPzRgL/image.png",
      title: "Case Title",
      subtitle: "Case sous-titre",
      description:
        "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure...",
      forfaitNumber: 1,
    },
    {
      image:
        "https://dashboard.codeparrot.ai/api/image/Z8wKAMaO8SxPzRgL/image-2.png",
      title: "Case Title",
      subtitle: "Case sous-titre",
      description:
        "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles...",
      forfaitNumber: 2,
    },
    {
      image:
        "https://dashboard.codeparrot.ai/api/image/Z8wKAMaO8SxPzRgL/image-3.png",
      title: "Case Title",
      subtitle: "Case sous-titre",
      description:
        "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de...",
      forfaitNumber: 3,
    },
  ];

  return (
    <div className="block-first-container">
      <SectionHeader title="TITRE BLOC 1" />
      <h2 className="adventure-layout__subtitle">Sous-titre Bloc 1</h2>
      <div className="adventure-cards-container">
        {adventures.map((adventure, index) => (
          <CardAdventure
            key={index}
            image={adventure.image}
            title={adventure.title}
            subtitle={adventure.subtitle}
            description={adventure.description}
            forfaitNumber={adventure.forfaitNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default TitreBlockFist;
