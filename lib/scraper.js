import axios from "axios";
import cheerio from "cheerio";

async function getHTML(url) {
  const { data: html } = await axios.get(
    "https://www.apple.com/shop/product/MV892AM/A/40mm-hyper-grape-nike-sport-loop"
  );
  return html;
}

async function getStockInfo(html) {
  //load up cheerio
  const $ = cheerio.load(html);
  const div = $('[data-deliverypartnumber="MV892AM/A"]');
  console.log(div.html());
}

export { getHTML, getStockInfo };

// <div class="as-pdp-deliverydates column large-6 small-6 isdudeavailable as-purchaseinfo-dudeinfo">
//                     <span class="icon icon-shipping as-purchaseinfo-availabilityicons" style="display: block;"></span>
//                     <div class="shipdeliverydates as-pdp-shipdeliverydates" data-deliverypartnumber="MV892AM/A">
// <div data-autom="dudeInfo">
//         <span>Delivery:</span>
//     <ul class="as-purchaseinfo-dudeinfo">
//             <li class="as-purchaseinfo-dudeinfo-deliverymsg">
//                 <span>Currently Unavailable</span>
//             </li>
//             </ul>
//     </div>
// </div>
//                 </div>
