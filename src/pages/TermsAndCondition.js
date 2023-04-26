import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { borderBottom } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterFrom() {
  const navigate = useNavigate();
const [isChecked,setIsChecked] = useState(false)
  function handleClick() {
    navigate("/register-form");
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
   }

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 5,
          py: 6,
          margin:10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{textAlign:'center'}} component="h1" variant="h5">
        Terms and Conditions and Privacy Statement
        </Typography>
        <Typography sx={{marginTop:5}}>
The software and all of its associated intellectual property rights belong to the developer or licensor.

License: The developer or licensor grants the user a non-exclusive, non-transferable license to use the software in accordance with the terms and conditions of the agreement.

Restrictions: The user is prohibited from reverse engineering, decompiling, or otherwise attempting to discover the source code of the software. The user is also prohibited from distributing the software or making it available to any third party without the express written consent of the developer or licensor.

Warranty: The software is provided "as is" and the developer or licensor does not provide any warranties or representations, either express or implied, regarding the software, including but not limited to any implied warranties of merchantability or fitness for a particular purpose.

Limitation of Liability: The developer or licensor shall not be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising out of or in connection with the use or inability to use the software.

Termination: The license granted to the user may be terminated by the developer or licensor at any time if the user breaches any of the terms and conditions of the agreement.

Governing Law: The agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the developer or licensor is located.

Entire Agreement: The terms and conditions of the agreement constitute the entire agreement between the parties and supersede all prior negotiations, understandings, and agreements between the parties.

Please note that this is a general set of terms and conditions and may need to be modified based on the specific software and the jurisdiction in which it is being used.


        </Typography>
        <Typography sx={{textAlign:'center',marginTop:5}} component="h1" variant="h5">
       Data Privacy Statement
        </Typography>
        <Typography sx={{marginTop:5}}>

We take data privacy seriously and are committed to protecting the personal information of our users. This data privacy statement describes how we collect, use, and protect your personal information when you use our software.

Information Collection: We may collect personal information such as your name, email address, and location when you use our software.

Information Use: We use your personal information to provide our software services to you and to improve our software. We may also use your personal information to send you marketing communications and updates about our software.

Information Sharing: We do not share your personal information with third parties unless it is necessary to provide our software services to you, to comply with legal obligations, or to protect our rights or property.

Information Security: We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or theft.

User Rights: You have the right to access, correct, or delete your personal information. You may also object to or restrict the processing of your personal information. To exercise your rights, please contact us using the contact details provided below.

Cookies: Our software may use cookies or similar technologies to improve the user experience and to analyze user behavior. You can disable cookies in your browser settings.

Changes to this Statement: We may update this data privacy statement from time to time. The updated data privacy statement will be effective upon posting on our website or software.

If you have any questions or concerns about our data privacy practices, please contact us at [contact details].

        </Typography>

      
        <Box sx={{ flexDirection: 'row', justifyItems:'center' }}>
        <Checkbox onChange={handleChange}/>
        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
            disabled={!isChecked}
          >
            I Agree
          </Button>
         
        </Box>
      </Box>
    </Container>
  );
}