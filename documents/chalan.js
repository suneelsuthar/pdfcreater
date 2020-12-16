module.exports = ({ name, fname, nic, course,fees,sNumber }) => {
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
      width: 120px;
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
        <span>${sNumber+1}</span>
          <div class="_img_wrapper">
            <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254" alt="" class="_logo" />
          </div>
          <p class="_slipName">Iskillers Copy</p>
          <table class="_table1">
            <tr>
            <td class="_first_tb_td">Branch code: 1941</td>
            <td class="_first_tb_td">Date_______________________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/United_Bank_Limited_logo.svg/1200px-United_Bank_Limited_logo.svg.png"
                alt=""
                class="_bankImage"
              />
            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>270466645</td>
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
                <span class="_amount">Five thousands only</span>
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
        <span>${sNumber+1}</span>
          <div class="_img_wrapper">
            <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254" alt="" class="_logo" />
          </div>
          <p class="_slipName">Student Copy</p>
          <table class="_table1">
            <tr>
            <td class="_first_tb_td">Branch code: 1941</td>
            <td class="_first_tb_td">Date_______________________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/United_Bank_Limited_logo.svg/1200px-United_Bank_Limited_logo.svg.png"
                alt=""
                class="_bankImage"
              />
            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>270466645</td>
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
                <span class="_amount">Five thousands only</span>
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
        <span>${sNumber+1}</span>
          <div class="_img_wrapper">
            <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254" alt="" class="_logo" />
          </div>
          <p class="_slipName">Bank Copy</p>
          <table class="_table1">
            <tr>
              <td class="_first_tb_td">Branch code: 1941</td>
              <td class="_first_tb_td">Date_______________________</td>
            </tr>
            <tr>
              <td class="_first_tb_td" colSpan="2">Branch Name_____________________________________</td>
            </tr>

          </table>
          <div class="_heading">DEPOSIT SLIP</div>
          <div class="bankDiv">
            <div class="_img_wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/United_Bank_Limited_logo.svg/1200px-United_Bank_Limited_logo.svg.png"
                alt=""
                class="_bankImage"
              />

            </div>
            <table class="_table2">
              <tr class="_tr1">
                <td colspan="2" class="_td2">
                  <span>Branch: </span> 1-8 Markaz Branch Islamabad
                </td>

              </tr>
              <tr class="_tr1">
                <td class="_td2"><span>A/c Title: </span>ISKILLERS</td>
                <td class="_td2"><span>A/c NO: </span>270466645</td>
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
                Five thousands only
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