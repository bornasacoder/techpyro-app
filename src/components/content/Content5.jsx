import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Content5.css";
import { Avatar, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowForward, Star } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "40px 40px", display:{md:"block",sm:"block",xs:"none"}}}>
      <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ gap: "30px" }}
        >
          <Tab
            label="Project Maneger"
            {...a11yProps(0)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="Data Analyst"
            {...a11yProps(1)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="UX Designer"
            {...a11yProps(2)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="IT Support Specilist"
            {...a11yProps(3)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="Digital Marketer"
            {...a11yProps(4)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="Data Scientist"
            {...a11yProps(5)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="Front-End Developer"
            {...a11yProps(6)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
          <Tab
            label="Bookkeeper"
            {...a11yProps(7)}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0px",
              borderRadius: "0px",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Project Manager</Typography>
          <br />
          <Typography>
            Oversee the planning and execution of projects to ensure they’re
            successful
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 396,314**</Typography>
          <br />
          <Typography>Projected 10 year growth: +10.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Google</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">
                      Google Project Management:
                    </Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "24vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7Ft9HzmpamG0aCN75HfACC/25f48cbbaa9a585689351cf97af573c8/adrienne_testimonial_image.jpg?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "Earning my Google Project Management: Professional Certificate is
              one of the biggest accomplishments I’ve made in my education, and
              it was a key stepping stone to my new career."
              <Typography>
                <br /> – Adrienne
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Data Analyst</Typography>
          <br />
          <Typography>
            Collect, organize, and transform data to make informed decisions
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 123,321**</Typography>
          <br />
          <Typography>Projected 10 year growth: +8.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container columnGap={2}>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/6c/55be210edc41f4962dc87be94a5747/0_DA_GCC-Images_KARRIM.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Google</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">Google Data Analyst:</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/63/baf9bea98641aeb8fd36a7b1291791/DA-PC_Image.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>IBM Skills Network</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">IBM Data Analyst</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Microsoft Excel,Pythan
                      Programming,Data Analysis,Data Visualization...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.6 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(11.6k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 4 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "50vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/63pGpfhMeKIJrYBzpdQOnI/34ae6d8d0cf14f0523611a8998dfeaff/Rachel_L.png?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "For anyone starting out as a data analyst, this is a great
              introduction and is very inspiring. The content was well paced and
              was accessible to people just starting out. I liked the variety of
              the assignments present in the program. "
              <Typography>
                <br /> – Rachel L.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm.
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">UX Designer</Typography>
          <br />
          <Typography>
            Make digital and physical products easier and more enjoyable to use
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 84,428**</Typography>
          <br />
          <Typography>Projected 10 year growth: +13.7%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container columnGap={2}>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Google</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">Google UX Designer:</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "24vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2SOYF4ZFWTLtCs4LB8zeM9/9cff11144c5008abbfa613bbf363ea3a/Daijah_Reese.png?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "For anyone starting out as a data analyst, this is a great
              introduction and is very inspiring. The content was well paced and
              was accessible to people just starting out. I liked the variety of
              the assignments present in the program. "
              <Typography>
                <br /> – Rachel L.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm.
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">IT Support Specialist</Typography>
          <br />
          <Typography>
            Evaluate and troubleshoot technology issues so equipment runs
            smoothly
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 123,321**</Typography>
          <br />
          <Typography>Projected 10 year growth: +8.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container columnGap={2}>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Google</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">Google IT Support:</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/7b/99d363d6ca4ccdbf1257439fe0157c/IBM-Tech-Support-PC.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>IBM IT Support</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">IBM Data Analyst</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Microsoft Excel,Pythan
                      Programming,Data Analysis,Data Visualization...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.6 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(11.6k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 4 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "50vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2MeIOQ5Fi0Pd4D7fMLjUUq/d090904a4a3a6131334884e08c3f23f4/chukwuma.png?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "For anyone starting out as a data analyst, this is a great
              introduction and is very inspiring. The content was well paced and
              was accessible to people just starting out. I liked the variety of
              the assignments present in the program. "
              <Typography>
                <br /> – Rachel L.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm.
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Digital Marketer</Typography>
          <br />
          <Typography>
            Define and develop digital strategies to deliver business growth
            through online channels
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 123,321**</Typography>
          <br />
          <Typography>Projected 10 year growth: +8.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container columnGap={2}>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a9/8f52253a404302875e0ffea2fc87dc/0_Moses.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Google</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h5" fontSize="13px">
                      Google Digital Marketing & E-Commerce
                    </Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/02/41460a29d744dfa39106941eae2e02/fb-specialization.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Meta</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4" fontSize="13px">
                      Meta Social Media Marketing
                    </Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Microsoft Excel,Pythan
                      Programming,Data Analysis,Data Visualization...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.6 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(11.6k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 7 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "50vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/27pQhthyhIEPsaxSlr0LFa/774f94e7410035dc3713e3d6ab256fd3/hillary_testimonial_image.jpg?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "After a year of taking courses on Coursera, I can happily say
              that I have become a confident and aspiring entrepreneur and a
              better marketing and advertising professional."
              <Typography>
                <br /> – Hillary G.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm.
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Data Scientist</Typography>
          <br />
          <Typography>
            Extract and analyze data to make informed business decisions
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 396,314**</Typography>
          <br />
          <Typography>Projected 10 year growth: +10.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/23/22bc54f77f45a2b057f4ff518d272f/iStock-1169539468.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>IBM Skills Network</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">IBM Data Science</Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "24vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1KSacHbNBDciD08b6rfqDK/249361c7cc3897b7c5c891dd7f9538c0/emma_testimonial_image.jpg?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "Being able to complete it and having done that while also
              becoming a new mother and being able to get the internship made me
              feel really confident and like I could learn absolutely anything."
              <Typography>
                <br />– Emma S.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Front-End Developer</Typography>
          <br />
          <Typography>
            Design and develop the look, feel, function, and user experience of
            a website
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 396,314**</Typography>
          <br />
          <Typography>Projected 10 year growth: +10.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Meta</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">
                      Meta Front-End Developer
                    </Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "24vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2wr2pSDJ9eHydt2Ru8IUlW/a5e8f97d46f90b02c72a51aa1af3414b/Julio_Rodriguez.jpg?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "Without a doubt, the web development courses on Coursera were
              instrumental in helping me build a new career. I’d say that 80% of
              my current skills were gained on Coursera."
              <Typography>
                <br />– Julio R.
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box
          sx={{
            border: "3px solid #E5E7E8",
            height: "auto",
            width: "100%",
            margin: "15px 0px",
            padding: "45px",
          }}
        >
          <Typography variant="h1">Bookkeeper</Typography>
          <br />
          <Typography>
          Record financial transactions and manage financial records
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Median entry-level salary</Typography>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "50vw",
                backgroundColor: "#E5E7E8",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography>All occupations</Typography>
            </Box>
            <Typography>₹2,657,200*</Typography>
          </Box>
          <br />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: "80vw",
                backgroundColor: "#0157D2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Project Manager</Typography>
            </Box>
            <Typography>₹4,725,000**</Typography>
          </Box>
          <br />
          <Typography>Job openings: 396,314**</Typography>
          <br />
          <Typography>Projected 10 year growth: +10.2%***</Typography>
          <br />
          <br />
          <Typography variant="h4">
            Recommended Professional Certificate
          </Typography>
          <br />
          <br />
          <Box sx={{ flexGrow: 1, height: "auto" }}>
            <Grid container>
              <Grid
                Item
                xs={4}
                sx={{
                  "&:hover": {
                    transform: "scale3d(1.05,1.05,2)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Item>
                  <Box
                    sx={{
                      background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/0ee0209fb444a38ade1afccde6355e/option2.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=600&h=216&fit=fill&q=50"})
                    center/cover no-repeat`,
                      height: "40vh",
                    }}
                  />
                  <Box
                    sx={{ padding: "10px 10px", display: "flex", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/0e/4bb2b81f8e453eab147bbb94bb53da/Intuit_Square_360x360_WhiteonBlue.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40"})
                      center/cover no-repeat`,
                        height: "23px",
                        width: "23px",
                      }}
                    ></Typography>
                    <Typography>Intuit</Typography>
                  </Box>
                  <Box sx={{ padding: "10px 10px" }}>
                    <Typography variant="h4">
                      Intuit Acadamay Bookkeeping
                    </Typography>
                    <Typography fontSize="12px" marginTop="8px">
                      Skills You'll gain: Organizational Culture,Carrer
                      Development,Statigic Thinking,Change...
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      <Typography variant="h5">4.8 </Typography>
                      <Star sx={{ fontSize: "16px", color: "#0062E4" }} />
                      <Typography>(72.2k reviews)</Typography>
                    </Box>
                    <Typography fontSize="12px">
                      Beginner . Professional Certificate . 6 months
                    </Typography>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", width: "24vw", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  borderBottomStyle: "solid",
                },
              }}
            >
              Explore All Certificates{" "}
            </Typography>
            <ArrowForward />
          </Box>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2wr2pSDJ9eHydt2Ru8IUlW/a5e8f97d46f90b02c72a51aa1af3414b/Julio_Rodriguez.jpg?auto=format%2Ccompress&dpr=2&w=&h=136"
              sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <Typography>
              "I took this course because my husband and I opened a new business
              and I wanted to be helpful. This course has helped me understand
              bookkeeping and also, given me confidence in becoming a
              bookkeeper. I love how interactive and (although online) Hands on
              it is. Thank you!"
              <Typography>
                <br />– Christina
              </Typography>
            </Typography>
          </Box>
          <br />
          <Box borderTop="1px solid #e6e6e6">
            <br />
            <Typography fontSize="11px">
              * Employment, Wages, and Projected Change in Employment by Typical
              Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
              2022, www.bls.gov/emp/tables/education-summary.htm
            </Typography>
            <Typography fontSize="11px">
              ** Median salary data (median with 0-2 years experience) and job
              opening data are sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
            <Typography fontSize="11px">
              *** Growth rate data is sourced from United States Lightcast™ Job
              Postings Report. Data for job roles relevant to featured programs
              (9/01/2021 - 9/01/22)
            </Typography>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
