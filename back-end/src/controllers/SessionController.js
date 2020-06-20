const User = require('../models/User');
const nodemailer = require('nodemailer');
// const html = require('../controllers/htmlEmail');

module.exports = {
    async store(req, res) {

        const email = req.body.email;
       
        if(email === ""){
          return res.json({msg: 'Vazio'});
        }else{

        

        //Host SMTL do email
        const indexArroba = email.indexOf("@");  
        const tamanhoString = email.length;
        const emailSMTP = email.substring(indexArroba + 1, tamanhoString);

        let hostSMTP = '';
        let email_const = '';

        if(emailSMTP == "gmail.com"){
          email_const = 'completelv@gmail.com';
          hostSMTP = "smtp." + emailSMTP;
        }else{
          email_const = 'completelv@outlook.com';
          hostSMTP = "smtp." + "office365.com";
        }


        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
            nodemailer.createTestAccount((err, account) => {

                //Mensagem do email HTML
                
                const htmlEmail = `
                <!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml">
              
              <head>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>LV Complete</title>
              
                <style type="text/css">
                  @media only screen and (max-width:480px) {
              
                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    blockquote {
                      -webkit-text-size-adjust: none !important
                    }
              
                    body {
                      width: 100% !important;
                      min-width: 100% !important
                    }
              
                    #bodyCell {
                      padding: 0 !important
                    }
              
                    table.kmMobileHide {
                      display: none !important
                    }
              
                    table.kmDesktopOnly,
                    td.kmDesktopOnly,
                    th.kmDesktopOnly,
                    tr.kmDesktopOnly,
                    td.kmDesktopWrapHeaderMobileNone {
                      display: none !important
                    }
              
                    table.kmMobileOnly {
                      display: table !important
                    }
              
                    tr.kmMobileOnly {
                      display: table-row !important
                    }
              
                    td.kmMobileOnly,
                    td.kmDesktopWrapHeader,
                    th.kmMobileOnly {
                      display: table-cell !important
                    }
              
                    tr.kmMobileNoAlign,
                    table.kmMobileNoAlign {
                      float: none !important;
                      text-align: initial !important;
                      vertical-align: middle !important;
                      table-layout: fixed !important
                    }
              
                    tr.kmMobileCenterAlign {
                      float: none !important;
                      text-align: center !important;
                      vertical-align: middle !important;
                      table-layout: fixed !important
                    }
              
                    td.kmButtonCollection {
                      padding-left: 9px !important;
                      padding-right: 9px !important;
                      padding-top: 9px !important;
                      padding-bottom: 9px !important
                    }
              
                    td.kmMobileHeaderStackDesktopNone,
                    img.kmMobileHeaderStackDesktopNone,
                    td.kmMobileHeaderStack {
                      display: block !important;
                      margin-left: auto !important;
                      margin-right: auto !important;
                      padding-bottom: 9px !important;
                      padding-right: 0 !important;
                      padding-left: 0 !important
                    }
              
                    td.kmMobileWrapHeader,
                    td.kmMobileWrapHeaderDesktopNone {
                      display: inline-block !important
                    }
              
                    td.kmMobileHeaderSpacing {
                      padding-right: 10px !important
                    }
              
                    td.kmMobileHeaderNoSpacing {
                      padding-right: 0 !important
                    }
              
                    table.kmDesktopAutoWidth {
                      width: inherit !important
                    }
              
                    table.kmMobileAutoWidth {
                      width: 100% !important
                    }
              
                    table.kmTextContentContainer {
                      width: 100% !important
                    }
              
                    table.kmBoxedTextContentContainer {
                      width: 100% !important
                    }
              
                    td.kmImageContent {
                      padding-left: 0 !important;
                      padding-right: 0 !important
                    }
              
                    img.kmImage {
                      width: 100% !important
                    }
              
                    td.kmMobileStretch {
                      padding-left: 0 !important;
                      padding-right: 0 !important
                    }
              
                    table.kmSplitContentLeftContentContainer,
                    table.kmSplitContentRightContentContainer,
                    table.kmColumnContainer,
                    td.kmVerticalButtonBarContentOuter table.kmButtonBarContent,
                    td.kmVerticalButtonCollectionContentOuter table.kmButtonCollectionContent,
                    table.kmVerticalButton,
                    table.kmVerticalButtonContent {
                      width: 100% !important
                    }
              
                    td.kmButtonCollectionInner {
                      padding-left: 9px !important;
                      padding-right: 9px !important;
                      padding-top: 9px !important;
                      padding-bottom: 9px !important
                    }
              
                    td.kmVerticalButtonIconContent,
                    td.kmVerticalButtonTextContent,
                    td.kmVerticalButtonContentOuter {
                      padding-left: 0 !important;
                      padding-right: 0 !important;
                      padding-bottom: 9px !important
                    }
              
                    table.kmSplitContentLeftContentContainer td.kmTextContent,
                    table.kmSplitContentRightContentContainer td.kmTextContent,
                    table.kmColumnContainer td.kmTextContent,
                    table.kmSplitContentLeftContentContainer td.kmImageContent,
                    table.kmSplitContentRightContentContainer td.kmImageContent {
                      padding-top: 9px !important
                    }
              
                    td.rowContainer.kmFloatLeft,
                    td.rowContainer.kmFloatLeft,
                    td.rowContainer.kmFloatLeft.firstColumn,
                    td.rowContainer.kmFloatLeft.firstColumn,
                    td.rowContainer.kmFloatLeft.lastColumn,
                    td.rowContainer.kmFloatLeft.lastColumn {
                      float: left;
                      clear: both;
                      width: 100% !important
                    }
              
                    table.templateContainer,
                    table.templateContainer.brandingContainer,
                    div.templateContainer,
                    div.templateContainer.brandingContainer,
                    table.templateRow {
                      max-width: 650px !important;
                      width: 100% !important
                    }
              
                    h1 {
                      font-size: 40px !important;
                      line-height: 1.5 !important
                    }
              
                    h2 {
                      font-size: 32px !important;
                      line-height: 1.5 !important
                    }
              
                    h3 {
                      font-size: 26px !important;
                      line-height: 1.5 !important
                    }
              
                    h4 {
                      font-size: 14px !important;
                      line-height: 1.5 !important
                    }
              
                    td.kmTextContent {
                      font-size: 14px !important;
                      line-height: 2 !important
                    }
              
                    td.kmTextBlockInner td.kmTextContent {
                      padding-right: 18px !important;
                      padding-left: 18px !important
                    }
              
                    table.kmTableBlock.kmTableMobile td.kmTableBlockInner {
                      padding-left: 9px !important;
                      padding-right: 9px !important
                    }
              
                    table.kmTableBlock.kmTableMobile td.kmTableBlockInner .kmTextContent {
                      font-size: 14px !important;
                      line-height: 2 !important;
                      padding-left: 4px !important;
                      padding-right: 4px !important
                    }
                  }
                </style>
              
              </head>
              
              <body style="margin:0;padding:0;background-color:#151515">
      
                <center>
                  <table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" width="100%"
                    data-upload-file-url="/ajax/email-editor/file/upload" data-upload-files-url="/ajax/email-editor/files/upload"
                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:auto;padding:0;background-color:#151515;height:100%;margin:0;width:100%">
                    <tbody>
                      <tr>
                        <td align="center" id="bodyCell" valign="top"
                          style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:auto;padding-top:0;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%">
                          <div class="templateContainer"
                            style="border:0 none;background-color:#151515;border-radius:0;display: table; width:650px">
                            <div class="templateContainerInner" style="padding:0">
                            <table border="0" cellpadding="0" cellspacing="0" class="templateContainer"  width="650" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                            <tbody>
                              <tr>
                                <td class="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                <tr>
                                  <td align="center" valign="top"
                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                    <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                      <tbody>
                                        <tr>
                                          <td class="rowContainer kmFloatLeft" valign="top"
                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;text-align: center;">
                                                            <a href="http://localhost:3000/boasvindas"
                                                              target="_self"
                                                              style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none">
                                                              <img align="center" alt="LV Complete" class="kmImage"
                                                                src="https://i.ibb.co/FH9CCY2/logo.png"
                                                                width="632"
                                                                style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;max-width:1200px;padding:0;border-width:0;">
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;text-align: center;">
                                                            <a href="http://localhost:3000/boasvindas"
                                                              target="_self"
                                                              style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none">  
                                                            <img align="center" alt="Lave seu carro sem perder tempo"
                                                                class="kmImage"
                                                                src="https://i.ibb.co/T06FYtG/capa.png"
                                                                width="632"
                                                                style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;max-width:900px;padding:0;border-width:0;">
                                                           </a>
                                                                </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;text-align: center;">
                                                            <a href="http://localhost:3000/boasvindas"
                                                              target="_self"
                                                              style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none">
                                                            <img align="center"
                                                              class="kmImage"
                                                              src="https://i.ibb.co/MMGYr7q/Vamos-dan-ar-e-cantar-6.png"
                                                              width="632"
                                                              style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;max-width:1200px;padding:0;border-width:0;">
                                                          </a>
                                                              </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;">
                                                            <a href="http://localhost:3000/boasvindas"
                                                              target="_self"
                                                              style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none">  
                                                            <img align="left"
                                                                class="kmImage"
                                                                src="https://i.ibb.co/zGrr8qh/Vamos-te-ajudar-a-crescer-como-empreendimento-10.png"
                                                                width="632"
                                                                style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;margin-right:0;max-width:1200px;padding:0;border-width:0;">
                                                           </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;">
                                                            <a href="http://localhost:3000/boasvindas"
                                                            target="_self"
                                                            style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none">
                                                            <img align="left" class="kmImage"
                                                                src="https://i.ibb.co/ZgwJ8HG/Vamos-te-ajudar-a-crescer-como-empreendimento-11.png"
                                                                width="632"
                                                                style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;margin-right:0;max-width:1200px;padding:0;border-width:0;">
                                                             </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                              <tbody class="kmImageBlockOuter">
                                                <tr>
                                                  <td class="kmImageBlockInner"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0px;padding-right:9;padding-left:9;"
                                                    valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                      class="kmImageContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;min-width:100%">
                                                      <tbody>
                                                        <tr>
                                                          <td class="kmImageContent" valign="top"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding:0;font-size:0;padding:0;">
                                                            <a href="#"> 
                                                            <img align="left" class="kmImage"
                                                                src="https://i.ibb.co/fkJpYGC/Vamos-dan-ar-e-cantar-8.png"
                                                                width="632"
                                                                style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;width:100%;margin-right:0;max-width:750px;padding:0;border-width:0;">
                                                              </a> 
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                
                                  <td align="center" valign="top"
                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                    <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                      <tbody>
                                        <tr>
                                          <td class="rowContainer kmFloatLeft" valign="top"
                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                           
                                            <table border="0" cellpadding="0" cellspacing="0" class="kmButtonBarBlock" width="100%"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                              <tbody class="kmButtonBarOuter">
                                                <tr>
                                                  <td class="kmButtonBarInner" align="center" valign="top"
                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px;">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                      class="kmButtonBarContentContainer" width="100%"
                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center"
                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                              class="kmButtonBarContent"
                                                              style='border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;font-family:"MS Serif", Georgia'>
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" valign="top"
                                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td valign="top"
                                                                            style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                                            <!-- INSTAGRAM -->
                                                                            <table align="left" border="0" cellpadding="0"
                                                                              cellspacing="0" class=""
                                                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td align="center" valign="top"
                                                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;">
                                                                                    <!-- URL DO INSTAGRAM -->
                                                                                    <a href="#"
                                                                                      target="_blank"
                                                                                      style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none"><img
                                                                                        src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/instagram_96.png"
                                                                                         class="kmButtonBlockIcon"
                                                                                        width="48"
                                                                                        style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;width:48px; max-width:48px; display:block;"></a>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                            <!-- FACEBOOK -->
                                                                            <table align="left" border="0" cellpadding="0"
                                                                              cellspacing="0" class=""
                                                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed">
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td align="center" valign="top"
                                                                                    style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;">
                                                                                    <!-- COLOCAR URL DO FACEBOOK -->
                                                                                    <a href="#"
                                                                                      target="_blank"
                                                                                      style="word-wrap:break-word;max-width:100%;color:#F05C38;font-weight:normal;text-decoration:none"><img
                                                                                        src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/facebook_96.png"
                                                                                        class="kmButtonBlockIcon"
                                                                                        width="48"
                                                                                        style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%;width:48px; max-width:48px; display:block;"></a>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              
              
              
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
              </body>
              
              </html>

                `

                //Enviando email pro usuário
                let transporter = nodemailer.createTransport({
                    host: hostSMTP,
                    port: 587,
                    secure: false,
                    auth: {
                        user: email_const, // email da empresa
                        pass: '5Ym5yuuo' // senha do email da empresa
                    }
                });

                const mail =  {
                    from: email_const, // email da empresa
                    to: email, // pro email que coloquei no front
                    subject: "Boas vindas do LV Complete", //Titulo do email
                    text: "Mudando seu jeito de empreender", // Mensagem da empresa
                    html: htmlEmail, //Formatação do estilo da mensagem
                    attachments: [ //Enviar arquivo/Configuração do arquivo
                        {
                          filename: 'teste.pdf',
                          path: __dirname + '/teste.pdf',
                          cid: 'pdf1@lvcomplete.com' 
                        }

                      ]
                }

                transporter.sendMail(mail, (err, info) => {
                    if (err) {
                        console.log("Error : " + err);
                    } else {
                        console.log("Email enviado : " + info)
                    }
                    transporter.close();
                });
            });
            return res.json(user);
        }else{

          return res.json({msg: 'Erro'});

        }


      }   
    }
};
