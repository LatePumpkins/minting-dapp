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

const Tale = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const taleRef = useNav('Our Tale');

    return (
        <section ref={taleRef} id='taleContainer'>

          <s.Container
            flex={1}
            ai={"center"}
          >

            <StyledLogo 
                    alt={"logo"}
                    src={"/config/images/logo.png"} />



            <s.TextSubTitle
              style={{
                width: "95%",
                textAlign: "center",
                color: "var(--accent-text)"              

              }}
            >
              The LatePumpkins are <span style={{color: "var(--primary-text)" }}>3110</span> pumpkins
              that were supposed to bloom on <span style={{color: "var(--avalanche-red)" }}>Avalanche</span> during Halloween Eve. A late autumn, and late artists,
              caused a significant delay, originating in the meantime a community that embraces lateness,
              procrastination and delay. Yet, a late harvest tends to bring bigger fruits, 
              and the harvesters have commited to give back 50% of the harvesting fees to a charity voted by the Pumpkins.
            </s.TextSubTitle>
          
          

          </s.Container>
        </section>


          );

      };

  
      export default Tale;
