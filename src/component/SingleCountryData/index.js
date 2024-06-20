import { useState } from "react"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function SingleCountryData({ splitData, splitFlag, setSplitFlag, themeColour }) {


    const handleBack = () => {
        setSplitFlag(false);
    }


    return (
        <div className="single-country-data-container" style={{ backgroundColor: themeColour == "white" ? "white" : "#2C3539"}}>
            <div className="single-country-back-container">
                <Button className="back-button" startIcon={<ArrowBackIcon sx={{ width: "0.8rem" }} />} sx={{ borderColor: "white", color: themeColour == "white" ? "black" : "white", fontSize: "0.6rem", paddingTop: "4px", textTransform: "none", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', backgroundColor: themeColour == "white" ? "white" : "#36454F"}} onClick={handleBack}>Back</Button>
            </div>
            <div className="single-country-details-container">
                <img alt="Country Image" src={splitData[0]?.flag} className="country-image"></img>
                <div className="country-details-container">
                    <p className="country-details-name" style={{color: themeColour == "white" ? "black" : "white"}}>{splitData[0]?.name}</p>
                    <span className="country-sub-details" style={{color: themeColour == "white" ? "black" : "white"}}>Native name:<span className="country-sub-details-value">{splitData[0]?.nativeName}</span></span>
                    <span className="country-sub-details" style={{color: themeColour == "white" ? "black" : "white"}}>Population:<span className="country-sub-details-value">{splitData[0]?.population}</span></span>
                    <span className="country-sub-details" style={{color: themeColour == "white" ? "black" : "white"}}>Region:<span className="country-sub-details-value">{splitData[0]?.region}</span></span>
                    <span className="country-sub-details" style={{color: themeColour == "white" ? "black" : "white"}}>SubRegion:<span className="country-sub-details-value">{splitData[0]?.subRegion}</span></span>
                    <span className="country-sub-details" style={{color: themeColour == "white" ? "black" : "white"}}>Capital:<span className="country-sub-details-value">{splitData[0]?.capital}</span></span>
                    <div className="country-borders" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{paddingRight:"0.5rem" , color: themeColour == "white" ? "black" : "white"}}>Border Countries:</span>
                        <div>
                            {splitData[0]?.borderCoutries && splitData[0]?.borderCoutries.map((c, index) =>
                                <span key={index} className="country-button" style={{ width: "5rem", margin: '0 4px', borderColor: "white", color: themeColour == "white" ? "black" : "white", fontSize: "0.6rem", paddingTop: "4px", textTransform: "none", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' , display: "inline-block", height: "0.9rem" , backgroundColor: themeColour == "white" ? "white" : "#36454F"}}>
                                    {c}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}