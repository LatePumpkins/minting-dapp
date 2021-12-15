import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';


import * as s from "../styles/globalStyles";
import styled from "styled-components";

export const StyledMiniLogo = styled.img`
 

  @media (min-width: 500px) {
    width: 200px;
  }
  @media (min-width: 700px) {
    width: 500px;
  }

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
                            textAlign: "center",
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
              When the collection is fully harvested, a community-designed Metaverse Gallery 
              will be created within the Kalao Ecosystem, and the pumpkins will be exposed 
              for owners and lazy fans to check out in VR. Moreover, if encouraged by the community, an initative
              to acquire a parcel in a mainstream platform (like Decentraland or Sandbox) will be put to the vote.
              If approved, a wearable 3D version of each Pumpkin will be created and delivered to the owners for free.

            
            </s.TextSubTitle>
            
            <s.SpacerMedium/>
            <a href='https://kalao.io/'>
              <StyledMiniLogo alt={"example"} src={"/config/images/kalao-logo.png"} />
              </a>
            <s.SpacerLarge/>
          
          

          </s.Container>
        </section>


          );

      };


  
      export default Metaverse;
