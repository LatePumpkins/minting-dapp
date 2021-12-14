import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

import * as s from "../styles/globalStyles";
import styled from "styled-components";
import { TblRanking } from '../TblRanking';

const Rarity = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const rarityRef = useNav('Rarity');

    return (
        <section ref={rarityRef} id='rarityContainer'>

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
                          Rarity Ranking
                        </s.TextHuge>
                        <s.SpacerMedium />

          <s.Container jc={"center"} ai={"center"}           
            style={{ width: "auto" }}>

                      <s.TextDescription
                        style={{
                          width: "95%",
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}> 
                        
                        The overall rarity of our pumpkins is computed using a statistical approach (i.e. multiplying all of it's attributes rarities together).
                        This is a popular method often used by community made spreadsheets, so we 
                        decided to save you the time!
                        </s.TextDescription>  

                        <s.SpacerLarge />
                       
                        
                        <s.Container 
                        flex={1}
                        ai={"center"}
                        jc={"center"}

                        style={{ 
                          padding: 12,
                          width: "auto", 
                          backgroundColor: "var(--accent)" ,
                          padding: 12,
                          borderRadius: 15,
                          border: "5px groove var(--secondary)",
                          boxShadow: "0px 0px 30px 30px rgba(0,0,0,0.7)",  
                        
                        
                        }}>

                        
                        <s.SpacerMedium />

                        <s.Container

                        flex={1}
                        ai={"center"}
                        
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)"              
            
                        }}>
                        <TblRanking data={body_dataSet}></TblRanking>
                        </s.Container>

                        <s.SpacerMedium />

                      

                      </s.Container>
                      
                   
                    <s.SpacerSmall />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--primary-text)",
                      }}
                    >
                    </s.TextDescription>

                    
                  </s.Container>

                  </s.Container>
              </section>


          );

      };

      


