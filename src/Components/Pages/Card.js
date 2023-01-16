import React from 'react'
import cards from "./card3.module.css";
import { GoDatabase } from 'react-icons/go';
import { NavLink } from "react-router-dom";


const Card = () => {
  return (
    <div className={cards.body}>
        <div className={cards.card}>
                        <div className={cards.imagecontent}>
                            <span className={cards.overlay}></span>

                            <div className={cards.cardimage}>

                                <GoDatabase size={87}/>
                            </div>
                        </div>
                        
                        <div className={cards.cardcontent}>
                        <h2>Data Cockpit </h2>
                        <div className={cards.comp}>
                        <ul>
                            <li className={cards.list}>Master Data</li>
                                <li className={cards.list}>Product Data upload</li>
                                <NavLink to={"/link1"}><li className={cards.list}>Component Master</li></NavLink>
                                <NavLink to={"/compoasmt"}><li className={cards.list}>Component Assignment</li></NavLink>
                                <li className={cards.list}>Component Configuration list</li>
                                <li className={cards.list}>Component Repository Bulk Upload</li>
                                <li className={cards.list}>Cr Assignment Test App</li>
                            </ul>
                        </div>
                            
                            
                            
                            
                        </div>
                    </div>
                    
                    
   
    </div>

  )
}

export default Card






// import React from "react";
// import cd3 from "./card3.module.css";
// import { BiCoinStack } from "react-icons/bi";
// import { NavLink } from "react-router-dom";

// const Card = () => {
//   return (
//     <>
//       <div className={cd3.cont}>
//         <div className={cd3.outerCircle}>
//           <BiCoinStack
//             size={36}
//             style={{ marginTop: "12px", color: "white", marginLeft: "12px" }}
//           />
//         </div>
//         <div className={cd3.hpcard3}>
//           <div className={cd3.hpTitle3}>
//             <h5>Data Cockpit</h5>
//           </div>
//           <div className={cd3.hpdata}>
//             <NavLink to={"/link1"}>
//               <li className={cd3.dataLi}>Component Master</li>
//             </NavLink>
//             <NavLink to={"/woe"}>
//               <li className={cd3.dataLi}>Work Order Execution</li>
//             </NavLink>
//             <NavLink to={"/compoasmt"}>
//               <li className={cd3.dataLi}>Component Assignment</li>
//             </NavLink>

//             <li className={cd3.dataLi}>Conponent Configuration List</li>
//             <li className={cd3.dataLi}>Component Repository Bulk Upload</li>
//             <li className={cd3.dataLi}>CR Assignment TEST APP</li>
//           </div>
//           <div className={cd3.outerDataImgCon1}>
//             <img
//               className={cd3.outerDataImg}
//               src="https://us.123rf.com/450wm/normaals/normaals2008/normaals200800004/normaals200800004.jpg?ver=6"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

// // import React from "react";
// // import Cardcss from "./card.module.css";
// // import { BsArrowRightCircleFill } from "react-icons/bs";
// // import { NavLink } from "react-router-dom";

// // const Card = () => {
// //   return (
// //     <div>
// //       <div className={Cardcss.icon1}>
// //         <img
// //           className={Cardcss.img22}
// //           src="https://www.computerhope.com/jargon/d/database.png"
// //           alt=""
// //         />
// //       </div>
// //       <div className={Cardcss.card}>
// //         <div className={Cardcss.icard}>
// //           <div className={Cardcss.cardcontent}>
// //             <div className={Cardcss.lists}>
// //               <NavLink to={"/woe"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>Work Order Execution</h6>
// //                 </p>
// //               </NavLink>
// //               <NavLink to={"/link1"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>link2</h6>
// //                 </p>
// //               </NavLink>

// //               <NavLink to={"/link1"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>Component Master</h6>
// //                 </p>
// //               </NavLink>

// //               <NavLink to={"/compoasmt"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>ComponentAssignmentMaster</h6>
// //                 </p>
// //               </NavLink>
// //               <NavLink to={"/link1"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>link1</h6>
// //                 </p>
// //               </NavLink>
// //               <NavLink to={"/link1"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>link1</h6>
// //                 </p>
// //               </NavLink>
// //               <NavLink to={"/link1"}>
// //                 <p>
// //                   <span className={Cardcss.iconarrow}>
// //                     <BsArrowRightCircleFill />
// //                   </span>
// //                   <h6>link1</h6>
// //                 </p>
// //               </NavLink>
// //             </div>

// //             <div className={Cardcss.cardimagediv}>
// //               <img
// //                 className={Cardcss.cardimage}
// //                 src="https://mehrinvest.com/storage/elementor/thumbs/Mehrinvest_17_web-p98q560mbdedicl626amtddbws7cla2vqqcty3hkeg.jpg"
// //                 alt=""
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Card;
