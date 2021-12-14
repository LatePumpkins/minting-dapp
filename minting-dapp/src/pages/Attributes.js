import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import { TblAttributes } from "../TblAttributes";

import * as s from "../styles/globalStyles";
import styled from "styled-components";

const Attributes = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const attributesRef = useNav('Attributes');

    return (
        <section ref={attributesRef} id='attributesContainer'>

      <s.Container
        flex={1}
        ai={"center"}
      >

          <s.TextHuge
              style={{
                textAlign: "center",
                color: "var(--primary-text)"   ,
                fontWeight: "normal",           
  
              }}
            >
              Attributes rarities
            </s.TextHuge>
            <s.SpacerMedium />

            <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--accent-text)"              

            }}> 
            
            For the OG Laties, the ones that care about the smallest of details, in the following tables you can find the specific rarity of each of the already minted attributes, with an example of it!
            </s.TextDescription>

          <s.Container jc={"center"} ai={"center"}           
            style={{ width: "auto" }}>

                        <s.SpacerLarge />

                        <s.Container 
                        flex={1}
                        ai={"center"}

                        style={{ 
                          padding: 12, 
                          backgroundColor: "var(--accent)" ,
                          padding: 12,
                          borderRadius: 15,
                          border: "5px groove var(--secondary)",
                          boxShadow: "0px 0px 30px 30px rgba(0,0,0,0.7)",  
                        
                        
                        }}
                        
                        jc={"center"}>

                        <s.TextTitle
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)"              
              
                          }}
                        >
                          Body chart
                        </s.TextTitle>
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblAttributes data={body_dataSet}></TblAttributes>
                        </s.Container>

                        <s.SpacerMedium />
                        <s.TextTitle
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)"              
              
                          }}
                        >
                          Head chart
                        </s.TextTitle>
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblAttributes data={head_dataSet}></TblAttributes>
                        </s.Container>

                        <s.SpacerMedium/>
                        <s.TextTitle
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)"              
              
                          }}
                        >
                          Eyes chart
                        </s.TextTitle>
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblAttributes data={eyes_dataSet}></TblAttributes>
                        </s.Container>

                        <s.SpacerMedium/>
                        <s.TextTitle
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)"              
              
                          }}
                        >
                          Legs chart
                        </s.TextTitle>
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblAttributes data={feet_dataSet}></TblAttributes>
                        </s.Container>
                        
                        <s.SpacerMedium/>
                        <s.TextTitle
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)"              
              
                          }}
                        >
                          Arms chart
                        </s.TextTitle>
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblAttributes data={arms_dataSet}></TblAttributes>
                        </s.Container>

                      </s.Container>
                      
                    <s.SpacerSmall />
                  

                    
                  </s.Container>

                  </s.Container>
              </section>


          );

      };

      


