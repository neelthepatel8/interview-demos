import { MOCK_API } from "./config";
var FieldService = {
  getDefaults: function () {
    return {
      label: "",
      required: false,
      choices: [],
      displayAlpha: false,
      default: "",
    };
  },
  getField: function (id) {
    return {
      label: "Sales region",
      required: false,
      choices: [
        "Asia",
        "Australia",
        "Western Europe",
        "North America",
        "Eastern Europe",
        "Latin America",
        "Middle East and Africa",
      ],
      displayAlpha: true,
      default: "North America",
    };
  },
  saveField: async function (fieldJson) {
    try {
      const response = await fetch(MOCK_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fieldJson),
      });

      console.log("Posted field:", fieldJson);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error saving field:", error);
    }
  },
};

export default FieldService;
