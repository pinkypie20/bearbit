var currentUrl = window.location.href;


async function getImageFromURL(url,rowId) {
    GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
        if (response.status == 200) {
            var parsedData = new DOMParser().parseFromString(response.responseText, 'text/html');
            var ogImageMeta = parsedData.querySelector('meta[property="og:image"]');
            var imageURL = "";
            if (ogImageMeta) {
                imageURL = ogImageMeta.getAttribute('content');
            }
            else if ( parsedData.querySelector('#magnific-image') ) {
                imageURL = parsedData.querySelector('#magnific-image').getAttribute('src');
            }
            else if ( parsedData.querySelector('#main-image') ) {
                imageURL = parsedData.querySelector('#main-image').getAttribute('src');
            }
            else {
                imageURL = url;
            }
            var htmlNew = '<div class="image-container">'
            htmlNew += '<img src="'+imageURL+'" class="original-image" style="display: inline; max-height: 171px; max-width: 125px;">';
            htmlNew += '<div class="hover-image">'
            htmlNew += '<img class="hover-img-size" src="'+imageURL+'" alt="Hover Image">'
            htmlNew += '</div>'
            htmlNew += '</div>'
            rowId.innerHTML = htmlNew;
        }
    },
    onerror: function(err) {
        console.error("Error occurred during request:", err);
    }
});
}

if ( currentUrl.includes("details.php?") ) {
    console.log("detail");
    var torrentId = currentUrl.split("?id=")[1].split("&")[0];
    var downloadFlg = "AutoThankAndDownload=1";
    if ( currentUrl.includes(downloadFlg) ) {
        sndReq('action=say_thanks&id='+torrentId, 'saythanks');
        document.getElementsByClassName("index")[0].click();
    }
    return true;
}
var tableAll = document.getElementsByTagName("table")
var tablePosition = null;
for ( var i=0; i<tableAll.length; i++) {
	if ( tableAll[i].rows[0].innerHTML.includes("ดูด") ) {
		tablePosition = i;
	}
}

var targetTable = tableAll[tablePosition]
var headerRow = targetTable.rows[0];
var newHeaderCell = headerRow.insertCell(1);
newHeaderCell.innerHTML = "[BBPlus] Screenshot";
newHeaderCell.className = "colhead";
newHeaderCell.align = 'center';
for ( i=1; i<targetTable.rows.length; i++ ) {
	var newRowCell = targetTable.rows[i].insertCell(1);
	newRowCell.width = "125px";
	newRowCell.align = 'center';
	newRowCell.innerHTML = "Loading...";
}

for ( i=1; i<targetTable.rows.length; i++ ) {
	var cells = targetTable.rows[i].getElementsByTagName("td");
	var fileNameCellTagAs = cells[2].getElementsByTagName("a");
	var screenShotURL = "";
	for ( var j=0; j<fileNameCellTagAs.length; j++ ) {
		if (fileNameCellTagAs[j].innerHTML.includes("pic/cams.gif") || fileNameCellTagAs[j].innerHTML.includes("pic/cam.gif")) {
            screenShotURL = fileNameCellTagAs[j].href;
            getImageFromURL(screenShotURL,cells[1]);
            break;
        }
    }
}

const images = document.querySelectorAll('.hover-image img');
images.forEach(img => {
  const src = img.getAttribute('src');
  const newImg = new Image();
  newImg.src = src;
});

// Open link in a popup window
function openPopup(url) {
    var width = 600; // Width of the popup window
    var height = 400; // Height of the popup window
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var popup = window.open(url, '_blank', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    return false; // Prevents the default link behavior
}

for ( i=1; i<targetTable.rows.length; i++ ) {
	cells = targetTable.rows[i].getElementsByTagName("td");
    var detailLink = cells[2].getElementsByTagName("a")[0].href;
    var fileSizeCell = cells[8]
    var dubbleQout = '"';
    var Qout = "'";
    var onclickMake = dubbleQout+'window.open('+Qout+detailLink+'&AutoThankAndDownload=1'+Qout+",'_blank');"+dubbleQout;
    //btn.attr("onclick", 'window.open("'+detailLink+'&AutoThankAndDownload=1");');
	cells[2].innerHTML += '<br><br><button role="button" class="button-38" onclick='+onclickMake+' >Download : '+fileSizeCell.innerText+'</button>';
}