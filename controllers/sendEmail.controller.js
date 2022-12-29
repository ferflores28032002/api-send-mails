import nodemailer from "nodemailer";
import { PASSWORD, PORT_SMTP, SERVICE, USER } from "../env/configEnv.js";

// Configuración del smtp para el envio del gmail
var transporter = nodemailer.createTransport({
  service: SERVICE,
  secure: false,
  port: PORT_SMTP,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = (req, res) => {
  const {
    rfc,
    businessName,
    street,
    nExt,
    nInt,
    county,
    municipality,
    state,
    postalCode,
    country,
    fullName,
    voucher,
    room,
    dateIn,
    dateOut,
    email,
  } = req.body;

  try {
    const message = {
      // from: "Correo@gmail.com",
      to: email,
      subject: `¡Hola ${fullName}!`,
      text: "Este es un correo enviado desde nodemailer",
      html: `<!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            
                <!-- ================================================= -->
            
                <style type="text/css">
                  @media only screen and (min-width: 620px) {
                    .u-row {
                      width: 600px !important;
                    }
                    .u-row .u-col {
                      vertical-align: top;
                    }
            
                    .u-row .u-col-18 {
                      width: 108px !important;
                    }
            
                    .u-row .u-col-18p34 {
                      width: 110.04px !important;
                    }
            
                    .u-row .u-col-63p66 {
                      width: 381.96px !important;
                    }
            
                    .u-row .u-col-100 {
                      width: 600px !important;
                    }
                  }
            
                  @media (max-width: 620px) {
                    .u-row-container {
                      max-width: 100% !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                    }
                    .u-row .u-col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                    }
                    .u-row {
                      width: 100% !important;
                    }
                    .u-col {
                      width: 100% !important;
                    }
                    .u-col > div {
                      margin: 0 auto;
                    }
                  }
                  body {
                    margin: 0;
                    padding: 0;
                  }
            
                  table,
                  tr,
                  td {
                    vertical-align: top;
                    border-collapse: collapse;
                  }
            
                  p {
                    margin: 0;
                  }
            
                  .ie-container table,
                  .mso-container table {
                    table-layout: fixed;
                  }
            
                  * {
                    line-height: inherit;
                  }
            
                  a[x-apple-data-detectors="true"] {
                    color: inherit !important;
                    text-decoration: none !important;
                  }
            
                  table,
                  td {
                    color: #000000;
                  }
                  #u_body a {
                    color: #cca250;
                    text-decoration: none;
                  }
                  @media (max-width: 480px) {
                    #u_content_image_4 .v-src-width {
                      width: auto !important;
                    }
                    #u_content_image_4 .v-src-max-width {
                      max-width: 57% !important;
                    }
                    #u_content_image_3 .v-container-padding-padding {
                      padding: 46px 10px 10px !important;
                    }
                    #u_content_image_3 .v-src-width {
                      width: auto !important;
                    }
                    #u_content_image_3 .v-src-max-width {
                      max-width: 29% !important;
                    }
                    #u_content_heading_3 .v-container-padding-padding {
                      padding: 10px 20px !important;
                    }
                    #u_content_heading_3 .v-font-size {
                      font-size: 28px !important;
                    }
                    #u_content_text_3 .v-container-padding-padding {
                      padding: 10px 22px 26px !important;
                    }
                    #u_content_heading_2 .v-container-padding-padding {
                      padding: 22px 22px 10px !important;
                    }
                    #u_content_heading_2 .v-font-size {
                      font-size: 24px !important;
                    }
                  }
                </style>
            
                <link
                  href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
                  rel="stylesheet"
                  type="text/css"
                />
              </head>
              <body>
                <div style="padding: 0px; background-color: transparent">
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      background: linear-gradient(
                        223.15deg,
                        #0095d3 10.31%,
                        #114c96 96.24%
                      );
                    "
                  >
                    <!-- ===================== -->
            
                    <div style="font-family: 'Montserrat', sans-serif">
                      <div
                        style="
                          padding: 20px 0px;
            
                          text-align: center;
                        "
                      >
                        <img
                          src="cid:hilton"
                          style="width: 80px; min-height: 60px"
                          alt="Hilton"
                        />
                      </div>
                    </div>
            
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <div
                        class="u-col u-col-18"
                        style="
                          max-width: 320px;
                          min-width: 108px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          style="
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <div
                            style="
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ></div>
                        </div>
                      </div>
            
                      <div
                        class="u-col u-col-63p66"
                        style="
                          max-width: 320px;
                          min-width: 381.96px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          style="
                            height: 100%;
            
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                            margin-top: 10px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              height: 100%;
                              padding: 20px;
                            
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Montserrat', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px;
                                      font-family: 'Montserrat', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-font-size"
                                      style="
                                        margin: 0px;
                                        color: #ffffff;
                                        line-height: 160%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-weight: normal;
                                        font-family: 'Montserrat', sans-serif;
                                        font-size: 17px;
                                      "
                                    >
                                      <strong>Datos</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
            
                            <table
                              style="font-family: 'Montserrat', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Montserrat', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      style="
                                        color: #f1f8f5;
                                        line-height: 200%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          ><strong
                                            ><span
                                              style="font-size: 14px; line-height: 28px"
                                              >✓</span
                                            ></strong
                                          >&nbsp;</span
                                        >
                                        <strong>RFC : </strong> ${rfc}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          ><strong>✓</strong></span
                                        >
                                        &nbsp;
                                        <strong>BUSINESS NAME : </strong> ${businessName}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>STREET : </strong> ${street}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>N&deg; NEXT : </strong> ${nExt}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>N&deg; INT : </strong> ${nInt}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>COUNTY : </strong> ${county}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp;
                                        <strong>MUNICIPALITY : </strong> ${municipality}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>STATE : </strong> ${state}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp;
                                        <strong>POSTAL CODE : </strong> ${postalCode}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>COUNTRY : </strong> ${country}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>FULLNAME : </strong> ${fullName}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>VOUCHER : </strong> ${voucher}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>ROOM : </strong> ${room}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp; <strong>CHECK-IN-DATE : </strong> ${dateIn}
                                      </p>
                                      <p style="font-size: 14px; line-height: 200%">
                                        <span
                                          style="
                                            color: #f7e1b5;
                                            font-size: 14px;
                                            line-height: 28px;
                                          "
                                          >✓</span
                                        >
                                        &nbsp;
                                        <strong>CHECK-OUT-DATE : </strong> ${dateOut}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
            
                      <div
                        class="u-col u-col-18p34"
                        style="
                          max-width: 320px;
                          min-width: 110.04px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          style="
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <div
                            style="
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <table
                              style="font-family: 'Montserrat', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Montserrat', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      height="0px"
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0pt;
                                        vertical-align: top;
                                        border-top: 0px solid #ffffff;
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                              font-size: 0px;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <span>&#160;</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <table
                      style="
                        font-family: 'Montserrat', sans-serif;
            
                        margin-top: 20px;
                      "
                      role="presentation"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="v-container-padding-padding"
                            style="
                              overflow-wrap: break-word;
                              word-break: break-word;
                              padding: 10px;
                              font-family: 'Montserrat', sans-serif;
                            "
                            align="left"
                          >
                            <div
                              style="
                                color: #ffffff;
                                line-height: 180%;
                                text-align: center;
                                word-wrap: break-word;
                              "
                            >
                              <p style="font-size: 14px; line-height: 180%">
                                Todos los derechos reservados
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </body>
            </html>
            `,
      attachments: [
        {
          filename: "Hotel-Hilton.png",
          path: "Hotel-Hilton.png",
          cid: "hilton",
        },
      ],
    };

    const Send = transporter.sendMail(message, (error) => {
      if (error) {
        return res.status(500).json({
          msg: "¡Ha ocurrido un error al enviar el correo!",
          msg2: error.message
        });
      } else {
        return res.json({
          msg: "¡Correo enviado exitosamente a " + fullName + " !",
        });
      }
    });
  } catch (error) {
    res.json({
      msg: error.message
    })
  }
};
