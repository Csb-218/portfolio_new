import React from 'react'
import Icon from '../utils/icon.util'

// Utility packages
// import space from '../../utils/spacing.util';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */

const Experience = ({ title, list, iconClass, containerClass, icon }) => {


    const experienceBlock = {

    }
    return (
    <>
            <div className={containerClass}>
                <span className={iconClass}>
                    <Icon icon={icon} />
                </span>
                <h3>{title}</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {
                        list?.map((experience,index) => {
                            return (
                                <div key={index} style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent:"space-between",
                                    rowGap:"20px",
                                    flexWrap:"wrap",
                                    padding:"25px 0px 25px 0px",
                                    borderStyle:"dotted",
                                    borderColor:"",
                                    borderWidth:`0em 0em 0.01em 0em`,

                                }}>
                                    <span style={{
                                        fontSize:"0.875rem"
                                        }}>
                                        {experience?.role}
                                    </span>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        fontSize:"0.875rem",
                                    }}>

                                        <span style={{

                                             marginRight:"5px",
                                             marginLeft:"5px",
                                            //  backgroundColor:"#1D1D1D",
                                             borderColor:"#2B2D2D",
                                             borderWidth:"1px",
                                             borderRadius:"20px",
                                             borderStyle:"solid",
                                             padding:"1px 8px 1px 8px"
                                        }}>
                                            {experience?.company}
                                        </span>
                                        <span style={{

                                            marginRight:"5px",
                                            marginLeft:"5px",
                                            // backgroundColor:"#1D1D1D",
                                            borderColor:"#2B2D2D",
                                            borderWidth:"1px",
                                            borderRadius:"20px",
                                            borderStyle:"solid",
                                            padding:"1px 8px 1px 8px"
                                        }}>
                                            {experience?.tenure}
                                        </span>

                                    </div>
                                    </div>
                                        )
                    })

                }
                                    </div>
                                </div>
    </>

                )
}

                export default Experience