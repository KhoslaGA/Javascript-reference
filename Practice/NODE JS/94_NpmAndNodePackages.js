
// Required package
var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("94_NPM(pdf-node package).html", "utf8");

// Style of the pdf expected 
var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };


    // providing HTML, user data and pdf path for output

    var users = [
        {
          name: "tom",
          age: "21",
        },
        {
          name: "dick",
          age: "23",
        },
        {
          name: "harry",
          age: "29",
        },
      ];
      var document = {
        html: html,
        data: {
          users: users,
        },
        path: "./output.pdf",
        type: "pdf",
      };

      // using the PDF function

      pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
      