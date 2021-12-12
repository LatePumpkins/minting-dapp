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
            <s.TextSubTitle
              style={{
                width: "95%",
                textAlign: "center",
                color: "var(--accent-text)"              

              }}
            >
              BREEDING BLABLABLABLABLABLA
            </s.TextSubTitle>
            <s.SpacerMedium/>
          
          

          </s.Container>
        </section>


          );

      };


  
      export default Metaverse;
