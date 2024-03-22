require("dotenv").config();

module.exports = {
    HTTP_HOST: process.env.HTTP_HOST || "https://tandemgov.com",
    site: "TandemGov",
    tagline: "Good government,<wbr>better partnerships",
    description: "TandemGov helps organizations navigate government contracting while leveraging their strengths.",
    preview_image: "TandemGov-Preview.png",
    social: [{
        name: "LinkedIn",
        slug: "linkedin",
        url: "https://www.linkedin.com/company/tandemgov",
    }, {
        name: "GitHub",
        slug: "github",
        url: "https://github.com/tandemgov",
    }],
    
    services: [{
        "name": "Proposal Support",
        "items": [
            "Proposal strategy development",
            "Orals/Tech challenge coaching",
            "Color reviews",
            "Technical writing",
            "Solution engineering",
            // "Staffing strategy framework",
        ],
    // }, {
    //     "name": "Contract Support",
    //     "items": [
    //         "Contract coaching",
    //         "Compliance training",
    //         "Partner identification & analysis",
    //     ],
    }, {
        "name": "Opportunity Analysis",
        "items": [
            "Custom data analytics & research",
            "Partner identification",
            "Teaming strategies",
            // "Introduction assistance* (mutual opt-in?)",
            "Acquisition strategy training",
        ],
    }, {
        "name": "Capture Management",
        "items": [
            "Landscape analysis",
            "Past performance study",
            // "Strategic review?",
            "Solutions engineering",
            // "Demo/Pitch support",
            "Case study development",
            // "Artifact curation & creation",
        ],
    // }, {
    //     "name": "Sales & Business Development",
    //     "items": [
    //         "Process analysis & optimization",
    //         "Tool development & documentation",
    //         "Infrastructure analysis",
    //         "Automation (development?)",
    //         "Reporting (consultation, development, other?)",
    //         "Artifact curation",
    //     ],
    // }, {
    //     "name": "Marketing & Thought Leadership",
    //     "items": [
    //         "Whitepaper assistance",
    //         "Blog post development",
    //     ],
    }],
};
