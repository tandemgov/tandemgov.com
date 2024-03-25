require("dotenv").config();

module.exports = {
    HTTP_HOST: process.env.DEPLOY_URL || "https://tandemgov.com",
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
        "display": true,
        "items": [
            "Proposal strategy development",
            "Orals/Tech challenge coaching",
            "Color reviews",
            "Technical writing",
            "Solution engineering",
            "Staffing strategy framework",
        ],
        "description": "Enhance your proposals with our strategic expertise, covering everything from strategy development and technical writing to comprehensive reviews and solution engineering. We provide tailored coaching for orals and technical challenges, ensuring your team is fully prepared and your staffing strategy is robust and effective.",
    }, {
        "name": "Contract Support",
        "display": true,
        "items": [
            "Contract coaching",
            "Compliance training",
            "Partner identification & analysis",
        ],
        "description": "Streamline your contract management with our focused services, including personalized coaching to navigate complex contract scenarios, comprehensive compliance training to ensure adherence to regulations, and expert partner identification and analysis to build strong, strategic alliances. Our approach is designed to optimize your contract handling for maximum efficiency and success.",
    }, {
        "name": "Opportunity Analysis",
        "display": true,
        "items": [
            "Custom data analytics & research",
            "Partner identification",
            "Teaming strategies",
            "Introduction assistance* (mutual opt-in?)",
            "Acquisition strategy training",
        ],
        "description": "Our service delves deep into custom data analytics and research to identify lucrative opportunities and potential partners, while also advising on effective teaming strategies. We also offer acquisition strategy training and facilitate introductions, ensuring a mutual opt-in for strong, collaborative relationships. This comprehensive approach equips you with the insights and strategies needed to capture the right opportunities.",
    }, {
        "name": "Capture Management",
        "display": true,
        "items": [
            "Landscape analysis",
            "Past performance study",
            "Strategic review?",
            "Solutions engineering",
            "Demo/Pitch support",
            "Case study development",
            "Artifact curation & creation",
        ],
        "description": "Elevate your bid strategy with our services, ranging from in-depth landscape analysis and past performance studies to strategic reviews and tailored solutions engineering. We support your demos and pitches, develop compelling case studies, and assist in the curation and creation of key artifacts, ensuring you have a robust and well-crafted approach for winning bids.",
    }, {
        "name": "Sales & Business Development",
        "display": true,
        "items": [
            "Process analysis & optimization",
            "Tool development & documentation",
            "Infrastructure analysis",
            "Automation (development?)",
            "Reporting (consultation, development, other?)",
            "Artifact curation",
        ],
        "description": "Streamline your sales processes with our targeted approach, including process analysis, tool development, and effective automation. We also offer comprehensive support in infrastructure analysis, reporting, and artifact curation, ensuring your sales strategy is both efficient and impactful.",
    }, {
        "name": "Marketing & Thought Leadership",
        "display": true,
        "items": [
            "Whitepaper assistance",
            "Blog post development",
        ],
        "description": "Enhance your brand's visibility and authority with our services. We assist in crafting insightful whitepapers and engaging blog posts, amplifying your thought leadership. Additionally, we guide your participation in speaker events and panel discussions, positioning you as an industry leader.",
    }],
};
