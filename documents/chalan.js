module.exports = ({ name, fname, nic, course,fees }) => {
    const today = new Date();
return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
    .container {
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
    ._table {
      width: 100%;
    }
    ._logo {
      width: 230px;
      margin: auto;
    }
    ._table1 {
      width: 100%;
      text-align: left;
    }
    
    ._table1 tr td{
      padding: 0px !important;
     }
    ._td {
      border-bottom: 1px solid black !important;
      width: 20%;
    }
    td {
      font-size: 9px;
      padding-left: 8px !important;
    }
    ._td1 {
      border-bottom: 1px solid black;
    }
    ._table2 {
      width: 99%;
      margin: auto;
      text-align: left;
    }
    .bankDiv {
      border: 1px solid black;
      margin: auto;
      width: 96%;
    }
    ._bankImage {
      height: 30px;
      margin-top:5px
    }
    ._tr1 {
      border: 1px solid black;
      font-size: 9px;

    }
    ._td2 {
      border: 1px solid black;
      padding: 1%;
      font-size: 9px;

    }
    
    ._banKNoteTxt {
      font-size: 7px;
      margin-left: 8px;
      text-align: left;
    }
    ._noteDiv {
      color: red;
      font-size: 7px;
      text-align: left;
      margin-left: 2%;
      line-height: 13px;
      margin-bottom: 5px;
    }
    ._table3 {
      width: 96%;
      text-align: left;
      margin: auto;
    }
    ._td4 {
      padding: 1%;
      font-size: 12px;
      border: 1px solid;
    }
    ._table4 {
      width: 96%;
      text-align: left;
      margin: auto;
      margin-top: 10px;
    }
    ._td5 {     
      font-size: 9px;
    }
    ._td6 {
      font-size: 9px;
    }
    ._amount {
      font-weight: 300;
    }
    ._slipName {
      text-align: center;
      background-color: purple;
      color: white;
      width: 40%;
      padding: 2px;
      font-size: 12px;
      margin: auto;
      margin-bottom: 10px;
    }
    ._table5{
        width: 96%;
        margin: auto;
        margin-top: 20px;
    }
    ._td7{
      border-bottom: 1px solid black;
      width: 25%;
      font-size: 9px;
 
    }
    
    @media only screen and (max-width: 700px) {
      .container{
        max-width: 400px;
        overflow: scroll;
        max-height: 450px;
        margin: auto;
      }
      }
    
    
    ._img_wrapper{
      text-align: center;
    }
    ._first_tb_td{
      border: none !important;
    }
    
    
    ._card{
      width: 250px;
      padding: 4px;
    }
    ._heading{
      text-align: center;
      font-weight: bold;
      margin-top:10px;
      margin-bottom:10px;

    }
  
    ._bank_name{
      font-weight: bold;
    }
    
    ._signature_td{
      padding: 0px !important;
      margin: 0px !important;
      text-align:center;
      font-size:6px
    }
    </style>
  </head>
  <body>
  <div class="container">
  <table class="_table">
    <tr>
      <td style="border-right:2px dotted grey"  >
        <div class="_card">
          <div class="_img_wrapper">
            <img src="data:image/png;base64,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" alt="" class="_logo" />
          </div>
          <p class="_slipName">Iskillers Copy</p>
          <table class="_table1">
            <tr>
              <td class="_first_tb_td">Branch code ____________</td>
              <td class="_first_tb_td"> Branch code ____________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">ONLINE DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://www.mcb.com.pk/themes/mcb2019/img/lg-logo.png"
                alt=""
                class="_bankImage"
              />
              <span class="_bank_name">Muslim Commercial Bank</span>
            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>1234567890</td>
              </tr>
            </table>
            <div class="_banKNoteTxt">
              Note: Bank Services Charges Free Of Cost
            </div>
          </div>
          <div class="_noteDiv">
            <span>Note: </span><span>Desired Bank Stamp is required on the deposit slip and send Orignal Depsit Slip(iskillers Copy) to Iskillers Office.</span>
          </div>
          <table border="1" class="_table3">
            <tr>
              <td class="_td4">Applicant Name:${name}</td>

            </tr>
            <tr>
              <td class="_td4">Father's Name:${fname}$</td>
            </tr>
            <tr>
              <td class="_td4">CNIC/B-Form:${nic}$</td>
            </tr>
            <tr>
              <td class="_td4">Course:${course}</td>
            </tr>
          </table>
          <table class="_table4" border="1">
            <tr>
              <td class="_td5">
                Amount/Rs
              </td>
              <td class="_td6">
              <span class="_amount">${fees}</span>
              </td>
            </tr>

            <tr>
              <td class="_td5">
                <span>Amount in words/Rs: </span>

              </td>
              <td class="_td6">
                <span class="_amount">Two Thousand Rupees Only/=</span>
              </td>
            </tr>
          </table>
          <table class="_table5">
            <tr>
              <td> ________________</td>
              <td> ________________</td>
              <td> ________________</td>
            </tr> 
            <tr>
              <td class="_signature_td">Applicant Signature</td>
              <td class="_signature_td">Cashier</td>
              <td class="_signature_td">Officer</td>
            </tr>
          </table>
        </div>
      </td>
      <td style="border-right:2px dotted grey">
        <div class="_card">
          <div class="_img_wrapper">
            <img src="data:image/png;base64,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" alt="" class="_logo" />
          </div>
          <p class="_slipName">Iskillers Copy</p>
          <table class="_table1">
            <tr>
              <td class="_first_tb_td">Branch code ____________</td>
              <td class="_first_tb_td"> Branch code ____________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">ONLINE DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://www.mcb.com.pk/themes/mcb2019/img/lg-logo.png"
                alt=""
                class="_bankImage"
              />
              <span class="_bank_name">Muslim Commercial Bank</span>
            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>1234567890</td>
              </tr>
            </table>
            <div class="_banKNoteTxt">
              Note: Bank Services Charges Free Of Cost
            </div>
          </div>
          <div class="_noteDiv">
            <span>Note: </span><span>Desired Bank Stamp is required on the deposit slip and send Orignal Depsit Slip(iskillers Copy) to Iskillers Office.</span>
          </div>
          <table border="1" class="_table3">
            <tr>
              <td class="_td4">Applicant Name:${name}</td>

            </tr>
            <tr>
              <td class="_td4">Father's Name:${fname}</td>
            </tr>
            <tr>
              <td class="_td4">CNIC/B-Form:${nic}</td>
            </tr>
            <tr>
              <td class="_td4">Course:${course}</td>
            </tr>
          </table>
          <table class="_table4" border="1">
            <tr>
              <td class="_td5">
                Amount/Rs
              </td>
              <td class="_td6">
              <span class="_amount">${fees}</span>
              </td>
            </tr>

            <tr>
              <td class="_td5">
                <span>Amount in words/Rs: </span>

              </td>
              <td class="_td6">
                <span class="_amount">Two Thousand Rupees Only/=</span>
              </td>
            </tr>
          </table>
          <table class="_table5">
            <tr>
              <td> ________________</td>
              <td> ________________</td>
              <td> ________________</td>
            </tr>
            <tr>
              <td class="_signature_td">Applicant Signature</td>
              <td class="_signature_td">Cashier</td>
              <td class="_signature_td">Officer</td>
            </tr>
          </table>
        </div>
      </td>
      <td>
        <div class="_card">
          <div class="_img_wrapper">
            <img src="data:image/png;base64,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" alt="" class="_logo" />
          </div>
          <p class="_slipName">Iskillers Copy</p>
          <table class="_table1">
            <tr>
              <td class="_first_tb_td">Branch code ____________</td>
              <td class="_first_tb_td"> Branch code ____________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">ONLINE DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://www.mcb.com.pk/themes/mcb2019/img/lg-logo.png"
                alt=""
                class="_bankImage"
              />
              <span class="_bank_name">Muslim Commercial Bank</span>
            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>1234567890</td>
              </tr>
            </table>
            <div class="_banKNoteTxt">
              Note: Bank Services Charges Free Of Cost
            </div>
          </div>
          <div class="_noteDiv">
            <span>Note: </span><span>Desired Bank Stamp is required on the deposit slip and send Orignal Depsit Slip(iskillers Copy) to Iskillers Office.</span>
          </div>
          <table border="1" class="_table3">
            <tr>
              <td class="_td4">Applicant Name:${name}</td>

            </tr>
            <tr>
              <td class="_td4">Father's Name:${fname}</td>
            </tr>
            <tr>
              <td class="_td4">CNIC/B-Form:${nic}</td>
            </tr>
            <tr>
              <td class="_td4">Course:${course}</td>
            </tr>
          </table>
          <table class="_table4" border="1">
            <tr>
              <td class="_td5">
                Amount/Rs
              </td>
              <td class="_td6">
                <span class="_amount">${fees}</span>
              </td>
            </tr>

            <tr>
              <td class="_td5">
                <span>Amount in words/Rs:Five </span>

              </td>
              <td class="_td6">
                <span class="_amount">
                Two Thousand Rupees Only/=
                </span>
              </td>
            </tr>
          </table>
          <table class="_table5">
            <tr>
              <td> ________________ </td>
              <td> ________________</td>
              <td> ________________</td>
            </tr>
            <tr>
              <td class="_signature_td">Applicant Signature</td>
              <td class="_signature_td">Cashier</td>
              <td class="_signature_td">Officer</td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
</div>
  </body>
</html>`;
};