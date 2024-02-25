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
      const response = await fetch(
        "https://quickbase-ui-interview.free.beeceptor.com/test",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fieldJson),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error("Error saving field:", error);
    }
  },
};

export default FieldService;
