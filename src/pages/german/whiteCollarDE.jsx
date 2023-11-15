import React from "react";
import { HeaderEN } from "../../components/header/HeaderEN";
import handshakes from "../../assets/img/whiteCollar/handshakes.png";
import Logo from "../../assets/svg/whiteCollar/Logo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import ImagePeople from "../../assets/img/whiteCollar/ImagePeople.png";
// import handshake from "../../assets/img/organicShop/Photo.png";
// import PageOne from "../../assets/img/organicShop/pageOne.png";
// import PageTwo from "../../assets/img/organicShop/pageTwo.png";

import Banner from "../../assets/img/whiteCollar/Banner.png";
import screnshot from "../../assets/img/whiteCollar/screnshot.png";
import Video from "../../assets/video/white_collar.mp4";
import InternalOne from "../../assets/img/whiteCollar/internalOne.png";
import InternalTwo from "../../assets/img/whiteCollar/internalTwo.png";
import InternalThree from "../../assets/img/whiteCollar/internalThree.png";
import InternalFour from "../../assets/img/whiteCollar/internalFour.png";
import InternalFive from "../../assets/img/whiteCollar/internalFive.png";
import RightArrow from "../../assets/img/rightArrow.png";
import LeftArrow from "../../assets/img/leftArrow.png";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "../styles/General/section.styled";
import {
  TitleHThree,
  TitleHTwo,
  TitleSpan,
  ImageFirst,
  ParagraphAbProject,
  ParagraphGoals,
  List,
  Li,
  NumberOfList,
  Line,
  NaturalFoodImg,
  SecondNaturalFoodImg,
  ConatinerImg,
  FirstConatinerInternalImg,
  InternalImgOne,
  InternalImgSecond,
  InternalImgThree,
  InternalImgFour,
  InternalImgFive,
  SecondConatinerInternalImg,
  Arrow,
  LinkArrow,
} from "../styles/whiteCollar.styled";

export const WhiteCollarDE = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderEN name={"/en/whiteCollar"} />

      <FirstSection>
        <TitleHThree>Geschäftliche Website</TitleHThree>
        <TitleHTwo>
          White <TitleSpan>Collar</TitleSpan>
        </TitleHTwo>
      </FirstSection>

      <OptimisatorImg src={handshakes} alt="image" ImageType={ImageFirst} />

      <SecondSection>
        <div>
          <TitleHTwo>
            Über <TitleSpan>Projekt</TitleSpan>
          </TitleHTwo>
          <ParagraphAbProject>
            Die Entwicklung und Umsetzung agiler Methoden für das strategische
            Management eines Unternehmens ist in der heutigen, sich schnell
            verändernden Geschäftswelt von entscheidender Bedeutung.
            Traditionelle strategische Managementansätze haben oft
            Schwierigkeiten, mit der Dynamik der Märkte, den Kundenpräferenzen
            und den neuen Technologien Schritt zu halten.
          </ParagraphAbProject>
        </div>

        <Line />

        <OptimisatorImg src={Logo} alt="image" ImageType="img" />
      </SecondSection>

      <ThirdSection>
        <TitleHTwo>
          Ziele und <TitleSpan>Zielsetzungen</TitleSpan>
        </TitleHTwo>
        <List>
          <Li>
            <NumberOfList>1</NumberOfList>
            <ParagraphGoals>
              Berücksichtigen Sie die Website-Architektur für eine maximale
              Konversion.
            </ParagraphGoals>
          </Li>
          <Li>
            <NumberOfList>2</NumberOfList>
            <ParagraphGoals>
              Ordnen Sie die Inhalte auf der Website so an, dass sie für den
              Nutzer leicht zu erkennen sind.
            </ParagraphGoals>
          </Li>
          <Li>
            <NumberOfList>3</NumberOfList>
            <ParagraphGoals>
              Wählen Sie hochwertige Bild- und Textinhalte aus.
            </ParagraphGoals>
          </Li>
          <Li>
            <NumberOfList>4</NumberOfList>
            <ParagraphGoals>
              Erhöhung der Zahl der neuen Nutzer des Produkts auf der Website.
            </ParagraphGoals>
          </Li>
        </List>
      </ThirdSection>

      <OptimisatorImg src={ImagePeople} alt="image" ImageType={ImageFirst} />

      <FourthSection>
        <TitleHTwo>
          Haupt <TitleSpan>Seite</TitleSpan>
        </TitleHTwo>
        <ConatinerImg>
          <OptimisatorImg src={Banner} alt="image" ImageType={NaturalFoodImg} />
          <OptimisatorImg
            src={screnshot}
            alt="image"
            ImageType={SecondNaturalFoodImg}
          />
        </ConatinerImg>
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <FifthSection>
        <FirstConatinerInternalImg>
          <TitleHTwo>
            Interne <TitleSpan>Seiten</TitleSpan>
          </TitleHTwo>

          <OptimisatorImg
            src={InternalOne}
            alt="image"
            ImageType={InternalImgOne}
          />
          <OptimisatorImg
            src={InternalTwo}
            alt="image"
            ImageType={InternalImgSecond}
          />
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <OptimisatorImg
            src={InternalThree}
            alt="image"
            ImageType={InternalImgThree}
          />
          <OptimisatorImg
            src={InternalFour}
            alt="image"
            ImageType={InternalImgFour}
          />
          <OptimisatorImg
            src={InternalFive}
            alt="image"
            ImageType={InternalImgFive}
          />
        </SecondConatinerInternalImg>
      </FifthSection>

      <SixthSection>
        <LinkArrow to="/de/organicShop" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/briliniStudio" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
    </main>
  );
};