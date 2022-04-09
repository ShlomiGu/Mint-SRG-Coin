import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../Data/RoadmapData";
import ToggleInfo from "./ToggleInfo";

const YellowCircle = styled("div")({
  border: "2px solid #FC0",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const YellowInnerCircle = styled("div")({
  backgroundColor: "#FC0",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
});

const YellowRoadmapPoints = styled(YellowInnerCircle)({
  position: "absolute",
  left: "calc(50% - 11px)",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "40px",
  // width: "900px",
});

const DateText = styled(Typography)({
  position: "absolute",
  left: "calc(50% - 185px)",
  color: "#FFF",
  fontSize: "1.2rem",
  fontWeight: 600,
  width: "150px",
  textAlign: "right",
  ["@media (max-width:768px)"]: {
    left: "calc(50% - 170px)",
    fontSize: "1rem",
  },
});

const RoadmapSection = styled("div")({
  paddingTop: "50px",
  marginLeft: "55%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  ["@media (max-width:768px)"]: {
    marginLeft: "65%",
  },
});

const FinalRoadmapSection = styled(RoadmapSection)({
  marginLeft: '110%',
  ["@media (max-width:768px)"]: {
    marginLeft: "130%",
  },
})

const RoadmapContainer = styled("div")({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
});

const RoadmapLine = styled("div")({
  position: "absolute",
  top: 0,
  left: "calc(50% - 2px)",
  width: "4px",
});

const RoadmapLineBackground = styled(RoadmapLine)({
  bottom: 0,
  backgroundColor: "#838384",
});

const RoadmapLineColor = styled(RoadmapLine)({
  backgroundColor: "#FC0",
  boxShadow: "0 1px 10px 1px #FFCC00",
});

const Roadmap = () => {
  const [openKey, setOpenKey] = useState(-1);

  useEffect(() => {
    const roadmap = document.querySelector(".roadmap");
    const roadmapDraw = document.querySelector(".roadmap__draw");
    const bodyRect = document.body.getBoundingClientRect();
    const roadmapOffset = roadmap.getBoundingClientRect().top - bodyRect.top;

    var moveIndicator = function () {
      var viewportHeight = window.innerHeight;
      var hasScrolled = window.pageYOffset;
      const scrolledFurther = hasScrolled - roadmapOffset + viewportHeight / 3;

      if (scrolledFurther && scrolledFurther > 0) {
        if (scrolledFurther > roadmap.clientHeight) {
          roadmapDraw.style.height = `${roadmap.clientHeight}px`;
          return;
        }

        roadmapDraw.style.height = `${scrolledFurther}px`;
        return;
      }

      roadmapDraw.style.height = "0px";
    };

    window.addEventListener("scroll", moveIndicator);
    window.addEventListener("resize", moveIndicator);
  }, []);

  return (
    <Wrapper>
      <YellowCircle>
        <YellowInnerCircle />
      </YellowCircle>
      <RoadmapContainer className="roadmap">
        <RoadmapLineBackground />
        <RoadmapLineColor className="roadmap__draw" />
        <div className="roadmap__list">
          {data.map((roadmapEvent, index) => {
            if (index + 1 !== data.length) {
              return (
                <RoadmapSection key={`roadmap:${index}`}>
                  <DateText key={`date:${index}`}>{roadmapEvent.date}</DateText>
                  <YellowRoadmapPoints key={`dot:${index}`} />
                  <div
                    style={{
                      marginLeft: "00px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ToggleInfo
                      key={`info:${index}`}
                      id={index}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      title={roadmapEvent.title}
                      subTitle={roadmapEvent.description}
                      content={roadmapEvent.content}
                      width={"50%"}
                      fontSize={"0.75rem"}
                      titleSize={"0.9rem"}
                    ></ToggleInfo>
                  </div>
                </RoadmapSection>
              );
            }
          })}
          <div style={{ height: "50px" }}></div>
        </div>
      </RoadmapContainer>
      <FinalRoadmapSection
        style={{ paddingTop: 0 }}
        key={`roadmap:${data.length - 1}`}
      >
        <DateText key={`date:${data.length - 1}`}>
          {data[data.length - 1].date}
        </DateText>
        <YellowRoadmapPoints key={`dot:${data.length - 1}`} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ToggleInfo
            key={`info:${data.length - 1}`}
            id={data.length - 1}
            openKey={openKey}
            setOpenKey={setOpenKey}
            title={data[data.length - 1].title}
            subTitle={data[data.length - 1].description}
            content={data[data.length - 1].content}
            width={"100%"}
          ></ToggleInfo>
        </div>
      </FinalRoadmapSection>
    </Wrapper>
  );
};

export default Roadmap;
