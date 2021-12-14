import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';


import * as s from "../styles/globalStyles";
import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 250px;
  @media (min-width: 767px) {
    width: 600px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

const Metaverse = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const metaverseRef = useNav('Metaverse');

    return (
        <section ref={metaverseRef} id='metaverseContainer'>

<s.Container
            flex={1}
            ai={"center"}
          >

            <s.SpacerMedium/>

            <s.TextHuge
                          style={{
                            textAlign: "justify",
                            color: "var(--primary-text)"   ,
                            fontWeight: "normal",           
              
                          }}
                        >
                          "Integration into an Avalanche-powered Metaverse"
                        </s.TextHuge>
                        <s.SpacerMedium />

            <s.TextSubTitle
              style={{
                width: "95%",
                textAlign: "center",
                color: "var(--accent-text)"              

              }}
            >
              As all pumpkins are harvested, their uniqueness will last forever, but their rarest attributes will be passed from generation to generation.
              With two LatePumpkins, harvesters will be prompt to breed them into a unique second-generation pumpkin, which will inherit for each body part the rarest attributes from its LateParents.
              As harvesters keep breeding their pumpkins and extend the three of life, lesser and lesser pumpkins from further generations will exist. Want to mix your rarest pumpkin with your friend's
              rarest and sell the offspring together? Your imagination is the limit!
            
            </s.TextSubTitle>
            <s.SpacerLarge/>
          
          

          </s.Container>
        </section>


          );

      };


  
      export default Metaverse;
