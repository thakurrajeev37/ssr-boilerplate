import layout from "../../server/layout.js";
import { generatePageData } from "../../server/util/generatePageData.js";

export function pageGenerator (req, res) {
    const pageData = generatePageData(req);
    res.send(layout(pageData));
}

export default { pageGenerator };