const body_dataSet = [['Black', 'Legendary', '0.71%', 'hidden.png'], ['AVAX', 'Rare', '3.54%', '952c39d35dd1ce607f73e66d8ae441074a652642.png'], ['Green', 'Rare', '3.92%', 'hidden.png'], ['Psychedelic', 'Rare', '4.05%', 'b4f329b607ca9dade27705fcaf1089794619998e.png'], ['White', 'Rare', '4.86%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Blue', 'Uncommon', '8.33%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Sick', 'Uncommon', '8.78%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Purple', 'Uncommon', '9.29%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Yellow', 'Common', '16.72%', '19917634db9e856b552769df862e80505999be19.png'], ['Dark Orange', 'Common', '16.98%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Orange', 'Common', '22.83%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const eyes_dataSet = [['Demon', 'Rare', '4.79%', '7013fee8edc61e41d26062cf6c1fd0a5f903c794.png'], ['Zombie', 'Rare', '5.43%', '1d99931f33074610d169038fda2aff5e46157785.png'], ['High as Fuck', 'Uncommon', '7.85%', '19917634db9e856b552769df862e80505999be19.png'], ['Sick', 'Uncommon', '8.33%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Unibrown', 'Uncommon', '8.46%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Small', 'Common', '15.72%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Cute', 'Common', '49.42%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const head_dataSet = [['Crown', 'Legendary', '0.32%', 'd4aebe4330568a6228f60f58a2e15b6d8cb35ae8.png'], ['Unicorn', 'Legendary', '0.48%', 'hidden.png'], ['Christmas Tree', 'Legendary', '0.51%', 'hidden.png'], ['Gladiator', 'Legendary', '0.64%', 'hidden.png'], ['Cheap Magician', 'Legendary', '0.80%', '19917634db9e856b552769df862e80505999be19.png'], ['Helicopter Cap', 'Legendary', '0.93%', 'ae34f7e3b6362a3071f16e46a812edea72a75083.png'], ['Pirate', 'Legendary', '1.00%', 'c58dd16f5b9253ab8059dca9c47ba52665fd2a79.png'], ['Christmas Gift', 'Epic', '1.16%', '7fef199a69d54b07d5029c70d8c3f6a97b0dbb12.png'], ['Sheriff', 'Epic', '1.16%', 'hidden.png'], ['Witch', 'Epic', '1.19%', 'hidden.png'], ['Dynamite', 'Epic', '1.22%', 'fa1fa3d740ff64a0f47bd47ca9dbb3f44ec16eef.png'], ['Otaku Ears', 'Epic', '1.25%', 'e883a1233881a7aa92e36bf7fc78f448119abe73.png'], ['Mexican Hat', 'Epic', '1.29%', '4fb8da88783ee934b4a843d69f3b0c2ceba5c960.png'], ['Santa', 'Epic', '1.38%', '9fb8b9e73341270657bd95b60b2a808b858a8f39.png'], ['Bomb', 'Epic', '1.48%', '65a4083c130f89179702b3e9046781e564dd6e17.png'], ['White', 'Epic', '1.83%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Pineapple', 'Epic', '1.96%', '89390c1a011140d189a9fb887f5720496f614c44.png'], ['Beret', 'Rare', '2.44%', '1014819c28cc5583c98fd89c5f7bf56e29f61c91.png'], ['Orange', 'Rare', '2.51%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Red Cap', 'Rare', '2.51%', '9d675ef1d434b9ccbe27442da3a3ea93fea783be.png'], ['Plant Cherries', 'Rare', '2.60%', '7013fee8edc61e41d26062cf6c1fd0a5f903c794.png'], ['Irish', 'Rare', '2.73%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Purple', 'Rare', '2.77%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Chandelier', 'Rare', '2.80%', '1fd0ced1d944524e1fb1798943311b4e58a1091b.png'], ['Blue', 'Rare', '2.83%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Blue Cap', 'Rare', '2.93%', '0ce9ea2921ed795213863f6122a221ffbb6d7b59.png'], ['Plant Flower', 'Rare', '2.93%', 'a56018712a5a3e35eb54ebc4b3b07986f0cb8ecd.png'], ['Green Cap', 'Rare', '2.99%', 'hidden.png'], ['Plant Punk', 'Rare', '3.02%', 'hidden.png'], ['Reindeer', 'Rare', '3.05%', '9ac6b5f1aac59e0b9684e88c630127d854ad8a26.png'], ['Plant 2', 'Rare', '3.76%', 'f94b5c39912bdcc1579d5bcf468a02e6c1a27188.png'], ['Plant 3', 'Rare', '3.92%', '30366ef1553c6d218369c283127a57513a002e41.png'], ['Balding', 'Rare', '3.95%', 'hidden.png'], ['Plant 7', 'Rare', '3.95%', '42564e1cf62ff164b2656d4f5d699f315b717ebe.png'], ['Plant 1', 'Rare', '3.99%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Plant 4', 'Rare', '4.05%', 'f5c4e87a0ecc6e30952d3fa3d85925bfc9ce5628.png'], ['Plant 5', 'Rare', '4.12%', 'd390e0d5381a56edd879c2fa16e0f0efafbc5523.png'], ['Plant 6', 'Rare', '4.21%', 'ca4622f2438af4ecb2d4266d8111cf60646d6ea5.png'], ['Plant Fruit', 'Rare', '4.66%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Blond', 'Rare', '5.11%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const feet_dataSet = [['Air Jordan 1', 'Legendary', '0.90%', '21fe76fc09e106d7d5e365d31364027656e61d6d.png'], ['Pink Heels', 'Epic', '1.06%', 'ca4622f2438af4ecb2d4266d8111cf60646d6ea5.png'], ['Air Jordan 5', 'Epic', '1.58%', 'hidden.png'], ['Converse Chuck Taylor All Star', 'Rare', '2.86%', 'b36c022d0183c3e0f8288bef2f1e2ea8168e9b46.png'], ['Nike Dunk', 'Rare', '3.34%', '4fb8da88783ee934b4a843d69f3b0c2ceba5c960.png'], ['Stan Smith Green', 'Rare', '4.28%', 'a56018712a5a3e35eb54ebc4b3b07986f0cb8ecd.png'], ['Stan Smith Red', 'Rare', '4.37%', '0ce9ea2921ed795213863f6122a221ffbb6d7b59.png'], ['Brown Moccasins', 'Rare', '4.60%', 'a34f6eafdcd9914104767a523c1a5a02a77b9b5d.png'], ['White Elf', 'Rare', '4.66%', 'f94b5c39912bdcc1579d5bcf468a02e6c1a27188.png'], ['Stan Smith Blue', 'Rare', '4.69%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Pink Elf Shoes', 'Rare', '5.08%', '0f081edb734265aef9b0cd0901f1266d7bf8706e.png'], ['Santa Elf', 'Rare', '5.11%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Black Heels', 'Uncommon', '8.97%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Black Moccasins', 'Uncommon', '9.55%', '0d6a5627969b82987cddccb0d7e9467c7a7b37a8.png'], ['German Flipflops', 'Uncommon', '10.06%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Classic', 'Common', '28.87%', '19917634db9e856b552769df862e80505999be19.png']]

const arms_dataSet = [['Gun', 'Rare', '5.79%', '1d99931f33074610d169038fda2aff5e46157785.png'], ['Black Gloves', 'Uncommon', '9.55%', 'f5c4e87a0ecc6e30952d3fa3d85925bfc9ce5628.png'], ['Brown Gloves', 'Uncommon', '9.65%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Golden Watch Left', 'Common', '17.85%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Golden Watch Right', 'Common', '19.10%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Arms', 'Common', '34.53%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]



      export default Attributes;
