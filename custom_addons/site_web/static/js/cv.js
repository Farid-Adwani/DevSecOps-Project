jQuery(document).ready(function () {
	//////////////
	//////////////
/*	$('#btn-print').click(function () {
		// window.print();

		let wspFrame = document.getElementById('frame').contentWindow;
		wspFrame.focus();
		wspFrame.print();
	});*/
	//////////////
	//////////////

	$('#pdf').click(function () {
// 		var doc = new jsPDF();
// htmlContent=document.bod;
// // Add the HTML content to the PDF
// doc.fromHTML(htmlContent);
//
// // Download the PDF
// doc.save('document.pdf');
		var html=document.getElementById('doc2').innerHTML
		var val =htmlToPdfmake(html)
		var data={content:val,
			styles: {
    '@import': '../css/cv.css'
  },
		}
		// var docDefinition = {
//   content:  document.getElementById('doc2').innerHTML
//   ,
//   css: 'path/to/styles.css'
// };
		pdfMake.createPdf(data).download('document.pdf');
	});

	});