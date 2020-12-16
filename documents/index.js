module.exports = ({ name, fname, course, rollNumber, url }) => {
    const today = new Date();
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ._Main_Div {
            width: 430px;
            align-items: center;
            text-align: center;
            margin: auto;
        }

        ._Id_Card_Main {
            border: 2px solid purple;
            border-radius: 5px;
            padding: 3px;
            width: 350px;
            height: 190px;
            margin: auto;
        }

        ._iskillers_logo {
            width: 110px;
            height: 30px;
            margin-top: -10px;
            margin-bottom: -10px;
            z-index: -10;
            position: relative;

        }

        ._iskillers_website_link {
            background-color: purple;
            border-radius: 5px;
            padding:3px;
            margin-top:10px;
        }

        ._iskilleres_link {
            color: white;
            font-weight: bold;
            letter-spacing: 5px;
            text-align: center;
            padding: 3px;
            font-size: 8px;
            z-index: 10;
            position: relative;
        }


        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            margin-top:5px;
        }

        td,
        th {
            text-align: left;
            color: purple;
            font-size: 10px;
            margin-left: 10px;
            padding:3px;
        }

        ._profile_picture {
            border-radius: 10px;
            width: 80px;
            height: 80px;
        }

        ._Signature {
            align-items: flex-end;
            justify-content: flex-end;
        }

        ._Signature_text {
            justify-content: right;
            color: purple;
            text-align:center;
            font-size:6px;
            margin-top:10px;
        }
       ._User_Profile{
           width: 100%;
       }
       ._imageDiv{
        text-align:center;
       }
       .img-responsive{
        width: 90px;
        height: 90px;
       }
    </style>
</head>

<body>
        <div class="_Id_Card_Main">
        <div class="_imageDiv">
            <img src='https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254'
                class="_iskillers_logo" />
        </div>
            <div class="_iskillers_website_link">
                <div class="_iskilleres_link">STUDENT ADMIT CARD</div>
            </div>
            <table>
                <tr>
                    <td>
                            <table style="margin-left: 15px;">
                                <tr>
                                    <td>Name: </td>
                                    <td></td>
                                    <td style="width:170px;">${name}</td>
                                </tr>


                                <tr>
                                    <td>Roll No: </td>
                                    <td></td>
                                    <td style="width:170px;">${rollNumber}</td>
                                </tr>
                               
                                <tr>
                                    <td>Cource: </td>
                                    <td></td>
                                    <td style="width:170px;">${course}</td>
                                </tr>
                                <tr>
                                <td style="width:90px;">Authorized Sign:</td>
                                <td></td>
                                <td style="width:170px;">_______________</td>
                            </tr>
                            </table>
                    </td>
                    <td>
                            <img src=${url}
                                alt="Profile Picture" style="marginn-top:15px;width:70px;height:70px;margin-left:5px;"  
                                />
                                <div class="_Signature_text"> </div>
                    </td>
                </tr>
            </table>

            <div class="_iskillers_website_link">
                <div class="_iskilleres_link">www.iskillers.com</div>
            </div>
        </div>
        <br />
        <div class="_Id_Card_Main">
           <div class="_imageDiv">
              <img src='https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254'
                 class="_iskillers_logo" />
           </div>

            <div class="_User_Data_Main">
                            <p style="text-align:center">

                            <!-- Get a Placeholder image initially, 
                       this will change according to the 
                       data entered later -->
                            <img src="https://chart.googleapis.com/chart?cht=qr&chl=${rollNumber}&chs=160x160&chld=L|0"
                                class="qr-code img-thumbnail img-responsive" id="img"/>
                            </p>
                            <div class="_Signature">        
        </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.js">
</script>

<script>
// document.getElementById("img").setAttribute("src", "https://chart.googleapis.com/chart?cht=qr&chl="+"hhhiwio"+"&chs=160x160&chld=L|0")
</script>

</html>
    `;
};