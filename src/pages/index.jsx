import '../App.css';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { MenuItem } from '@mui/material';
import SwitchTheme from "../component/SwitchTheme"
import SingleCountryData from "../component/SingleCountryData"

function Flag() {
  const [searchValue, setSearchValue] = useState("")
  const [region, setRegion] = useState("")
  const [country, setCountry] = useState([])
  const [allRegion, setAllRegion] = useState(["Asia,America,Europe,Australia"])
  const [themeColour, setthemeColour] = useState("white")
  const [splitFlag, setSplitFlag] = useState(false)
  const [splitData, setSplitData] = useState(null)

  var countryData = [
    { name: "Afghanistan", nativeName: "Afghanistan", subRegion: "Asia",population: 38928346, "flag": "https://flagcdn.com/ai.svg", "capital": "Kabul", "region": "Asia", borderCoutries: ["India", "Pakistan", "Australia"] },
    { name: "Albania", nativeName: "Albania", subRegion: "Asia", population: 2877797, "flag": "https://flagcdn.com/al.svg", "capital": "Mariehamn", "region": "Americas", borderCoutries: ["India", "China", "Azerbajain"] },
    { name: "Algeria", nativeName: "Algeria", subRegion: "Asia", population: 43851044, "flag": "https://flagcdn.com/dz.svg", "capital": "Tirana", "region": "Asia", borderCoutries: ["India", "Pakistan"] },
    { name: "Andorra", nativeName: "Andorra", subRegion: "Asia", population: 77265, "flag": "https://flagcdn.com/as.svg", "capital": "Algiers", "region": "Americas", borderCoutries: ["India", "China", "Azerbajain"] },
    { name: "Angola", nativeName: "Angola", subRegion: "Asia", population: 32866272, "flag": "https://flagcdn.com/ad.svg", "capital": "Luanda", "region": "Asias", borderCoutries: [ "China", "Azerbajain"] },
    { name: "Argentina", nativeName: "Argentina",subRegion: "Asia", population: 45195777, "flag": "https://flagcdn.com/ao.svg", "capital": "The Valley", "region": "Asias", borderCoutries: ["India", "Pakistan"] },
    { name: "Armenia", nativeName: "Armenia", subRegion: "Asia", population: 2963243, "flag": "https://flagcdn.com/ai.svg", "capital": "Saint John's", "region": "Asias", borderCoutries: ["India", "Pakistan"] },
    { name: "Australia", nativeName: "Australia", subRegion: "Asia", population: 25499884, "flag": "https://flagcdn.com/aq.svg", "capital": "Buenos Aires", "region": "Australia", borderCoutries: ["India", "Azerbajain"] },
    { name: "Austria", nativeName: "Austria", subRegion: "Asia", population: 9006398, "flag": "https://flagcdn.com/ag.svg", "capital": "Yerevan", "region": "Europe", borderCoutries: ["India", "Pakistan", "Azerbajain"] },
    { name: "Azerbaijan", nativeName: "Azerbaijan",subRegion: "Asia", population: 10139177, "flag": "https://flagcdn.com/ar.svg", "capital": "Oranjestad", "region": "Asias", borderCoutries: ["India", "China", "Azerbajain"] }
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if(e.target.value == "")
      {
        setCountry(countryData)
      }
      else {
        const filteredData = countryData.filter((c) => c.name.toLowerCase().startsWith(e.target.value))
        debugger;
        setCountry(filteredData)
      }

  }

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  }

  function fetchCountryData() {
    return new Promise((resolve, reject) => {
      const data = [
        { name: "Afghanistan", population: 38928346, "flag": "https://flagcdn.com/ai.svg", "capital": "Kabul", "region": "Asia" },
        { name: "Albania", population: 2877797, "flag": "https://flagcdn.com/al.svg", "capital": "Mariehamn", "region": "Americas" },
        { name: "Algeria", population: 43851044, "flag": "https://flagcdn.com/dz.svg", "capital": "Tirana", "region": "Asia" },
        { name: "Andorra", population: 77265, "flag": "https://flagcdn.com/as.svg", "capital": "Algiers", "region": "Americas" },
        { name: "Angola", population: 32866272, "flag": "https://flagcdn.com/ad.svg", "capital": "Luanda", "region": "Asias" },
        { name: "Argentina", population: 45195777, "flag": "https://flagcdn.com/ao.svg", "capital": "The Valley", "region": "Asias" },
        { name: "Armenia", population: 2963243, "flag": "https://flagcdn.com/ai.svg", "capital": "Saint John's", "region": "Asias" },
        { name: "Australia", population: 25499884, "flag": "https://flagcdn.com/aq.svg", "capital": "Buenos Aires", "region": "Australia" },
        { name: "Austria", population: 9006398, "flag": "https://flagcdn.com/ag.svg", "capital": "Yerevan", "region": "Europe" },
        { name: "Azerbaijan", population: 10139177, "flag": "https://flagcdn.com/ar.svg", "capital": "Oranjestad", "region": "Asias" }
      ];
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  const handleCountryApi = async () => {
    try {
      var res = await fetchCountryData();
      setCountry(res);
    }
    catch (err) {
      console.log("Error", err);
    }

  }

  const handleCountryChange = (e) => {
    setSplitFlag(true)
    const uniqueCountryData = countryData.filter((c) => c.name == e.name)
    setSplitData(uniqueCountryData);
  }

  useEffect(() => {
    handleCountryApi();
  }, [])

  return (
    <div className="flag-container">
      <div className='header' style={{ backgroundColor: themeColour == "black" ? "#36454F" : "white" }}>
        <p style={{ color: themeColour == "black" ? "white" : "black" }} className="where-in-the-world"> Where in the world?</p>
        <SwitchTheme themeColour={themeColour} setthemeColour={setthemeColour} />
      </div>
      {!splitFlag ? <>
        <div className='container' style={{ backgroundColor: themeColour == "black" ? "#2C3539" : "#DCDCDC" }}>
          <div className='input-details-container'>
            <div className='search-for-country'>
              <TextField id="outlined-basic" label="Search for a country..." variant="outlined" onChange={handleSearch}
                sx={{
                  backgroundColor: themeColour == "black" ? "#36454F" : "white",
                  borderColor: themeColour == "black" ? "#36454F" : "white",
                  borderRadius: "5px",
                  width: "20rem",
                  '& .MuiOutlinedInput-root': {
                    height: '48px', // Adjust the height as needed
                    '& input': {
                      color: themeColour === "black" ? "white" : "black", // Set text color inside the input
                    },
                    '& fieldset': {
                      borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white
                    },
                    '&:hover fieldset': {
                      borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: themeColour === "black" ? "white" : "black",
                    top: '50%', // Center the label vertically
                    transform: 'translateY(-50%)', // Adjust the label position
                    fontSize: '12px', // Change the font size of the label
                    padding: "1rem"
                  },
                  '& .MuiInputLabel-shrink': {
                    color: themeColour === "black" ? "white" : "black",
                    transform: 'translate(14px, -6px) scale(0.75)', // Adjust label position and size when the input is focused or filled
                  },
                }} />
            </div>
            <div className='select-by-region'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>

                {allRegion && allRegion.map((a, index) => {
                  return (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={region}
                      label="region"
                      onChange={handleRegionChange}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            backgroundColor: themeColour === "black" ? "#36454F" : "white",
                            '& .MuiMenuItem-root': {
                              color: themeColour === "black" ? "white" : "black",
                            },
                          },
                        },
                      }}
                      sx={{
                        backgroundColor: themeColour == "black" ? "#36454F" : "white",
                        borderColor: "white",
                        borderRadius: "5px",
                        fontSize: "3px",
                        '& .MuiOutlinedInput-root': {
                          height: '48px',
                          color: themeColour === "black" ? "white" : "black",
                          '& input': {
                            color: themeColour === "black" ? "white" : "black", // Set text color inside the input
                          },
                          '& fieldset': {
                            borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white
                          },
                          '&:hover fieldset': {
                            borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: themeColour == "black" ? "#36454F" : "white", // Set border color to white when focused
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: themeColour === "black" ? "white" : "black",
                        },
                        '& .MuiSelect-icon': {
                          color: themeColour === "black" ? "white" : "black", // Dropdown arrow color
                        },

                      }}
                    >
                      <MenuItem key={index} value={a}>{a}</MenuItem>
                    </Select>
                  )
                })}

              </FormControl>
            </div>
          </div>

          <div className="country-row">
            {country?.map((c, index) => (
              <div key={index} className="country-container">
                <Paper sx={{ width: "12rem", height: "15rem", backgroundColor: themeColour == "black" ? "#36454F" : "white" }} elevation={3} onClick={() => handleCountryChange(c)}>
                  <img className="flag-image" src={c.flag} />
                  <div className="country-details">
                    <p className='country-name' style={{ color: themeColour == "black" ? "white" : "black" }}>{c?.name}</p>
                    <p className='country-population' style={{ color: themeColour == "black" ? "white" : "black" }}>Population : {c?.population}</p>
                    <p className='country-population' style={{ color: themeColour == "black" ? "white" : "black" }}>Region : {c?.region}</p>
                    <p className='country-population' style={{ color: themeColour == "black" ? "white" : "black" }}>Capital : {c?.capital}</p>
                  </div>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </>
        : <SingleCountryData splitData={splitData} splitFlag={splitFlag} setSplitFlag={setSplitFlag} themeColour={themeColour} />
      }

    </div>
  );
}

export default Flag;
