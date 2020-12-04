module.exports = ({ name, price1, price2, receiptId }) => {
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
            width: 150px;
            height: 50px;
            margin-top: -10px;
            margin-bottom: -10px;
            z-index: -10;
            position: relative;

        }

        ._iskillers_website_link {
            background-color: purple;
            border-radius: 5px;
        }

        ._iskilleres_link {
            color: white;
            font-weight: bold;
            letter-spacing: 5px;
            text-align: center;
            padding: 3px;
            font-size: 12px;
            z-index: 10;
            position: relative;
        }


        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
        }

        td,
        th {
            text-align: left;
            color: purple;
            font-size: 10px;
            margin-left: 10px;
        }

        ._profile_picture {
            border-radius: 10px;
            width: 90px;
            height: 90px;
        }

        ._Signature {
            align-items: flex-end;
            justify-content: flex-end;
        }

        ._Signature_text {
            font-weight: italic;
            font-size: 12px;
            justify-content: right;
            color: purple;
            font-weight: bold;
            margin-top: 20px;

        }
       ._User_Profile{
           width: 100%;
       }
    </style>
</head>

<body>
        <div class="_Id_Card_Main">
            <img src='data:image/png;base64,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'
                class="_iskillers_logo" />
            <div class="_iskillers_website_link">
                <div class="_iskilleres_link">STUDENT ADMIT CARD</div>
            </div>
            <table>
                <tr>
                    <td>
                            <table style="margin-left: 15px;">
                                <tr>
                                    <td>Full Name </td>
                                    <td></td>
                                    <td></td>
                                    <td>Hishmat Rai</td>
                                </tr>
                                <tr>
                                    <td>Roll No </td>
                                    <td></td>
                                    <td></td>
                                    <td>9177</td>
                                </tr>
                                <tr>
                                    <td>Batch </td>
                                    <td></td>
                                    <td></td>
                                    <td>Batch 01</td>
                                </tr>
                                <tr>
                                    <td>Cource </td>
                                    <td></td>
                                    <td></td>
                                    <td>Web Development</td>
                                </tr>
                            </table>
                    </td>
                    <td>
                        <div class="_User_Profile">
                            <img src="https://pbs.twimg.com/media/EGbuG9MWwAAeT-v.jpg" class="_profile_picture"
                                alt="Profile Picture" style="margin-left: 70px;"  />
                        </div>
                    </td>
                </tr>
            </table>

            <div class="_iskillers_website_link">
                <p class="_iskilleres_link">www.iskillers.com</p>
            </div>


        </div>
        <br />
        <div class="_Id_Card_Main">
            <img src='data:image/png;base64,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'
                class="_iskillers_logo" />
            <div class="_iskillers_website_link">
                <div class="_iskilleres_link">STUDENT ADMIT CARD</div>
            </div>

            <div class="_User_Data_Main">
                <table>
                    <tr>
                        <td>
                            <div class="_User_Profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                    class="_profile_picture _qrscanner" alt="Profile Picture" style="margin-left: 30px;" />
                            </div>
                        </td>
                        <td>
                            <table >
                                <tr style="padding-left: 50px">
                                    <td>Email </td>
                                    <td></td>
                                    <td></td>
                                    <td>hishmatrai@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Mob Num </td>
                                    <td></td>
                                    <td></td>
                                    <td>03322404609</td>
                                </tr>
                                <tr>
                                    <td>Valid Up To </td>
                                    <td></td>
                                    <td></td>
                                    <td>01/10/2021</td>
                                </tr>
                            </table>
                            <div class="_Signature">
                                <div class="_Signature_text"> Authorized Signature</div>
                            </div>
            </div>
            </td>
            </tr>
            </table>




            <div class="_iskillers_website_link">
                <p class="_iskilleres_link">www.iskillers.com</p>
            </div>
        </div>
</body>

</html>
    `;
};