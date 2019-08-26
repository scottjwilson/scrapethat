import { getHTML, getStockInfo } from "./lib/scraper";

async function go() {
  getStockInfo(
    await getHTML(
      "https://www.apple.com/shop/product/MV892AM/A/40mm-hyper-grape-nike-sport-loop"
    )
  );
}

go();