const body_dataSet = [['#72', 'Rank 8', 'Legendary ', '34ae184fc981d817bf1bc4ce533d66862f555cd3.png'], ['#13', 'Rank 12', 'Epic ', 'cd9dc69af51d6404e528c2f218e872d3c0eb35f9.png'], ['#87', 'Rank 18', 'Epic ', '6a09e02ecdfd855fdad73d5c45ab9f8051d360a0.png'], ['#53', 'Rank 21', 'Epic ', '3db7ad202164aa02a064d89f87eed4fbfa284af5.png'], ['#5', 'Rank 29', 'Epic ', '952c39d35dd1ce607f73e66d8ae441074a652642.png'], ['#175', 'Rank 32', 'Epic ', '79a10a70e100be4df67307a1f1b96f207e905899.png'], ['#73', 'Rank 33', 'Epic ', '85827f891ef2100537a5f7451571f777e44b5cbb.png'], ['#48', 'Rank 49', 'Rare', '0d19cf22cb6f02f279957125377bac9aea586165.png'], ['#121', 'Rank 61', 'Rare', '770033a04aa3bb3d6f53699618dd8fba27ca75d2.png'], ['#154', 'Rank 64', 'Rare', 'dca81d5fdde0d2538e0b0c353bcc1465f50708b4.png'], ['#185', 'Rank 73', 'Rare', '29c5fdfef3a40a1cec99d116c1a16825e7ea2714.png'], ['#84', 'Rank 80', 'Rare', 'eb75f6eee35e7ad5128133ee8589da36185d264e.png'], ['#120', 'Rank 91', 'Rare', '32691abe8386448828e219f4046efd3c2d7d7ae1.png'], ['#17', 'Rank 127', 'Rare', 'ca4622f2438af4ecb2d4266d8111cf60646d6ea5.png'], ['#183', 'Rank 134', 'Rare', '4f2a01a1c9126219d87b0ea1aa21a610b4ea84f1.png'], ['#200', 'Rank 188', 'Exotic', 'b7f8f92ac9a2d88e25cca6db0b024f616ac27eb3.png'], ['#123', 'Rank 206', 'Exotic', '8e4ae4deffceefb184109d162f6bbc87212f615c.png'], ['#144', 'Rank 211', 'Exotic', '5936b6ebe36ce75733966255aa4deb6334c2b908.png'], ['#83', 'Rank 235', 'Exotic', 'b36c022d0183c3e0f8288bef2f1e2ea8168e9b46.png'], ['#153', 'Rank 271', 'Exotic', '747dad944ec0c1e39c0022bd59ce30747d96a031.png'], ['#47', 'Rank 277', 'Exotic', '21fe76fc09e106d7d5e365d31364027656e61d6d.png'], ['#31', 'Rank 280', 'Exotic', 'cc75375ea6a23388261a8f5f6b9507614ae8ceb9.png'], ['#2', 'Rank 291', 'Exotic', '7fef199a69d54b07d5029c70d8c3f6a97b0dbb12.png'], ['#167', 'Rank 294', 'Exotic', '80715bc5116a4f978f62edb7428ce88a0c9a4158.png'], ['#145', 'Rank 323', 'Classy', 'd0aaa9386c86a26284e349416f73a43affa5595f.png'], ['#170', 'Rank 328', 'Classy', '8cfb5c3d0be2401d39ab98754b28b0f2d655df4c.png'], ['#134', 'Rank 339', 'Classy', '253545d91a1b9ef0931a571a7730cc213550be45.png'], ['#82', 'Rank 341', 'Classy', '1fd0ced1d944524e1fb1798943311b4e58a1091b.png'], ['#79', 'Rank 355', 'Classy', '202e0e645367875878d995b9fa5554575732ff07.png'], ['#147', 'Rank 370', 'Classy', 'a26765c2a63168b6438a0c6a79d7edfad5ad6b26.png'], ['#9', 'Rank 384', 'Classy', 'bf5e0debcd69c168e23488d83b08dafae312bdaf.png'], ['#177', 'Rank 415', 'Classy', '5caace1970858144ea12ee0ad2caf709c4b1959f.png'], ['#68', 'Rank 430', 'Classy', 'ee3dd41b27fb1ccfd48a2918371b68c950056447.png'], ['#139', 'Rank 447', 'Classy', 'b49e964a858cab4a7b7fb2813e7c639e0bc75373.png'], ['#174', 'Rank 461', 'Classy', '07a6e1637e7049efd0660b43e1c72f38b5df5ed4.png'], ['#30', 'Rank 470', 'Classy', 'a34f6eafdcd9914104767a523c1a5a02a77b9b5d.png'], ['#36', 'Rank 477', 'Classy', 'ae34f7e3b6362a3071f16e46a812edea72a75083.png'], ['#115', 'Rank 494', 'Classy', '44d3bdb0b12fab2d2deffbce50429b1018fffd50.png'], ['#100', 'Rank 508', 'Classy', '7c15ece4c592ad04be6a66b6280da1fe24456643.png'], ['#107', 'Rank 517', 'Classy', 'ecef689d5db17def0fb670bce0473d4299a5fca2.png'], ['#190', 'Rank 525', 'Classy', '3e71fb169abc7ba0e8429071b3d36c22c354c095.png'], ['#118', 'Rank 550', 'Classy', '55d89011e49c69b52c7ed47835977fde7967a9b2.png'], ['#130', 'Rank 562', 'Classy', '93e64b620821be7e88de4aaf530c01b26f3ac73c.png'], ['#45', 'Rank 589', 'Classy', 'd4aebe4330568a6228f60f58a2e15b6d8cb35ae8.png'], ['#132', 'Rank 590', 'Classy', '2e6f99f4c8a1e0261d67d3c72d7542ec93f5823f.png'], ['#101', 'Rank 607', 'Classy', '4ea168396f23424dd40d91fc564ef8414e47354f.png'], ['#38', 'Rank 638', 'Classy', '678c34d0904badcf09374b3aabc537ae4e29bbf0.png'], ['#155', 'Rank 656', 'Classy', '3d39aa3e04b7a06acd6f28eb00548432287f61a7.png'], ['#35', 'Rank 672', 'Classy', '4e0032eb7739df50f312a9671324fb374539bd32.png'], ['#157', 'Rank 735', 'Cool', '95aac307f5b3adc7ce84315b3899f9747b0f525e.png'], ['#43', 'Rank 744', 'Cool', '79be152f2bd7b8275884b7445358d9704d0f0183.png'], ['#138', 'Rank 756', 'Cool', '67492f1b40869ba7033cb979c7b544da8efc03c2.png'], ['#61', 'Rank 760', 'Cool', '3aeade3d7f86a24f65f7b11ee0abd0490a1d0466.png'], ['#176', 'Rank 770', 'Cool', 'a09b7b59b038357453b7ccaac7f29910c793373f.png'], ['#10', 'Rank 777', 'Cool', 'd390e0d5381a56edd879c2fa16e0f0efafbc5523.png'], ['#52', 'Rank 785', 'Cool', 'f19db7458c2c27f9d1acf5ce75fac7237fb952db.png'], ['#23', 'Rank 788', 'Cool', 'eda396da15dba94b326b508a2e4e2c7d3cff10fd.png'], ['#124', 'Rank 790', 'Cool', '039e1d208d83fd8e0ba30552d53a7a69228e38d9.png'], ['#57', 'Rank 807', 'Cool', '0b5fc9c329791ab5d164f8f1602efee1f6e2d73b.png'], ['#146', 'Rank 830', 'Cool', '2d2b12dba4290d97a75ad768441bc47d497495f7.png'], ['#165', 'Rank 838', 'Cool', '0af7268555cd52ae333d69624fd2b575e8ce8950.png'], ['#136', 'Rank 841', 'Cool', '3399057e2f8d42a1a2ec992388bcb6f2ca6f3c44.png'], ['#152', 'Rank 850', 'Cool', '0f5069bc7e164d80ff6fcbb7472a02a7ee52992f.png'], ['#32', 'Rank 884', 'Cool', '10e12cf46e85ae4f2f74d89c1ea8604530721bc2.png'], ['#90', 'Rank 893', 'Cool', '57d85e68191b5d4178baf05fbb2e8d2cd067ede5.png'], ['#85', 'Rank 920', 'Cool', 'b4f329b607ca9dade27705fcaf1089794619998e.png'], ['#95', 'Rank 936', 'Cool', '4c246dcb193cf9eb9bc344272b365ebe8d6971f5.png'], ['#172', 'Rank 948', 'Cool', 'de4388edae3176be7ddc04fc65c270cbb962eabf.png'], ['#25', 'Rank 952', 'Cool', '302249dd2b0eb708d08d53ba7248cea141040cdd.png'], ['#60', 'Rank 958', 'Cool', '89390c1a011140d189a9fb887f5720496f614c44.png'], ['#34', 'Rank 973', 'Cool', '0b632bdbbef8793bc1f1174cc564d91a9adb4c74.png'], ['#193', 'Rank 993', 'Cool', '47c71ca94dc8bfe9b3977bcf1a8aeb103a3edd4b.png'], ['#20', 'Rank 1016', 'Cool', '1014819c28cc5583c98fd89c5f7bf56e29f61c91.png'], ['#21', 'Rank 1027', 'Cool', 'fa1fa3d740ff64a0f47bd47ca9dbb3f44ec16eef.png'], ['#112', 'Rank 1033', 'Cool', '59f819b0b4fae3197be87eb583c1fddf087343be.png'], ['#129', 'Rank 1043', 'Cool', '6c9b3996f564f97fa327d6222b98dd4893b757f5.png'], ['#64', 'Rank 1061', 'Cool', 'efc4a3ccabe97583af84a4d942d6fc2644af635a.png'], ['#114', 'Rank 1082', 'Cool', '71fe4b0103f235ba91d3e198317ef61780dcd3c0.png'], ['#102', 'Rank 1095', 'Cool', 'de602c0663cd5a3be8175deb365845b1d4c5183d.png'], ['#184', 'Rank 1114', 'Cool', 'f6adabc57f1c54d4937dbaaffb3dc49b3f06c5e4.png'], ['#40', 'Rank 1133', 'Cool', 'a56018712a5a3e35eb54ebc4b3b07986f0cb8ecd.png'], ['#168', 'Rank 1134', 'Cool', 'e7ab436771c70384ceb7f58ee78f9c6f28133206.png'], ['#86', 'Rank 1141', 'Cool', '76110db5fdc65dd48910d1b8f308da0c4df3d675.png'], ['#122', 'Rank 1158', 'Cool', '886de23f31ce046c56d879fe5ef74f6203f554c7.png'], ['#29', 'Rank 1172', 'Cool', '65a4083c130f89179702b3e9046781e564dd6e17.png'], ['#169', 'Rank 1199', 'Cool', '26542891b9856fbe0d90c9aea65d82daf0dfeb34.png'], ['#8', 'Rank 1211', 'Cool', '7013fee8edc61e41d26062cf6c1fd0a5f903c794.png'], ['#127', 'Rank 1212', 'Cool', 'f520f3376bdd373077cf8fa29b1dc0bae0e05504.png'], ['#106', 'Rank 1217', 'Cool', 'de18f134c40ad4e66e5ec2d91d9547287cdc9c72.png'], ['#196', 'Rank 1229', 'Cool', '5e9c635e772b82e2070d64b81a1f875aa5adc722.png'], ['#59', 'Rank 1230', 'Cool', '0d6a5627969b82987cddccb0d7e9467c7a7b37a8.png'], ['#42', 'Rank 1303', 'Cool', 'c7a02a021b5c5cc5774ed0db8f4cc4932417eb92.png'], ['#50', 'Rank 1312', 'Cool', '749bccd9de69b9883e4dedde87183058ff1d4d4c.png'], ['#15', 'Rank 1328', 'Cool', '81ea065085abf2c7779f9d798122f78ae8041a70.png'], ['#81', 'Rank 1342', 'Cool', '1c35f18a81be769e3a0257d57de05d0fda98c83c.png'], ['#125', 'Rank 1381', 'Cool', '545fbd5d2ece0ed9784c7e91abecda6d20b2b315.png'], ['#133', 'Rank 1464', 'Cool', '1207164b27a2ee81d7f3e702d2d5b3b0b1913783.png'], ['#22', 'Rank 1471', 'Cool', '7f0f1b99a7cd997ddb1bf1eba3b582de44de1fdf.png'], ['#117', 'Rank 1478', 'Cool', '60cef13b81ab33d019520bbea1b7f20852809f59.png'], ['#180', 'Rank 1482', 'Cool', '67267d2f330d32e09bd1c1f8a4a6540696bb8fa7.png'], ['#3', 'Rank 1483', 'Cool', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['#1', 'Rank 1493', 'Cool', '448eccc4038665a12745237d8ad03d8a915a2aaa.png'], ['#12', 'Rank 1499', 'Cool', '9d675ef1d434b9ccbe27442da3a3ea93fea783be.png'], ['#28', 'Rank 1513', 'Common', 'e883a1233881a7aa92e36bf7fc78f448119abe73.png'], ['#69', 'Rank 1519', 'Common', '39a16118167500d595d730f9ffa4b8525317e92f.png'], ['#19', 'Rank 1593', 'Common', '1d99931f33074610d169038fda2aff5e46157785.png'], ['#33', 'Rank 1598', 'Common', '0f081edb734265aef9b0cd0901f1266d7bf8706e.png'], ['#77', 'Rank 1604', 'Common', 'fdd3691f60e2f32e25d1898c399011b2f201ffe1.png'], ['#74', 'Rank 1607', 'Common', '0ce9ea2921ed795213863f6122a221ffbb6d7b59.png'], ['#92', 'Rank 1612', 'Common', '9ac6b5f1aac59e0b9684e88c630127d854ad8a26.png'], ['#194', 'Rank 1622', 'Common', 'af4b86759622851e184904c093dafe220d4a57ec.png'], ['#70', 'Rank 1623', 'Common', 'd2f2ddd4cc4fae1aac544b0f6483e34c1211870d.png'], ['#56', 'Rank 1645', 'Common', 'b39543fbb7020171bb969ee7c8908c074fb3a26d.png'], ['#178', 'Rank 1657', 'Common', '51920cdcbb9351b492fb09e85c2943615540f51f.png'], ['#94', 'Rank 1672', 'Common', '556c88d7e94ec15cee46ac298d7329cb8f1a9759.png'], ['#54', 'Rank 1684', 'Common', 'f7cef5f80157602e3d7284a571d12ecac397d0e6.png'], ['#148', 'Rank 1715', 'Common', '514d642ba1fea0d47cc3b38a3184919ef1f43410.png'], ['#182', 'Rank 1719', 'Common', '06d9018ef820a6ddf0f6dee13684b49ff4490b8f.png'], ['#27', 'Rank 1727', 'Common', '54f85a127071a7154de873c7fb94af855459d559.png'], ['#186', 'Rank 1735', 'Common', '5d5fbfbe252f50e710b28472461593506ab887ba.png'], ['#71', 'Rank 1736', 'Common', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['#78', 'Rank 1766', 'Common', 'f94b5c39912bdcc1579d5bcf468a02e6c1a27188.png'], ['#109', 'Rank 1791', 'Common', 'b870c834e756445b443cf42b8433ac982c55b096.png'], ['#44', 'Rank 1793', 'Common', '65d0ce0aeb8518492505c08cca1e05241dd89e1b.png'], ['#49', 'Rank 1829', 'Common', '30366ef1553c6d218369c283127a57513a002e41.png'], ['#51', 'Rank 1838', 'Common', '2bf215843610bd7dbf74447039daaf632b46db6f.png'],
 ['#98', 'Rank 1873', 'Common', '4e008f7938f7aeb9d636ff914d939d85f18804eb.png'], ['#11', 'Rank 1884', 'Common', '1e052559e1c1dd8ff2a3036cbec28ad181364b5c.png'], ['#93', 'Rank 1928', 'Common', '546f0b78f569e7fe427e299433d7c0a8045ab112.png'], ['#116', 'Rank 1945', 'Common', '0b681b441292eb86251b375213675e4c5f2fadd5.png'], ['#41', 'Rank 1950', 'Common', 'c760890a6ac8dcd1f02cf465b0fea0ef76ad5c7e.png'], ['#63', 'Rank 1952', 'Common', 'f5c4e87a0ecc6e30952d3fa3d85925bfc9ce5628.png'], ['#91', 'Rank 1963', 'Common', '19917634db9e856b552769df862e80505999be19.png'], ['#4', 'Rank 1993', 'Common', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['#24', 'Rank 2040', 'Common', 'f3a00892e11a77c215bf1bf72db2c3f2c5be8207.png'], ['#113', 'Rank 2046', 'Common', 'f0bca5f5f0a6e2c054004a9d62f8349bce352f43.png'], ['#37', 'Rank 2055', 'Common', '4fb8da88783ee934b4a843d69f3b0c2ceba5c960.png'], ['#99', 'Rank 2058', 'Common', 'e234abb211ee7f0a6cff1030fad907e6c332377e.png'], ['#96', 'Rank 2069', 'Common', '396c924c44cac2a3def8e0f58f91987af1a579a6.png'], ['#16', 'Rank 2072', 'Common', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['#140', 'Rank 2086', 'Common', '13163a724b195778c27e92761da4047e1317eb70.png'], ['#158', 'Rank 2089', 'Common', 'b3f48c16f49d474381d35686e3a78e4360548dc7.png'], ['#6', 'Rank 2096', 'Common', 'c58dd16f5b9253ab8059dca9c47ba52665fd2a79.png'], ['#110', 'Rank 2112', 'Common', '104b3b1b9c2bb1923395180d39e01c3bcf0374bf.png'], ['#187', 'Rank 2132', 'Common', 'a523b05b885a92f9642c4bd25302daef46ea0a95.png'], ['#151', 'Rank 2144', 'Common', '261cf273e23eeed9fd74f687f2a8af902c09ec07.png'], ['#66', 'Rank 2195', 'Common', '4103f92fdd1beff88880403cfa25af7f8ddc8c01.png'], ['#181', 'Rank 2201', 'Common', '134191a3c00db95507101aa5a91706eda5ec6d5a.png'], ['#46', 'Rank 2226', 'Common', 'cc66f8ad728ae1f419548d02d9cb17fd07f73c61.png'], ['#89', 'Rank 2242', 'Common', '42564e1cf62ff164b2656d4f5d699f315b717ebe.png'], ['#88', 'Rank 2249', 'Common', 'b28cdfdf34379f48356396ae20c3c1cf7143bb34.png'], ['#18', 'Rank 2296', 'Common', 'bbc6c827f7122f3bf0168b8c9cebbc3e70a42d35.png'], ['#195', 'Rank 2308', 'Common', '80b187ff1bf8b7577c1c3cc4d3de976be338d03a.png'], ['#189', 'Rank 2318', 'Common', '78957f2b5233a7b992ff2c5c066b99d891d0b428.png'], ['#80', 'Rank 2330', 'Common', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['#75', 'Rank 2356', 'Common', '9fb8b9e73341270657bd95b60b2a808b858a8f39.png'], ['#76', 'Rank 2362', 'Common', '6f46b17c1cd85af69c31875797f19cbbc2b6e5a9.png'], ['#149', 'Rank 2375', 'Common', '74f7d171a9cb2731d2b45acd3cb569704a988ff4.png'], ['#162', 'Rank 2376', 'Common', '75fc54919ac7802a4f72bc33d3c6b1f56599cfc6.png'], ['#171', 'Rank 2391', 'Common', '5b1ed966db684dcf3e851996517ebcb327a2a64d.png'], ['#108', 'Rank 2414', 'Common', '7c89a490a137f85ea843aa6cc42cb30093624988.png'], ['#55', 'Rank 2417', 'Common', '081c5a9ad0f78af64d7b9c0c64525a9248242904.png'], ['#58', 'Rank 2428', 'Common', 'a2df2db80e8526a12b631f35bb5e5b3daf5b5890.png'], ['#166', 'Rank 2437', 'Common', '0d77e3b61e5c44ec02c0a646b27e3898424e795f.png'], ['#163', 'Rank 2502', 'Common', '1262f860d58de4c040b521eaaecaebca5204df73.png'], ['#65', 'Rank 2537', 'Common', 'b25be8148c83c5181e252af4edf13a516e731654.png'], ['#156', 'Rank 2540', 'Common', '92d5b128db20f9b9757a3723416b6f77ef30d3c2.png'], ['#137', 'Rank 2542', 'Common', '510ee78252ab1f8092686a34075d9ad84bade0c4.png'], ['#26', 'Rank 2590', 'Common', 'd48725e7e8698909c39207654ab92ed43b7d53fd.png'], ['#14', 'Rank 2607', 'Common', 'a1ba3124cbc7ed80410e4a1097d0e52fe135f591.png'], ['#128', 'Rank 2634', 'Compostable', '75128a5a907efc00d7f8b99eb8e63800cc13b711.png'], ['#143', 'Rank 2642', 'Compostable', '56395636cc6ec8981837f6ec0ef9d33b70b6f97b.png'], ['#199', 'Rank 2654', 'Compostable', 'd97570b982e5124413e526f8e3f8182cc0a36e6c.png'], ['#164', 'Rank 2669', 'Compostable', '57d226fd94d457ead9ecc57d40544cb465586e75.png'], ['#39', 'Rank 2686', 'Compostable', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['#188', 'Rank 2688', 'Compostable', '79ce8f267dd3bb539ada16bb5a5d85f4ac0836fd.png'], ['#173', 'Rank 2692', 'Compostable', '776b5fbc5a0455e5d6611d9a3e9341358b5c6cc8.png'], ['#104', 'Rank 2699', 'Compostable', '0123f883ada7ccf150ee0cde2a21f42ebad6c9ca.png'], ['#198', 'Rank 2725', 'Compostable', '100f702b2325a91cf49513cbf84de779d6bbc38b.png'], ['#197', 'Rank 2739', 'Compostable', 'd35feddf342b306f43eca9cb74da18c359b96f16.png'], ['#135', 'Rank 2769', 'Compostable', 'a5bcdf12d99e981bbed166c2329a95d30e247829.png'], ['#111', 'Rank 2777', 'Compostable', 'ec2a1fa5fa3509364790ba13295bd1a530e94ec4.png'], ['#62', 'Rank 2790', 'Compostable', 'bee0c173ded07d2678023fb9d712879a8aaeed47.png'], ['#141', 'Rank 2804', 'Compostable', '26fab47cf52ad0623a57845b3bef11813f1afd69.png'], ['#97', 'Rank 2811', 'Compostable', 'b58935652137c334392335bd61478b32a55c6580.png'], ['#67', 'Rank 2842', 'Compostable', '04b30d85f20fb311bcedafedd15e6ac8e97cf766.png'], ['#192', 'Rank 2846', 'Compostable', '241c69be8a9a25be2df45d43d42aebc53a72af72.png'], ['#150', 'Rank 2848', 'Compostable', '7e1dc10ab5fb04e64a8f7710e24d9f5feb574f68.png'], ['#126', 'Rank 2912', 'Compostable', 'ce9ca5e940a31e4c64b12aa2dfe24d9552275fb0.png'], ['#7', 'Rank 2925', 'Compostable', '737c55c8b2199c48b7a2cbe226c74c1a9560cbac.png'], ['#159', 'Rank 2929', 'Compostable', '9cd08a35e4d3a884e57f2daca287d3fb94b3a1de.png'], ['#142', 'Rank 2967', 'Compostable', '9e9c159ae8289657f7c0d3222522aa1206736283.png'], ['#160', 'Rank 2969', 'Compostable', '3180703aacfa754905d30f0e5d4cc97d00ebe3df.png'], ['#161', 'Rank 3000', 'Compostable', '605a6cc54c2f3b31bdb783d627426c545e85c86c.png'], ['#119', 'Rank 3001', 'Compostable', 'ade5d393c844aefda926d039e77564ab10cca0f7.png'], ['#131', 'Rank 3004', 'Compostable', 'b004d0838147c2ca301949f50e587ed9943b7318.png'], ['#179', 'Rank 3008', 'Compostable', '79d6ee02119eefb0c49608d1582e07a213ae41d7.png'], ['#191', 'Rank 3009', 'Compostable', '73c97edb2dc0f7b01f7ef97b3fcb333882bfb7ba.png'], ['#105', 'Rank 3041', 'Compostable', '58fa7bdc1e1668d7da4247432c6d8a1ea432abae.png'], ['#103', 'Rank 3075', 'Compostable', '72f066d57ea2944f9ce342cf3231a3d1ccdcad0a.png']]


      export default Rarity;
